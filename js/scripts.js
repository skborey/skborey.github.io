/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link"),
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  const stackButtons = document.querySelectorAll("#fullstack .stack-button");
  const stackContents = document.querySelectorAll("#fullstack .stack-content");

  function setActiveStack(targetId) {
    stackButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.target === targetId);
    });
    stackContents.forEach((content) => {
      content.classList.toggle("active", content.id === targetId);
    });
  }

  stackButtons.forEach((button) => {
    button.addEventListener("click", () =>
      setActiveStack(button.dataset.target),
    );
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveStack(button.dataset.target);
      }
    });
  });

  const diagram = document.querySelector("#fullstack .diagram");
  const fullscreenButton = document.querySelector("#fullstack-fullscreen-btn");

  function updateFullscreenButton() {
    const isMaximized = diagram.classList.contains("maximized");
    fullscreenButton.innerHTML = isMaximized
      ? '<i class="fa-solid fa-compress"></i>'
      : '<i class="fa-solid fa-expand"></i>';
    fullscreenButton.title = isMaximized
      ? "Restore diagram size"
      : "Expand to browser area";
  }

  function enterFullscreen() {
    diagram.classList.add("maximized");
    updateFullscreenButton();
  }

  function exitFullscreen() {
    diagram.classList.remove("maximized");
    updateFullscreenButton();
  }

  fullscreenButton.addEventListener("click", () => {
    if (diagram.classList.contains("maximized")) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  });

  updateFullscreenButton();
});
