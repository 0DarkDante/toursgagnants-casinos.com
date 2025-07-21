document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".cookie-banner");
    const buttons = banner.querySelectorAll(".cookie-btn");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        banner.classList.remove("show");
        // localStorage.setItem("cookieConsent", button.classList.contains("accept") ? "yes" : "no");
      });
    });

    // Якщо треба — можна показувати банер лише один раз
    // const consent = localStorage.getItem("cookieConsent");
    // if (!consent) banner.classList.add("show");
  });