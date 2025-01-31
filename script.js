// Auto-Typing Text Effect
const textArray = ["Websites", "Applications", "Cool Designs"];
let textIndex = 0;
let charIndex = 0;
const autoTextElement = document.querySelector(".auto-text");

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        autoTextElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 150);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        autoTextElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 100);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, 500);
});
