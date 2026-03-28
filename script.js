// SAFE TYPING
const typingElement = document.querySelector(".typing");

if (typingElement) {
  const text = ["Java Developer", "Web Developer", "Problem Solver"];
  let i = 0, j = 0, current = "", del = false;

  function type() {
    current = text[i];
    typingElement.textContent = current.substring(0, j);

    if (!del && j < current.length) j++;
    else if (del && j > 0) j--;
    else {
      del = !del;
      if (!del) i = (i + 1) % text.length;
    }

    setTimeout(type, del ? 50 : 100);
  }

  type();
}

// SCROLL ANIMATION
const faders = document.querySelectorAll(".fade");

function reveal() {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// SKILL ANIMATION
window.addEventListener("load", () => {
  document.querySelectorAll(".progress div").forEach(bar => {
    let w = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => bar.style.width = w, 300);
  });
});
