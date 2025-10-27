function initScrollTo() {
  const menu = document.querySelectorAll(".js-menu a[href^='#']");
  console.log(menu);

  function whenClick(item) {
    item.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    // console.log(section);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  menu.forEach((item) => {
    item.addEventListener("click", whenClick);
  });
}

initScrollTo();

function initSmoothScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const window6Size = window.outerHeight * 0.6;
    function whenScroll() {
      sections.forEach((item) => {
        const topOf = item.getBoundingClientRect().top < 0 + window6Size;
        if (topOf) {
          item.classList.add("ativo");
        }
      });
    }
    sections[0].classList.add("ativo");
    window.addEventListener("scroll", whenScroll);
  }
}

initSmoothScroll();