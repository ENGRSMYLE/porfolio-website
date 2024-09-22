// script.js

// Smooth scroll to sections
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
});

// // Smooth scroll for "About Me" section
// document.querySelector('.cta-button').addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector('#about').scrollIntoView({
//         behavior: 'smooth'
//     });
// });


// // Smooth scroll for "Experience" section
// document.querySelector('.cta-button').addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector('#experience').scrollIntoView({
//         behavior: 'smooth'
//     });
// });

// // Smooth scroll to Projects section
// document.querySelector('.cta-button').addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector('#projects').scrollIntoView({
//         behavior: 'smooth'
//     });
// });

// // Smooth scroll for Testimonials section
// document.querySelector('.cta-button').addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector('#testimonials').scrollIntoView({
//         behavior: 'smooth'
//     });
// });

// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset(); // Reset the form fields
});
