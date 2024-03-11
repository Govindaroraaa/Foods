document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    function toggleNavbar() {
        navbar.classList.toggle("active");
    }
    
    menuIcon.addEventListener("click", toggleNavbar);

    navbar.querySelectorAll("a").forEach(function (item) {
        item.addEventListener("click", function () {
            navbar.classList.remove("active");
        });
    });
});
