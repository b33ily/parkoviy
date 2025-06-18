// Боковой баннер в разделе "О посёлке"
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.side-banner .banner-slide');
    let currentSlide = 0;
    
    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Меняем слайд каждые 3 секунд
    setInterval(showNextSlide, 3000);
});