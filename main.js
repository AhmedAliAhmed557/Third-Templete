let nums = document.querySelectorAll(".stats .number");
let section = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
  let sectionStats = document.querySelector(".our-skills");
  let spans = document.querySelectorAll(".the-progress span");
  if (window.scrollY >= sectionStats.offsetTop + 100) {
    spans.forEach((ele) => {
      ele.style.width = ele.dataset.width;
    });
  }
};

function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// let sectionStats = document.querySelector(".our-skills");
// let spans = document.querySelectorAll(".the-progress span");

// window.onscroll = function () {
//   if (window.scrollY >= sectionStats.offsetTop + 100) {
//     spans.forEach((ele) => {
//       ele.style.width = ele.dataset.width;
//     });
//   };
// };

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

let countDowndate = new Date("Dec 31, 2022 23:59:59").getTime();
let counter = setInterval(() => {
  let dataNow = new Date().getTime();
  let diffData = countDowndate - dataNow;
  let days = Math.floor(diffData / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffData % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diffData % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffData % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (diffData < 0) {
    clearInterval(counter);
  }
}, 1000);

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
let special = document.querySelector(".show-mega-menu");
let megaMenue = document.querySelector(".mega-menu");
let aVal = document.querySelector(".special");
special.onclick = function (e) {
  megaMenue.style.zIndex = "150";
};
