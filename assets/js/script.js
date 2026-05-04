document.addEventListener("DOMContentLoaded", function () {
	var siteNav = document.querySelector(".site-nav");
	var toggleButton = document.querySelector(".nav-toggle");
	var navButtons = document.querySelector(".nav-buttons");

	if (!siteNav || !toggleButton || !navButtons) {
		return;
	}

	toggleButton.addEventListener("click", function () {
		var isOpen = siteNav.classList.toggle("is-open");
		toggleButton.setAttribute("aria-expanded", String(isOpen));
	});

	navButtons.addEventListener("click", function (event) {
		if (event.target.tagName.toLowerCase() === "a") {
			siteNav.classList.remove("is-open");
			toggleButton.setAttribute("aria-expanded", "false");
		}
	});
});
