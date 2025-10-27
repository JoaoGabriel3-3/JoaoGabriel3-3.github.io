function initScrollTo() {
  const menu = document.querySelectorAll(".js-menu a[href^='#']");
  console.log(menu);

  function whenClick(item) {
    item.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    console.log(section);
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
