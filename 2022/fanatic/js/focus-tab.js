document.addEventListener("DOMContentLoaded", function () {
  // User press tab
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add("user-is-tabbing");

      window.removeEventListener("keydown", handleFirstTab);
      window.addEventListener("mousedown", handleMouseDownOnce);
    }
  }
  // User click after press Tab
  function handleMouseDownOnce() {
    document.body.classList.remove("user-is-tabbing");

    window.removeEventListener("mousedown", handleMouseDownOnce);
    window.addEventListener("keydown", handleFirstTab);
  }
  window.addEventListener("keydown", handleFirstTab);
});
