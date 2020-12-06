const counterDisplay = document.querySelector(".counter-number");
const counterMinus = document.querySelector(".counter-minus");
const counterPlus = document.querySelector(".counter-plus");
const title = document.querySelector(".title");

let count = 0;

//display the count value
function updateDisplay() {
  counterDisplay.innerHTML = count;
}

updateDisplay();

//change the title of the page when you start the count
function changeTitle() {
  if (count < 0) {
    title.innerHTML = "Are you going to the right direction?";
  } else if (count > 0) {
    title.innerHTML = "Keep going!";
  } else {
    title.innerHTML = "Can you count to a thousand?";
  }
}

counterPlus.addEventListener("click", () => {
  count++;
  updateDisplay();
  highFive();
  changeTitle();
});

counterMinus.addEventListener("click", () => {
  count--;
  updateDisplay();
  highFive();
  changeTitle();
});

// thide the pic by default
document.querySelector(".highFive").style.visibility = "hidden";

// to only show the picture when numbers end with 5
function highFive() {
  if (count % 10 == 5) {
    document.querySelector(".highFive").style.visibility = "visible";
  } else {
    document.querySelector(".highFive").style.visibility = "hidden";
  }
}
