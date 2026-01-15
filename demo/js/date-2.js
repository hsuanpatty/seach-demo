//月曆
(function () {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dateToolContexts = document.querySelectorAll('.etd-1.sass-form-group');
    let scrollPos = 0; // 手機版專用紀錄捲動位置

    dateToolContexts.forEach((container) => {
        const calendar = container.querySelector('.calendar');
        const overlay = container.querySelector('.overlay');
        const startBtns = container.querySelectorAll('#startBox, #mStartBtn');
        const endBtns = container.querySelectorAll('#endBox, #mEndBtn');
        const rangeBtn = container.querySelector('#rangeBtn');
        const startVal = container.querySelector('#startVal, #mStartVal');
        const endVal = container.querySelector('#endVal, #mEndVal');
        const pcInput = container.querySelector('#dateInput');
        
        const closeBtn = container.querySelector('.pc-close-btn, .m-close-btn');
        const prevBtn = container.querySelector('#prevBtn');
        const nextBtns = container.querySelectorAll('#nextBtnPC, #nextBtnMobile');

        let startDate = new Date(2026, 0, 15); 
        let endDate = new Date(2026, 2, 15);
        let viewDate = new Date(2026, 0, 1);
        let activeMode = "range";

        function render() {
            const m1 = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
            const m2 = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
            const t1 = container.querySelector('#title1');
            const t2 = container.querySelector('#title2');
            if (t1) t1.innerText = `${m1.getFullYear()}年${m1.getMonth() + 1}月`;
            if (t2) t2.innerText = `${m2.getFullYear()}年${m2.getMonth() + 1}月`;
            const table1 = container.querySelector('#table1');
            const table2 = container.querySelector('#table2');
            if (table1) table1.innerHTML = createTableHTML(m1);
            if (table2) table2.innerHTML = createTableHTML(m2);

            if (prevBtn) {
                const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
                prevBtn.disabled = m1 <= thisMonth;
            }
            updateUI();
            attachCellEvents();
        }

        function createTableHTML(monthDate) {
            const y = monthDate.getFullYear(), m = monthDate.getMonth();
            const firstDay = new Date(y, m, 1).getDay();
            const lastDate = new Date(y, m + 1, 0).getDate();
            let html = `<table><thead><tr><th class="is-holiday">日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th class="is-holiday">六</th></tr></thead><tbody><tr>`;
            for (let i = 0; i < firstDay; i++) html += "<td></td>";
            for (let d = 1; d <= lastDate; d++) {
                const curr = new Date(y, m, d);
                const isHoliday = (curr.getDay() === 0 || curr.getDay() === 6) ? "is-holiday" : "";
                const isDisabled = curr < today ? "disabled" : "";
                html += `<td data-date="${y}/${m + 1}/${d}" class="${isHoliday} ${isDisabled}"><div class="date-box"><span>${d}</span><span class="txt"></span></div></td>`;
                if ((firstDay + d) % 7 === 0) html += "</tr><tr>";
            }
            return html + "</tr></tbody></table>";
        }

        function updateUI() {
            container.querySelectorAll("td[data-date]").forEach((td) => {
                const dateStr = td.dataset.date.replace(/-/g, "/");
                const curr = new Date(dateStr);
                const txt = td.querySelector(".txt");
                td.classList.remove("start-date", "end-date", "in-range", "hover-range", "hover-end");
                if (txt) txt.textContent = "";

                if (startDate && curr.getTime() === startDate.getTime()) {
                    td.classList.add("start-date");
                    if (txt) txt.textContent = "出發";
                } else if (endDate && curr.getTime() === endDate.getTime()) {
                    td.classList.add("end-date");
                    if (txt) txt.textContent = "回程";
                } else if (startDate && endDate && curr > startDate && curr < endDate) {
                    td.classList.add("in-range");
                }
            });
            const fmt = (d) => d ? `${d.getFullYear()}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getDate().toString().padStart(2, "0")}` : "";
            if (startVal) startVal.textContent = startDate ? fmt(startDate) : "選擇日期";
            if (endVal) endVal.textContent = endDate ? fmt(endDate) : "選擇日期";
            if (pcInput) pcInput.value = (startDate && endDate) ? `${fmt(startDate)} ~ ${fmt(endDate)}` : "";
        }

        function attachCellEvents() {
            const allCells = container.querySelectorAll("td[data-date]");
            allCells.forEach((td) => {
                if (td.classList.contains("disabled")) return;

                td.onclick = (e) => {
                    e.stopPropagation();
                    const clicked = new Date(td.dataset.date.replace(/-/g, "/"));
                    
                    if (activeMode === "start") {
                        startDate = clicked;
                        if (endDate && clicked >= endDate) endDate = null;
                        updateUI();
                        hideCalendar(); // 選完出發直接關閉
                    } else if (activeMode === "end") {
                        if (clicked <= startDate) {
                            startDate = clicked;
                            endDate = null;
                        } else {
                            endDate = clicked;
                        }
                        updateUI();
                        hideCalendar(); // 選完回程直接關閉
                    } else {
                        startDate = clicked;
                        endDate = null;
                        activeMode = "end";
                        updateUI();
                    }
                };

                // 電腦版 Hover 效果 (保持不變)
                td.onmouseenter = () => {
                    if (activeMode !== "end" || !startDate || endDate) return;
                    const hoverTime = new Date(td.dataset.date.replace(/-/g, "/")).getTime();
                    const startTime = startDate.getTime();
                    if (hoverTime <= startTime) return;

                    allCells.forEach((cell) => {
                        const cellTime = new Date(cell.dataset.date.replace(/-/g, "/")).getTime();
                        const txt = cell.querySelector(".txt");
                        cell.classList.remove("hover-range", "hover-end");
                        if (cellTime === startTime) return; 
                        if (txt) txt.textContent = "";

                        if (cellTime > startTime && cellTime < hoverTime) {
                            cell.classList.add("hover-range");
                        } else if (cellTime === hoverTime) {
                            cell.classList.add("hover-end");
                            if (txt) txt.textContent = "回程"; 
                        }
                    });
                };
            });

            if (calendar) {
                calendar.onmouseleave = () => {
                    if (startDate && !endDate) updateUI();
                };
            }
        }

        // --- 強力鎖定手機版背景 ---
        function showCalendar(mode) {
            activeMode = mode;
            calendar.classList.add("active");
            if (overlay) overlay.classList.add("active");
            
            if (window.innerWidth < 576) {
                scrollPos = window.pageYOffset;
                document.body.style.top = `-${scrollPos}px`;
                document.body.classList.add('calendar-open'); // 此 class 需配合您的 CSS
            }
            render();
        }

        function hideCalendar() {
            calendar.classList.remove("active");
            if (overlay) overlay.classList.remove("active");
            
            if (window.innerWidth < 576) {
                document.body.classList.remove('calendar-open');
                document.body.style.top = '';
                window.scrollTo(0, scrollPos);
            }
        }

        // 箭頭點擊 e.preventDefault()
        nextBtns.forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault(); e.stopPropagation();
                viewDate.setMonth(viewDate.getMonth() + 1);
                render();
            };
        });

        if (prevBtn) {
            prevBtn.onclick = (e) => {
                e.preventDefault(); e.stopPropagation();
                viewDate.setMonth(viewDate.getMonth() - 1);
                render();
            };
        }

        startBtns.forEach(btn => btn.onclick = (e) => { e.preventDefault(); showCalendar("start"); });
        endBtns.forEach(btn => btn.onclick = (e) => { e.preventDefault(); showCalendar("end"); });
        if (rangeBtn) rangeBtn.onclick = (e) => { e.preventDefault(); showCalendar("range"); };
        if (closeBtn) closeBtn.onclick = (e) => { e.stopPropagation(); e.preventDefault(); hideCalendar(); };
        if (overlay) overlay.onclick = (e) => { e.preventDefault(); hideCalendar(); };

        render();
    });
})();



// 手機版 accordion - 平滑延伸優化版
$(".accordion-button").on("click", function (e) {
  e.preventDefault();

  const $btn = $(this);
  const $content = $btn.next(".accordion-content");
  const $icon = $btn.find(".icon");
  const isExpanded = $btn.attr("aria-expanded") === "true";
  const duration = 350;

  // ===== 收起其他 accordion，動畫完成後再展開自己 =====
  const $others = $(".accordion-button").not($btn).filter(function() {
    return $(this).attr("aria-expanded") === "true";
  });

  let completed = 0;
  const total = $others.length;

  function tryExpand() {
    if (!isExpanded) {
      // 展開自己
      $btn.attr("aria-expanded", "true");
      $icon.addClass("expanded");

      $content.css({ display: "block", height: 0, overflow: "hidden" });
      const fullHeight = $content[0].scrollHeight;

      animateHeight($content, 0, fullHeight, duration, () => {
        $content.css({ height: "auto", overflow: "visible" });

        // ✅ accordion 展開完成後再初始化手機版日期選擇器
        const smInput = $content.find("#date-range-sm");
        if (smInput.length && typeof initDateRange === "function" && !smInput.data("daterangepicker")) {
          initDateRange(smInput);
        }
      });
    } else {
      // 收起自己
      $btn.attr("aria-expanded", "false");
      $icon.removeClass("expanded");

      const curHeight = $content.outerHeight();
      animateHeight($content, curHeight, 0, duration, () => {
        $content.css({ display: "none" });
      });
    }
  }

  if (total === 0) {
    tryExpand();
  } else {
    $others.each(function() {
      const $b = $(this);
      const $c = $b.next(".accordion-content");
      $b.attr("aria-expanded", "false");
      $b.find(".icon").removeClass("expanded");

      animateHeight($c, $c.outerHeight(), 0, duration, () => {
        $c.css("display", "none");
        completed++;
        if (completed === total) tryExpand();
      });
    });
  }
});

// ===== JS 高度動畫函數 =====
function animateHeight($el, from, to, duration, callback) {
  const start = performance.now();
  function step(timestamp) {
    const progress = Math.min((timestamp - start) / duration, 1);
    const value = from + (to - from) * progress;
    $el.css("height", value + "px");
    if (progress < 1) requestAnimationFrame(step);
    else if (callback) callback();
  }
  requestAnimationFrame(step);
}

