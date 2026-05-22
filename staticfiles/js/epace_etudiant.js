// document.addEventListener("DOMContentLoaded", function () {
//     function toggleDropdown(buttonId, contentId, iconId) {
//         const button = document.getElementById(buttonId);
//         const content = document.getElementById(contentId);
//         const icon = document.getElementById(iconId);
//         let timeout;

//         button.addEventListener("mouseenter", function () {
//             clearTimeout(timeout);
//             content.classList.add("active");
//             icon.classList.remove("fa-angle-down");
//             icon.classList.add("fa-angle-up");
//         });

//         button.addEventListener("mouseleave", function () {
//             timeout = setTimeout(function () {
//                 content.classList.remove("active");
//                 icon.classList.remove("fa-angle-up");
//                 icon.classList.add("fa-angle-down");
//             }, 300);
//         });

//         content.addEventListener("mouseenter", function () {
//             clearTimeout(timeout);
//         });

//         content.addEventListener("mouseleave", function () {
//             content.classList.remove("active");
//             icon.classList.remove("fa-angle-up");
//             icon.classList.add("fa-angle-down");
//         });
//     }

//     // Appliquer la fonction aux boutons
//     toggleDropdown("formation", "formation-header", "formation-icon");
//     toggleDropdown("employeurs", "employeurs-header", "employeurs-icon");
//     toggleDropdown("qui-sommes-nous", "qui-sommes-nous-header", "qui-sommes-nous-icon");

//     // Rendre les cartes visibles
//     const cards = document.querySelectorAll('.service-card');
//     cards.forEach((card, index) => {
//         setTimeout(() => {
//             card.classList.add('visible');
//         }, index * 200); // Délai pour chaque carte
//     });
// });

// pour le defilement des formations slider images carousel
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.magic-slider');
    const imagesContainer = document.querySelector('.slider-images');
    const images = Array.from(document.querySelectorAll('.slider-image'));
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const sliderContent = document.querySelector('.slider-content');
    
    let currentIndex = 0;
    let visibleThumbnails = 3; // Nombre d'images visibles en même temps

    // Contenu correspondant à chaque image
    const sliderContents = [
        { title: "MAGIC SLIDER", subtitle: "NATURE", text: "Uberal young age, all great community experiences in many of urban life than landembarn" },
        { title: "EXPLORATION", subtitle: "ADVENTURE", text: "Discover new landscapes and embrace the thrill of the unknown." },
        { title: "SERENITY", subtitle: "PEACEFUL NATURE", text: "Find peace in the quiet beauty of untouched nature." },
        { title: "COLLABORATION", subtitle: "WORK TOGETHER", text: "The best results come from teamwork and unity." }
    ];

    function updateSlider() {
        // Changer l'image de fond du slider
        slider.style.backgroundImage = `url('${images[currentIndex].src}')`;

        // Mettre à jour l'état actif des miniatures
        images.forEach(img => img.classList.remove('active'));
        images[currentIndex].classList.add('active');

        // Mettre à jour le texte
        sliderContent.innerHTML = `
            <h1>${sliderContents[currentIndex].title}</h1>
            <h2>${sliderContents[currentIndex].subtitle}</h2>
            <p>${sliderContents[currentIndex].text}</p>
            <button class="see-more">SEE MORE</button>
        `;

        updateThumbnails();
    }

    function updateThumbnails() {
        // Effacer les miniatures affichées
        imagesContainer.innerHTML = "";

        // Déterminer les images visibles
        for (let i = 0; i < visibleThumbnails; i++) {
            let index = (currentIndex + i) % images.length; // Boucle circulaire
            imagesContainer.appendChild(images[index]);
        }
    }

    function rotateImages(direction) {
        if (direction === 'left') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        } else {
            currentIndex = (currentIndex + 1) % images.length;
        }
        updateSlider();
    }

    // Mise à jour initiale
    updateSlider();

    // Gestion des flèches
    leftArrow.addEventListener('click', () => rotateImages('left'));
    rightArrow.addEventListener('click', () => rotateImages('right'));

    // Gestion des miniatures
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });
});



























































































// //Temoigneage de nos encient etudients

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button-prev');
    const nextButton = document.querySelector('.carousel-button-next');
    const dots = document.querySelectorAll('.carousel-dot');
    const carouselContainer = document.querySelector('.carousel-container');

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Fonction pour mettre à jour le carousel
    function updateCarousel() {
        // Déplacer le carousel
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Mettre à jour les points de navigation
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Fonction pour passer au slide suivant
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    // Fonction pour revenir au slide précédent
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Écouteurs d'événements pour les boutons de navigation
    if (nextButton) nextButton.addEventListener('click', nextSlide);
    if (prevButton) prevButton.addEventListener('click', prevSlide);

    // Navigation par points
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Optionnel : Lecture automatique
    setInterval(nextSlide, 5000);

    // Initialiser le carousel
    updateCarousel();
});