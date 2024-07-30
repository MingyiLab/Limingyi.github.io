document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.querySelector(".nav-toggle");
    var navButtons = document.querySelector(".nav-buttons");
    var navLine = document.querySelector(".nav-line");

    toggleButton.addEventListener("click", function () {
        navButtons.classList.toggle("show");
        navLine.classList.toggle("show");
    });
});
