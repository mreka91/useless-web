const counterDisplay = document.querySelector(".counter-number");
const counterMinus = document.querySelector(".counter-minus");
const counterPlus = document.querySelector(".counter-plus");
const title = document.querySelector(".title");
const spinIt = document.querySelector("h2");
const song = new Audio();
song.src =
  "let_s_get_fit_count_to_100_count_to_100_song_counting_to_100_jack_hartmann_8150447242843232477.mp3";

let count = 0;

function spin() {
  if (count % 100 == 0) {
    spinIt.classList.add("spin");
  } else {
    spinIt.classList.remove("spin");
  }
}

//display the count value
function updateDisplay() {
  counterDisplay.innerHTML = count;
}

updateDisplay();

//change the title of the page when you start the count
function changeBackTitle() {
  if (count == 0) {
    title.innerHTML = "Can you count to a hundred?";
  }
}

counterPlus.addEventListener("click", () => {
  count++;
  updateDisplay();
  highFive();
  title.innerHTML = "Keep going!";
  changeBackTitle();
  song.play();
  spin();
});

counterMinus.addEventListener("click", () => {
  count--;
  updateDisplay();
  highFive();
  title.innerHTML = "Are you sure this is the right direction?";
  changeBackTitle();
  song.pause();
  spin();
});

//to hide the pic by default
document.querySelector(".highFive").style.visibility = "hidden";

// to only show the picture when numbers end with 5
function highFive() {
  if (count % 10 == 5) {
    document.querySelector(".highFive").style.visibility = "visible";
  } else {
    document.querySelector(".highFive").style.visibility = "hidden";
  }
}

//to darken the bg color when you scroll down
const [red, green, blue] = [247, 140, 70];
const body = document.querySelector("body");

window.addEventListener("scroll", () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 150;
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

//to have a celebratory emoji dance when you hover over them
const emojis = document.querySelectorAll(".emoji");
const footer = document.querySelectorAll(".footer");

emojis.forEach((emoji) => {
  emoji.addEventListener("mouseover", () => {
    emoji.style.fontSize = "5em";
  });
  emoji.addEventListener("mouseout", () => {
    emoji.style.fontSize = "1.5em";
  });
});
