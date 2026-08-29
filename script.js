// =====================================
// MENU MOBILE
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }

});


// =====================================
// TUTUP MENU SETELAH MEMILIH MENU
// =====================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });

});


// =====================================
// NAVBAR SAAT SCROLL
// =====================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// =====================================
// TAHUN OTOMATIS
// =====================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// =====================================
// ANIMASI SAAT MASUK KE LAYAR
// =====================================

const cards = document.querySelectorAll(
    ".profile-card, .data-card, .gallery-item, .potential-card, .culture-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.1
    }
);


cards.forEach(function (card) {

    card.classList.add("animate");

    observer.observe(card);

});
