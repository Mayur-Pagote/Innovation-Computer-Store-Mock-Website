"use strict";
document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');
    if (themeToggle && moonIcon && sunIcon) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        }
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            if (isLight) {
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'block';
            }
            else {
                moonIcon.style.display = 'block';
                sunIcon.style.display = 'none';
            }
        });
    }
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
                const htmlCard = card;
                if (filterValue === 'all') {
                    htmlCard.style.display = 'flex';
                }
                else {
                    const category = htmlCard.getAttribute('data-category');
                    if (category === filterValue) {
                        htmlCard.style.display = 'flex';
                    }
                    else {
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
            const htmlNum = num;
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
