/* SCROLL ANIMATION */
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

/* SKILL ANIMATION */
window.addEventListener("load", () => {
  document.querySelectorAll(".progress div").forEach(bar => {
    let w = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => bar.style.width = w, 300);
  });
});

/* TYPING EFFECT */
const text = ["Java Developer", "Web Developer", "Problem Solver"];
let i = 0, j = 0, current = "", del = false;

function type() {
  current = text[i];
  document.querySelector(".typing").textContent = current.substring(0, j);

  if (!del && j < current.length) j++;
  else if (del && j > 0) j--;
  else {
    del = !del;
    if (!del) i = (i + 1) % text.length;
  }

  setTimeout(type, del ? 50 : 100);
}

type();