const navigationToggle = document.querySelector("[data-navigation-toggle]");
const navigation = document.querySelector("[data-navigation]");
const currentYear = document.querySelector("[data-current-year]");

function closeNavigation() {
    if (!navigationToggle || !navigation) {
        return;
    }

    navigationToggle.setAttribute("aria-expanded", "false");
    navigationToggle.setAttribute("aria-label", "Open navigation");
    navigation.dataset.open = "false";
    document.body.classList.remove("navigation-open");
}

if (navigationToggle && navigation) {
    navigationToggle.addEventListener("click", () => {
        const isOpen = navigationToggle.getAttribute("aria-expanded") === "true";

        navigationToggle.setAttribute("aria-expanded", String(!isOpen));
        navigationToggle.setAttribute(
            "aria-label",
            isOpen ? "Open navigation" : "Close navigation"
        );
        navigation.dataset.open = String(!isOpen);
        document.body.classList.toggle("navigation-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeNavigation);
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeNavigation();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 820) {
            closeNavigation();
        }
    });
}

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
