const openMoalBtn = document.querySelector("#openModalBtn");
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector("#closeBtn");
const inputText = document.querySelector("#text");
const inputRadio = document.querySelector("#radio");
const select = document.querySelector("#choise");
const divValue = document.querySelector(".value");
const name = document.getElementsByName("check");
console.log(...name);

openMoalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let arr = [];
  if (inputRadio.checked) {
    inputRadio.value = "NAJATA";
  } else {
    inputRadio.value = "TI NE NAJAL";
  }
  [...name].forEach((element) => {
    arr.push(element.value);
  });
  console.log(arr);
  modalWrapper.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});
