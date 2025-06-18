// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            mainNav.classList.remove('active');
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Show/Hide Back to Top Button
window.addEventListener('scroll', () => {
    const backToTopBtn = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'flex';
        backToTopBtn.style.alignItems = 'center';
        backToTopBtn.style.justifyContent = 'center';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Back to Top Functionality
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Submission
document.getElementById('feedbackForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to the server
    // For demo purposes, we'll just show an alert
    alert('Ваше сообщение успешно отправлено! Спасибо за обратную связь.');
    
    // Reset the form
    e.target.reset();
});

// Make all buttons with href clickable
document.querySelectorAll('.btn[href="#"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Это демонстрационная кнопка. В реальном сайте здесь будет переход на соответствующую страницу.');
    });
});
// Обработка кликов по кнопкам "Подробнее" в услугах
document.querySelectorAll('.read-more[href="#contact"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Получаем название услуги из data-атрибута
        const serviceName = this.getAttribute('data-service');
        
        // Плавная прокрутка к форме
        const contactSection = document.getElementById('contact');
        window.scrollTo({
            top: contactSection.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Устанавливаем фокус в поле сообщения
        setTimeout(() => {
            const messageField = document.getElementById('message');
            if (messageField) {
                messageField.value = `Интересует услуга: ${serviceName}\n\n`;
                messageField.focus();
            }
        }, 500);
    });
});