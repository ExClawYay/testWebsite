// Simple dynamic elements for extra interactivity

// Auto-slide testimonials (basic carousel)
let testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showNextTestimonial() {
    testimonials[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].style.display = 'block';
}

setInterval(showNextTestimonial, 3000); // Change every 3 seconds

// Add hover effect to pricing items (already in CSS, but enhance)
document.querySelectorAll('.pricing-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.02)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Dynamic counter for pricing (simple example)
let prices = document.querySelectorAll('.price');
prices.forEach(price => {
    let originalPrice = price.textContent;
    price.addEventListener('click', () => {
        price.textContent = 'Contact for Deal!';
        setTimeout(() => {
            price.textContent = originalPrice;
        }, 2000);
    });
});