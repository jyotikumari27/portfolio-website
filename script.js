   const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Full Stack Developer", "Cloud Engineer", "UI/UX Enthusiast", "Creative Designer"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}
function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}
document.addEventListener("DOMContentLoaded", type);
