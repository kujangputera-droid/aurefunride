const REGISTRATION_URL = "https://wa.link/8p60xa";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-register]").forEach(function (button) {
    button.href = REGISTRATION_URL;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
  });
});
