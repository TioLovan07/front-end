// animasi text typing home
const div = document.querySelector(".text");
const teks = "Partha Coffee";

function typing(element, text, i = 0) {
  element.textContent += teks[i];

  if (i === text.length - 1) {
    return;
  }
  setTimeout(() => typing(element, teks, i + 1), 300);
}

//animasi place holder name
// let i = 0;
// let placeholder = "";
// const txt = "your name";
// const speed = 250;

// function type() {
//   placeholder += txt.charAt(i);
//   document.getElementById("name-id").setAttribute("placeholder", placeholder);
//   i++;
//   setTimeout(type, speed);
// }

// //animasi place holder email
let i = 0;
let placeholder2 = "";
const txt1 = "example@email.com";
const speed2 = 250;

function type2() {
  placeholder2 += txt1.charAt(i);
  document.getElementById("email-id").setAttribute("placeholder", placeholder2);
  i++;
  setTimeout(type2, speed2);
}

//manggil
typing(div, teks, (i = 0));
// type();
type2();
