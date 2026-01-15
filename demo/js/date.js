/**
 * 旅遊搜尋列 - 雙月日期選擇器 (XL & SM 多實例整合通用版)
 */
(function () {
    const BREAKPOINT = 992;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dateToolContexts = document.querySelectorAll('.etd-1.sass-form-group');

    dateToolContexts.forEach((container) => {
        const input = container.querySelector('input[type="text"]');
        const calendar = container.querySelector('.calendar');
        const overlay = container.querySelector('.overlay');
        const statusHint = container.querySelector('.editing-hint');
        const mCloseBtn = container.querySelector('.m-close-btn');
        const pcCloseBtn = container.querySelector('.pc-close-btn');
        const dateWrapper = container.querySelector('.date-selector-wrapper');

        // -----------------------------
        // CL3 預設日期範圍
        // -----------------------------
        let startDate = new Date(2026, 0, 15); // 1月15日
        let endDate = new Date(2026, 2, 15);   // 3月15日
        let viewDate = new Date(2026, 0, 1);   // 預設日曆顯示 1月
        let activeMode = "range";
        let scrollPos = 0;

        function render() {
            const m1 = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
            const m2 = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
            const t1 = container.querySelector('.title-text-1') || container.querySelector('span[id^="title1"]');
            const t2 = container.querySelector('.title-text-2') || container.querySelector('span[id^="title2"]');
            if (t1) t1.textContent = `${m1.getFullYear()}年${m1.getMonth() + 1}月`;
            if (t2) t2.textContent = `${m2.getFullYear()}年${m2.getMonth() + 1}月`;

            const table1 = container.querySelector('.table-container-1') || container.querySelector('div[id^="table1"]');
            const table2 = container.querySelector('.table-container-2') || container.querySelector('div[id^="table2"]');
            if (table1) table1.innerHTML = createTableHTML(m1);
            if (table2) table2.innerHTML = createTableHTML(m2);

            const prevBtn = container.querySelector('.prev-btn') || container.querySelector('button[id^="prevBtn"]');
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
            let html = `<table><thead><tr>
                <th class="is-holiday">日</th><th>一</th><th>二</th><th>三</th>
                <th>四</th><th>五</th><th class="is-holiday">六</th>
            </tr></thead><tbody><tr>`;

            for (let i = 0; i < firstDay; i++) html += "<td></td>";
            for (let d = 1; d <= lastDate; d++) {
                const curr = new Date(y, m, d);
                const isHoliday = (curr.getDay() === 0 || curr.getDay() === 6) ? "is-holiday" : "";
                const isDisabled = curr < today ? "disabled" : "";
                html += `<td data-date="${y}-${m + 1}-${d}" class="${isHoliday} ${isDisabled}">
                    <div class="date-box"><span>${d}</span><span class="txt"></span></div>
                </td>`;
                if ((firstDay + d) % 7 === 0) html += "</tr><tr>";
            }

            return html + "</tr></tbody></table>";
        }

        function updateUI() {
            calendar.querySelectorAll("td[data-date]").forEach((td) => {
                const curr = new Date(td.dataset.date.replace(/-/g, "/"));
                const txt = td.querySelector(".txt");
                td.classList.remove("start-date", "end-date", "in-range", "hover-range", "hover-end");
                if (txt) txt.textContent = "";

                if (startDate && curr.getTime() === startDate.getTime()) {
                    td.classList.add("start-date");
                    if (txt) txt.textContent = "出發";
                }
                if (endDate && curr.getTime() === endDate.getTime()) {
                    td.classList.add("end-date");
                    if (txt) txt.textContent = "回程";
                }
                if (startDate && endDate && curr > startDate && curr < endDate) {
                    td.classList.add("in-range");
                }
            });

            if (statusHint) {
                statusHint.textContent =
                    activeMode === "start" ? "請選擇 [出發日期]" :
                    activeMode === "end" ? "請選擇 [回程日期]" :
                    "點擊日期重新選擇";
            }
        }

        function attachCellEvents() {
            calendar.querySelectorAll("td[data-date]").forEach((td) => {
                if (td.classList.contains("disabled")) return;

                td.onclick = (e) => {
                    e.stopPropagation();
                    const clicked = new Date(td.dataset.date.replace(/-/g, "/"));

                    if (activeMode === "start") {
                        if (endDate && clicked >= endDate) endDate = null;
                        startDate = clicked;
                        hideCalendar();
                    } else if (activeMode === "end") {
                        if (clicked <= startDate) {
                            startDate = clicked;
                            endDate = null;
                        } else {
                            endDate = clicked;
                        }
                        hideCalendar();
                    } else {
                        startDate = clicked;
                        endDate = null;
                        activeMode = "end";
                    }

                    updateInputText();
                    updateUI();
                };

                td.onmouseenter = () => {
                    if (window.innerWidth < BREAKPOINT || !startDate || endDate) return;
                    const hDate = new Date(td.dataset.date.replace(/-/g, "/"));
                    if (hDate <= startDate) return;

                    calendar.querySelectorAll("td[data-date]").forEach((t) => {
                        const c = new Date(t.dataset.date.replace(/-/g, "/"));
                        const tTxt = t.querySelector(".txt");
                        t.classList.remove("hover-range", "hover-end");

                        if (startDate && c.getTime() === startDate.getTime()) {
                            if (tTxt) tTxt.textContent = "出發";
                            return;
                        }

                        if (tTxt) tTxt.textContent = "";

                        if (c > startDate && c < hDate) t.classList.add("hover-range");
                        else if (c.getTime() === hDate.getTime()) {
                            t.classList.add("hover-end");
                            if (tTxt) tTxt.textContent = "回程";
                        }
                    });
                };
            });
        }

        function updateInputText() {
            const fmt = (d) => `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
            const pcStartVal = container.querySelector('#startVal');
            const pcEndVal = container.querySelector('#endVal');
            if (pcStartVal) pcStartVal.textContent = startDate ? fmt(startDate) : "去程日期";
            if (pcEndVal) pcEndVal.textContent = endDate ? fmt(endDate) : "回程日期";
            const mS = container.querySelector('.m-value[id^="mStartVal"]');
            const mE = container.querySelector('.m-value[id^="mEndVal"]');
            if (mS) mS.textContent = startDate ? fmt(startDate) : "請選擇";
            if (mE) mE.textContent = endDate ? fmt(endDate) : "請選擇";
            if (input && startDate && endDate) input.value = `${fmt(startDate)} ~ ${fmt(endDate)}`;
        }

        function showCalendar(mode) {
            activeMode = mode;
            calendar.classList.add("active");
            if (overlay) overlay.classList.add("active");
            if (dateWrapper) dateWrapper.classList.add("active-focus");

            if (window.innerWidth < 576) {
                scrollPos = window.pageYOffset || document.documentElement.scrollTop;
                document.body.style.top = `-${scrollPos}px`;
                document.body.classList.add("calendar-open");
            }

            render();
        }

        function hideCalendar() {
            calendar.classList.remove("active");
            if (overlay) overlay.classList.remove("active");
            if (dateWrapper) dateWrapper.classList.remove("active-focus");
            activeMode = "range";

            if (window.innerWidth < 576) {
                document.body.classList.remove("calendar-open");
                document.body.style.top = "";
                window.scrollTo(0, scrollPos);
            }
        }

        // -----------------------------
        // 事件綁定
        // -----------------------------
        const rangeBtn = container.querySelector('#rangeBtn') || input;
        if (rangeBtn) rangeBtn.onclick = () => showCalendar("range");
        const mSBtn = container.querySelector('.m-input-group[id^="mStartBtn"]');
        const mEBtn = container.querySelector('.m-input-group[id^="mEndBtn"]');
        const pcStartBox = container.querySelector('#startBox');
        const pcEndBox = container.querySelector('#endBox');
        if (mSBtn) mSBtn.onclick = () => showCalendar("start");
        if (mEBtn) mEBtn.onclick = () => showCalendar("end");
        if (pcStartBox) pcStartBox.onclick = () => showCalendar("start");
        if (pcEndBox) pcEndBox.onclick = () => showCalendar("end");
        if (overlay) overlay.onclick = hideCalendar;
        if (mCloseBtn) mCloseBtn.onclick = hideCalendar;
        if (pcCloseBtn) pcCloseBtn.onclick = hideCalendar;

        const nextPC = container.querySelector('.next-btn-pc') || container.querySelector('button[id^="nextBtnPC"]');
        const nextMob = container.querySelector('.next-btn-mobile') || container.querySelector('button[id^="nextBtnMobile"]');
        const prev = container.querySelector('.prev-btn') || container.querySelector('button[id^="prevBtn"]');
        if (nextPC) nextPC.onclick = () => { viewDate.setMonth(viewDate.getMonth() + 1); render(); };
        if (nextMob) nextMob.onclick = () => { viewDate.setMonth(viewDate.getMonth() + 1); render(); };
        if (prev) prev.onclick = () => { viewDate.setMonth(viewDate.getMonth() - 1); render(); };

        // -----------------------------
        // 初始渲染
        // -----------------------------
        updateInputText();
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

