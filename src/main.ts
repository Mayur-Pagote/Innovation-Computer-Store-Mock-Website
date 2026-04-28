document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update active class
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // Product Category Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            productCards.forEach(card => {
                const htmlCard = card as HTMLElement;
                if (filterValue === 'all') {
                    htmlCard.style.display = 'flex';
                } else {
                    const category = htmlCard.getAttribute('data-category');
                    if (category === filterValue) {
                        htmlCard.style.display = 'flex';
                    } else {
                        htmlCard.style.display = 'none';
                    }
                }
            });
        });
    });

    // Simple scroll animation for revealing segments
    const bgNumbers = document.querySelectorAll('.bg-number');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        bgNumbers.forEach(num => {
            const htmlNum = num as HTMLElement;
            // Parallax effect on scroll
            const offset = (scrolled * 0.1);
            htmlNum.style.transform = `translateY(${offset}px)`;
        });
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const parentItem = question.parentElement;
            if (parentItem) {
                // Close other items
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== parentItem) {
                        item.classList.remove('active');
                    }
                });
                // Toggle current item
                parentItem.classList.toggle('active');
            }
        });
    });
});
