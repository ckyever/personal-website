function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let textBase = "I'm a ";
let roles = ["software engineer", "problem solver"];
let roleIndex = 0;
let i = 0;
let reverse = false;

function typeWriter() {
  var textJitter = Math.floor(Math.random() * (70 - 45) + 45);

  if (reverse) {
    if (document.getElementById("text").innerHTML.length > textBase.length) {
      // We're still in the process of removing the job
      document.getElementById("text").innerHTML = document
        .getElementById("text")
        .innerHTML.slice(0, -1);
      setTimeout(typeWriter, textJitter);
    } else {
      // Deleting done, set next role and repeat
      roleIndex = (roleIndex + 1) % 2;
      reverse = false;
      setTimeout(typeWriter, 1000);
    }
  } else {
    if (i === (textBase + roles[roleIndex]).length) {
      // Line is done wait and then reverse
      i = textBase.length;
      reverse = true;
      setTimeout(typeWriter, 2000);
    } else {
      // Write text like a typewriter
      if (i < (textBase + roles[roleIndex]).length) {
        document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + (
          textBase + roles[roleIndex]
        ).charAt(i);
        i++;
        setTimeout(typeWriter, textJitter);
      }
    }
  }
}

typeWriter();