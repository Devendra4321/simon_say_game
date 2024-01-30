let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let higestScore = 0;

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

//key press game start
document.addEventListener("keypress", function () {
  if (started === false) {
    console.log("Game started");
    started = true;
    levelUp();
  }
});

//flash button and level up
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 200);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 200);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  //Random button choose
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  //   console.log(randIdx);
  //   console.log(randColor);
  //   console.log(randbtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randbtn);
  highScore();
}

//to check user clicked correct  color or not
function checkAns(idx) {
  //   console.log("curr level : ", level);

  if (userSeq[idx] === gameSeq[idx]) {
    // console.log("same value");
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    // console.log("diffrent value");
    h3.innerHTML = `Game over! Your score was <b>${level}</b><br><span style="color:red">Your high score is <b>${higestScore}</b></span><br> Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    reset();
  }
}

//on Buttons event listeners
function btnPress() {
  //   console.log(this);
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  //   console.log(userColor);
  userSeq.push(userColor);
  //   console.log(userSeq);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

//to reset the game
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

//to show higest score
function highScore() {
  if (higestScore < level) {
    higestScore = 0;
    return (higestScore += level);
  } else if (higestScore > level) {
    return higestScore;
  } else {
    return higestScore;
  }
}
