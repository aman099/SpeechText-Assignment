const questionConts = document.querySelectorAll(".faq .question");

questionConts.forEach((ques) => {
  ques.addEventListener("click", (e) => {
    e.target.closest(".faq").classList.toggle("active");
  });
});

// document.addEventListener("click", (e) => {
//   questionConts.forEach((ques) => {
//     console.log(e.target);
//     // if (e.target.matches(".faq")) console.log("FAQ Cliked!");
//     // ques.closest(".faq").classList.toggle("active");
//   });
// });

// TextArea default text
const textAreaEl = document.querySelector("#status");

const valueLengthCapture = document.querySelector(".valueLengthCapture");

// valueLengthCapture.textContent = 256;
valueLengthCapture.textContent = "Characters: " + 296;

textAreaEl.addEventListener("input", function (e) {
  console.log(e.target.value.length);
  valueLengthCapture.textContent = "Characters: " + e.target.value.length;
});

// Selector Buttons Popups
const selectorBtnContainer = document.querySelector(".selector-btn");
const selectorBtn = document.querySelector(".selector-btn .language-selector");

const selectorBtnPopup = document.querySelector(".selector-btn-popup");
const selectorBtnInputEl = document.querySelector(
  ".selector-btn-popup .input-container input"
);

selectorBtn.addEventListener("click", (e) => {
  console.log(e.target == selectorBtn);
  console.log(e.target);

  // console.log("Document clicked");

  selectorBtnPopup.classList.toggle("hide");
  selectorBtnInputEl.focus();
});

const angelBtnContainer = document.querySelector(".ai-angel-btn");
const angelBtn = document.querySelector(".ai-angel-btn button");
const angelBtnPopup = document.querySelector(".angel-btn-popup");
const angelBtnInputEl = document.querySelector(
  ".angel-btn-popup .input-container input"
);

angelBtn.addEventListener("click", (e) => {
  // console.log(e.target == selectorBtn);
  // console.log(e.target);

  // console.log("Document clicked");

  angelBtnPopup.classList.toggle("hide");
  angelBtnInputEl.focus();
});

const pitchBtnPopup = document.querySelector(".pitch-btn .pitch-btn-popup");
const pitchBtn = document.querySelector(".pitch-btn button");

pitchBtn.addEventListener("click", (e) => {
  pitchBtnPopup.classList.toggle("hide");
});

const speedBtnPopup = document.querySelector(".speed-btn .speed-btn-popup");
const speedBtn = document.querySelector(".speed-btn button");

speedBtn.addEventListener("click", (e) => {
  speedBtnPopup.classList.toggle("hide");
});

// Navbar Animation
const hiddenMenus = document.querySelector(".hidden-menus");
const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");

hamburgerMenuIcon.addEventListener("click", (e) => {
  hiddenMenus.classList.toggle("show");
  hamburgerMenuIcon.classList.toggle("active");
});
