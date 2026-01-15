const input = document.getElementById("dateInput");
const calendar = document.getElementById("calendar");
const overlay = document.getElementById("overlay");
const statusHint = document.getElementById("statusHint");
const mCloseBtn = document.getElementById("mCloseBtn");

const today = new Date();
today.setHours(0, 0, 0, 0);

let startDate = new Date(today);
startDate.setDate(today.getDate() + 1);
let endDate = new Date(today);
endDate.setDate(today.getDate() + 2);

let viewDate = new Date();
let activeMode = "range";
const BREAKPOINT = 992;

function render() {
    const m1 = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
    const m2 = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
    
    // 設定標題文字：XXXX年X月
    document.getElementById("title1").innerText = m1.getFullYear() + "年" + (m1.getMonth() + 1) + "月";
    document.getElementById("title2").innerText = m2.getFullYear() + "年" + (m2.getMonth() + 1) + "月";
    
    document.getElementById("table1").innerHTML = createTable(m1);
    document.getElementById("table2").innerHTML = createTable(m2);
    document.getElementById("prevBtn").disabled = m1 <= new Date(today.getFullYear(), today.getMonth(), 1);
    
    updateUI();
    attachEvents();
}

function createTable(monthDate) {
    const y = monthDate.getFullYear(), m = monthDate.getMonth();
    const firstDay = new Date(y, m, 1).getDay();
    const lastDate = new Date(y, m + 1, 0).getDate();
    
    let html = `<table><tr><th class="is-holiday">週日</th><th>週一</th><th>週二</th><th>週三</th><th>週四</th><th>週五</th><th class="is-holiday">週六</th></tr><tr>`;
    
    for (let i = 0; i < firstDay; i++) html += "<td></td>";
    for (let d = 1; d <= lastDate; d++) {
        const curr = new Date(y, m, d);
        const dayOfWeek = curr.getDay();
        const isHoliday = (dayOfWeek === 0 || dayOfWeek === 6) ? "is-holiday" : "";
        const isDisabled = curr < today ? "disabled" : "";
        html += `<td data-date="${y}-${m + 1}-${d}" class="${isHoliday} ${isDisabled}"><div class="date-box"><span>${d}</span><span class="txt"></span></div></td>`;
        if ((firstDay + d) % 7 === 0) html += "</tr><tr>";
    }
    return html + "</tr></table>";
}

function updateUI() {
    document.querySelectorAll("td[data-date]").forEach((td) => {
        const curr = new Date(td.dataset.date.replace(/-/g, "/"));
        const txt = td.querySelector(".txt");
        td.classList.remove("start-date", "end-date", "in-range", "only-one", "hover-range", "hover-end");
        txt.textContent = "";

        if (startDate && curr.getTime() === startDate.getTime()) {
            td.classList.add("start-date");
            txt.textContent = "出發";
            if (!endDate) td.classList.add("only-one");
        }
        if (endDate && curr.getTime() === endDate.getTime()) {
            td.classList.add("end-date");
            txt.textContent = "回程";
        }
        if (startDate && endDate && curr > startDate && curr < endDate) td.classList.add("in-range");
    });
    statusHint.textContent = activeMode === "start" ? "請選擇 [出發日期]" : (activeMode === "end" ? "請選擇 [回程日期]" : "點擊日期重新選擇");
}

function attachEvents() {
    document.querySelectorAll("td[data-date]").forEach((td) => {
        if (td.classList.contains("disabled")) return;
        td.onclick = () => {
            const clicked = new Date(td.dataset.date.replace(/-/g, "/"));
            if (activeMode === "start") {
                if (endDate && clicked >= endDate) endDate = null;
                startDate = clicked;
                if (window.innerWidth < BREAKPOINT) hideCalendar();
            } else if (activeMode === "end") {
                if (clicked <= startDate) { startDate = clicked; endDate = null; } 
                else { endDate = clicked; hideCalendar(); }
            } else {
                startDate = clicked; endDate = null; activeMode = "end";
            }
            updateInput();
            updateUI();
        };
        td.onmouseenter = () => {
            if (window.innerWidth < BREAKPOINT || !startDate || endDate) return;
            const hoverDate = new Date(td.dataset.date.replace(/-/g, "/"));
            if (hoverDate <= startDate) return;
            document.querySelectorAll("td[data-date]").forEach((t) => {
                const c = new Date(t.dataset.date.replace(/-/g, "/"));
                t.classList.remove("hover-range", "hover-end");
                if (c > startDate && c < hoverDate) t.classList.add("hover-range");
                else if (c.getTime() === hoverDate.getTime()) { t.classList.add("hover-end"); t.querySelector(".txt").textContent = "回程"; }
            });
        };
        td.onmouseleave = () => { if (window.innerWidth >= BREAKPOINT && startDate && !endDate) updateUI(); };
    });
}

function updateInput() {
    const fmt = (d) => d ? `${d.getFullYear()}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getDate().toString().padStart(2, "0")}` : "____/__/__";
    input.value = `${fmt(startDate)} ~ ${fmt(endDate)}`;
    document.getElementById("mStartVal").textContent = startDate ? fmt(startDate) : "請選擇";
    document.getElementById("mEndVal").textContent = endDate ? fmt(endDate) : "請選擇";
}

function showCalendar(mode) { activeMode = mode; if (mode === "end" || mode === "range") endDate = null; calendar.classList.add("active"); overlay.classList.add("active"); render(); }
function hideCalendar() { calendar.classList.remove("active"); overlay.classList.remove("active"); activeMode = "range"; }

input.onclick = () => showCalendar("range");
document.getElementById("mStartBtn").onclick = () => showCalendar("start");
document.getElementById("mEndBtn").onclick = () => showCalendar("end");
overlay.onclick = hideCalendar;
mCloseBtn.onclick = hideCalendar;

const nextMonth = (e) => { e.stopPropagation(); viewDate.setMonth(viewDate.getMonth() + 1); render(); };
document.getElementById("nextBtnPC").onclick = nextMonth;
document.getElementById("nextBtnMobile").onclick = nextMonth;
document.getElementById("prevBtn").onclick = (e) => { e.stopPropagation(); viewDate.setMonth(viewDate.getMonth() - 1); render(); };

updateInput();