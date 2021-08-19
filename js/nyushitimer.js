const year = new Date().getFullYear();
const kindaiexam = new Date(2021, 12,20).getTime();
const month = new Date().getMonth();

// 카운트다운
let timer = setInterval(function() {

  // 오늘 날짜
  const today = new Date().getTime();

  // 차이 계산
  let diff;
  {
    diff = kindaiexam - today;
  }

  // 밀리초 변환
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // 표시
    document.getElementById("timer").innerHTML =
      "<div class=\"days\"> \
    <div class=\"numbers\">" + days + "</div>日</div> \
  <div class=\"hours\"> \
    <div class=\"numbers\">" + hours + "</div>時間</div> \
  <div class=\"minutes\"> \
    <div class=\"numbers\">" + minutes + "</div>分</div> \
  <div class=\"seconds\"> \
    <div class=\"numbers\">" + seconds + "</div>秒</div> \
  </div>";

}, 1000);
