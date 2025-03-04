let myIcon = document.querySelector(".menu");
let myMenu = document.querySelector(".list");
let myNav = document.querySelector(".navbar");

myIcon.addEventListener("click", (e) => {
  myMenu.classList.toggle("active");
  e.target.classList.toggle("active");

  if (e.target.classList.contains("active")) {
    e.target.classList.add("fa-xmark");
  } else {
    e.target.classList.remove("fa-xmark");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 600) {
    myNav.classList.add("active");
  } else {
    myNav.classList.remove("active");
  }
});
