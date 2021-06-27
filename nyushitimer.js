const year = new Date().getFullYear();
const kindaiexam = new Date(2022, 0,28).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  {
    diff = kindaiexam - today;
  }

  // math
  let months = Math.floor(diff / (1000 * 60 * 60 * 60 * 12));
  let days = Math.floor((diff % (1000 * 60 * 60 * 60 * 12)) / (1000 * 60 * 60 * 60));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"months\"> \
  <div class=\"numbers\">" + months + "</div>ヶ月</div> \
<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>日</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>時間</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>分</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>秒</div> \
</div>";

}, 1000);