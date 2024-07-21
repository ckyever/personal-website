function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const roles = ["software engineer", "problem solver", "programmer"];
const timeoutBetweenTypingRoles = 2000;

let roleIndex = 0;
let stringIndex = 0;
let isTyping = true;

function typeWriter() {
  // Random timeout value to emulate human typing
  const textJitter = Math.floor(Math.random() * (70 - 45) + 45);

  if (isTyping) {
    if (stringIndex === roles[roleIndex].length) {
      stringIndex = 0
      isTyping = false;
      setTimeout(typeWriter, timeoutBetweenTypingRoles);
    } else {
      if (stringIndex < roles[roleIndex].length) {
        document.getElementById("role-text").innerHTML += (roles[roleIndex]).charAt(stringIndex);
        stringIndex++;
        setTimeout(typeWriter, textJitter);
      }
    }
  } else {
    // Backspacing
    if (document.getElementById("role-text").innerHTML.length > 0) {
      document.getElementById("role-text").innerHTML = document.getElementById("role-text").innerHTML.slice(0, -1);
      setTimeout(typeWriter, textJitter);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      isTyping = true;
      setTimeout(typeWriter, 0);
    }
  }
}

typeWriter();