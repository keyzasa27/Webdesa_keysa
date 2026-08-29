// ===============================
// MENU MOBILE
// ===============================

function toggleMenu() {
    const menu = document.querySelector(".nav-menu");
    const button = document.querySelector(".menu-button");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        button.innerHTML = "✕";
    } else {
        button.innerHTML = "☰";
    }
}


// ===============================
// MENUTUP MENU SETELAH DIKLIK
// ===============================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const menu = document.querySelector(".nav-menu");
        const button = document.querySelector(".menu-button");

        menu.classList.remove("active");
        button.innerHTML = "☰";

    });

});


// ===============================
// EFEK NAVBAR SAAT SCROLL
// ===============================

window.addEventListener("scroll", function() {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ===============================
// TAHUN OTOMATIS
// ===============================

const yearElement = document.querySelector(".copyright");

if (yearElement) {

    yearElement.innerHTML =
        "© " + new Date().getFullYear() +
        " Pemerintah Desa Serunai. Semua Hak Dilindungi.";

}
