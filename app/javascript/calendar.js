// 1970~2200まで生成
function generate_year_range(start, end) {
  var years = "";
  for (var year = start; year <= end; year++) {
      years += "<option value='" + year + "'>" + year + "</option>";
  }
  return years;
}

function first_set(){
  // 変数を定義
  var today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();

  var days = ["日", "月", "火", "水", "木", "金", "土"];
  var createYear = generate_year_range(1970, 2200);
  // 1970~2200を埋め込む
  document.getElementById("year").innerHTML = createYear;
  var dayHeader = "<tr>";
  for (day in days) {
  dayHeader += "<th data-days='" + days[day] + "'>" + days[day] + "</th>";
  }
  dayHeader += "</tr>";

  document.getElementById("thead-month").innerHTML = dayHeader;

  showCalendar(currentMonth, currentYear);
}

function next() {
  // 変数を定義
  var today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();

  currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  // 変数を定義
  var today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();

  currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  // 変数を定義
  var today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();
  var selectYear = document.getElementById("year");
  var selectMonth = document.getElementById("month");

  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  // 変数を定義
  var today = new Date();
  var selectYear = document.getElementById("year");
  var selectMonth = document.getElementById("month");

  var months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
  var monthAndYear = document.getElementById("monthAndYear");

  var firstDay = ( new Date( year, month ) ).getDay();

  tbl = document.getElementById("calendar-body");

  tbl.innerHTML = "";

  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  // セルを生成
  var date = 1;
  for ( var i = 0; i < 6; i++ ) {
      var row = document.createElement("tr");

      for ( var j = 0; j < 7; j++ ) {
          if ( i === 0 && j < firstDay ) {
              cell = document.createElement( "td" );
              cellText = document.createTextNode("");
              cell.appendChild(cellText);
              row.appendChild(cell);
          } else if (date > daysInMonth(month, year)) {
              break;
          } else {
              cell = document.createElement("td");
              cell.setAttribute("data-date", date);
              cell.setAttribute("data-month", month + 1);
              cell.setAttribute("data-year", year);
              cell.setAttribute("data-month_name", months[month]);
              cell.className = "date-picker";
              cell.innerHTML = "<span>" + date + "</span>";

              if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                  cell.className = "date-picker selected";
              }
              row.appendChild(cell);
              date++;
          }
      }

      tbl.appendChild(row);
  }

}

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}
window.onload = function(){
  first_set();
}