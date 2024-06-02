document.addEventListener('DOMContentLoaded', () => {
    const openProductsModalBtn = document.getElementById('openProductsModal');
    const productsModal = document.getElementById('productsModal');
    const closeProductsModal = productsModal.querySelector('.close');
    const productsCarouselContent = document.querySelector('#productsCarousel');
    let slideIndex = 0;

    // Función para cargar las imágenes del carrusel de productos
    function loadProductImages() {
        const imageCount = 4; // Número de imágenes en la carpeta
        for (let i = 1; i <= imageCount; i++) {
            const slideDiv = document.createElement('div');
            slideDiv.className = 'mySlides fade';

            const img = document.createElement('img');
            img.src = `Paquetes/im${i}.jpg`; // Ruta de la imagen
            img.style.width = '100%';
            img.style.maxHeight = '400px';

            slideDiv.appendChild(img);
            productsCarouselContent.appendChild(slideDiv);
        }
    }

    // Función para mostrar la diapositiva actual
    function showSlide(index) {
        const slides = productsCarouselContent.getElementsByClassName('mySlides');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[index].style.display = 'block';
    }

    // Función para avanzar a la siguiente diapositiva
    function nextSlide() {
        slideIndex++;
        if (slideIndex >= productsCarouselContent.getElementsByClassName('mySlides').length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }

    // Función para retroceder a la diapositiva anterior
    function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = productsCarouselContent.getElementsByClassName('mySlides').length - 1;
        }
        showSlide(slideIndex);
    }

    // Event listener para abrir el modal de productos
    openProductsModalBtn.addEventListener('click', () => {
        productsModal.style.display = 'block';
        loadProductImages();
        showSlide(slideIndex);
    });

    // Event listener para cerrar el modal de productos
    closeProductsModal.addEventListener('click', () => {
        productsModal.style.display = 'none';
        productsCarouselContent.innerHTML = ''; // Limpiar el contenido del carrusel
    });

    // Event listeners para los botones de navegación del carrusel de productos
    document.getElementById('products-carousel-arrow--prev').addEventListener('click', prevSlide);
    document.getElementById('products-carousel-arrow--next').addEventListener('click', nextSlide);

    // Event listener para cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target == productsModal) {
            productsModal.style.display = 'none';
            productsCarouselContent.innerHTML = ''; // Limpiar el contenido del carrusel
        }
    });
});