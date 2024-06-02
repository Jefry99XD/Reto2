const carouselContent = document.querySelector('.carousel-content'); // Selecciona el contenedor del contenido del carrusel
let slideIndex = 0;

// Función para cargar las imágenes del carrusel
function loadImages() {
    const imageCount = 22; // Número de imágenes en la carpeta
    for (let i = 1; i <= imageCount; i++) {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'mySlides fade';
        
        const img = document.createElement('img');
        img.src = `carrucel/imagen${i}.jpg`; // Ruta de la imagen
        img.style.width = '100%'; // Ajusta el ancho de la imagen al 80% del contenedor
        img.style.maxHeight = '400px'; // Establece una altura máxima para las imágenes
        
        slideDiv.appendChild(img);
        carouselContent.appendChild(slideDiv); // Agrega el contenido del carrusel al contenedor del carrusel
    }
}

// Función para mostrar la diapositiva actual
function showSlide(index) {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
}

// Función para avanzar a la siguiente diapositiva
function nextSlide() {
    slideIndex++;
    if (slideIndex >= document.getElementsByClassName("mySlides").length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

// Función para retroceder a la diapositiva anterior
function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = document.getElementsByClassName("mySlides").length - 1;
    }
    showSlide(slideIndex);
}

// Cargar imágenes y mostrar carrusel
loadImages();
showSlide(slideIndex);

// Event Listeners para los botones de navegación del carrusel
document.getElementById('carousel-arrow--prev').addEventListener('click', prevSlide);
document.getElementById('carousel-arrow--next').addEventListener('click', nextSlide);
