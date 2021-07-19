const input = document.querySelector(".inputs");
const chance = document.querySelector(".chances");
const result = document.querySelector(".result");
const select = document.querySelector(".selector");
const dis_btn = document.querySelector(".disabled");
const instruction = document.querySelector(".absolute");

let guesses = 3;
let rdmN0A10 = getRandomNumber(10);
let rdmN0A20 = getRandomNumber(20);
let rdmN0A30 = getRandomNumber(30);

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function Restart() {
  document.location.reload();
}

function getNumber() {
  instruction.style.display = "none";
  select.style.display = "none";
  let valueSelect = String(select.value);

  if (guesses > 0) {
    if (valueSelect === "first") {
      findOutNumber(rdmN0A10);
      input.value = "";
    } else if (valueSelect === "second") {
      findOutNumber(rdmN0A20);
      input.value = "";
    } else if (valueSelect === "third") {
      findOutNumber(rdmN0A30);
      input.value = "";
    }
    if (guesses == 0) {
      result.innerText = `You lose do you want to restart? The number was ${Cases(
        valueSelect
      )}`;
      dis_btn.style.display = "block";
    } else if (guesses == 100) {
      dis_btn.style.display = "block";
    }
    chance.innerText = `You have ${guesses} chances`;
  }
}

function Cases(str) {
  switch (str) {
    case "first":
      return rdmN0A10;
    case "second":
      return rdmN0A20;
    case "third":
      return rdmN0A30;
  }
}

function findOutNumber(value) {
  let valueInput = parseInt(input.value);
  if (valueInput < value) {
    result.innerText = "Too small";
    return guesses--;
  } else if (valueInput > value) {
    result.innerText = "Too big";
    return guesses--;
  } else if (valueInput == value) {
    result.innerText = `Congratulation! You win! Do you want to restart? The number was ${value}`;
    return (guesses = 100);
  } else {
    return guesses--;
  }
}
