function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let roles = ["software engineer", "problem solver", "programmer"];
let roleIndex = 0;
let i = 0;
let reverse = false;

function typeWriter() {
  var textJitter = Math.floor(Math.random() * (70 - 45) + 45);

  if (reverse) {
    if (document.getElementById("text").innerHTML.length > 0) {
      // We're still in the process of deleting
      document.getElementById("text").innerHTML = document
        .getElementById("text")
        .innerHTML.slice(0, -1);
      setTimeout(typeWriter, textJitter);
    } else {
      // Deleting done, set next role and repeat
      roleIndex = (roleIndex + 1) % roles.length;
      reverse = false;
      setTimeout(typeWriter, 0);
    }
  } else {
    if (i === roles[roleIndex].length) {
      // Line is done wait and then reverse
      i = 0
      reverse = true;
      setTimeout(typeWriter, 2000);
    } else {
      // Write text like a typewriter
      if (i < roles[roleIndex].length) {
        document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + (
          roles[roleIndex]
        ).charAt(i);
        i++;
        setTimeout(typeWriter, textJitter);
      }
    }
  }
}

typeWriter();