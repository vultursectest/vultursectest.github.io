window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  let scrollPos = window.scrollY;
  if (scrollPos > 40) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// Animate on Scroll
AOS.init({
  once: true,
  duration: 500,
});

// When click on menu item it'll hide the collapse menu
if (screen.width < 992) {
  let menuItems = document.querySelectorAll(
    "header .navbar .navbar-collapse .navbar-nav li a"
  );

  for (menuItem of menuItems) {
    menuItem.addEventListener("click", function () {
      let menuButton = document.querySelector("header .navbar .navbar-toggler");
      menuButton.click();
    });
  }
}
