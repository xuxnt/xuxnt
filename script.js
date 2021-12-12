let btn = document.querySelector(".nav-btn");
let links = document.querySelector("ul");
let anchors = document.querySelectorAll("li a");

btn.addEventListener("click", () => {
  if (!btn.classList.contains("hide")) {
    btn.classList.add("hide", "show");
    links.classList.add("list-slide");
  } else {
    btn.classList.remove("hide", "show");
    links.classList.remove("list-slide");
  }
});

window.addEventListener("scroll", () => {
  let sec2 = document.getElementById("section2");
  let boxHeight = document.querySelector(".box").getBoundingClientRect().height;
  let scrollHeight = window.pageYOffset;

  if (scrollHeight > boxHeight) {
    sec2.classList.add("typing");
  }
});
