document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(
    "a[data-goto], button[data-goto]"
  );
  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
      const menuLink = e.target;

      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

        if (document.documentElement.classList.contains("menu-open")) {
          document.documentElement.classList.remove("lock");
          document.documentElement.classList.remove("menu-open");
          iconMenu.classList.remove("menu-open");
          menuBody.classList.remove("menu-open");
        }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    }
  }
});
