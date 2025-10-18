document.addEventListener("DOMContentLoaded", (event) => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("show");
    });

    // Toggle dropdowns on mobile
    const navItems = nav.querySelectorAll("li > a");
    navItems.forEach(item => {
        item.addEventListener("click", e => {
            const dropdown = item.nextElementSibling;
            if (dropdown && dropdown.classList.contains("dropdown")) {
                if (window.innerWidth <= 768) {
                    e.preventDefault(); // only block navigation on mobile
                    dropdown.classList.toggle("show");
                }
            }
        });
    });
});