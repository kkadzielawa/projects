const scroll = new SmoothScroll('.main-nav a[href*="#"]', {
    speed: 2000,
    offset: 100
        // header: '.main-nav'
});


const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; // Auto scroll
const intervalTime = 10000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for prev slide
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}



menuBtn = document.querySelector('.hamburger');
menuBtnIcon = document.querySelector('.hamburger > i');
mainMenu = document.querySelector('.main-menu');

menuBtn.addEventListener('click', () => {
    mainMenu.classList.toggle('show');

    if (menuBtnIcon.classList.value == 'fas fa-bars fa-2x') {
        menuBtnIcon.classList.value = 'fas fa-times fa-2x';
    } else {
        menuBtnIcon.classList.value = 'fas fa-bars fa-2x';
    }

    console.log(menuBtnIcon.classList.value)

    menuBtn.classList.toggle('show');
})





// FORM VALIDATION
// const constraints = {
//     name: {
//         presence: { allowEmpty: false }
//     },
//     email: {
//         presence: { allowEmpty: false },
//         email: true
//     },
//     message: {
//         presence: { allowEmpty: false }
//     }
// };

// const form = document.getElementById('contact-form');

// form.addEventListener('submit', function(event) {
//     console.log('OK');
//     event.preventDefault();
//     alert('OOPS');
//     const formValues = {
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         message: form.elements.message.value
//     };

//     const errors = validate(formValues, constraints);

//     if (errors) {
//         event.preventDefault();
//         const errorMessage = Object
//             .values(errors)
//             .map(function(fieldValues) { return fieldValues.join(', ') })
//             .join("\n");

//         alert(errorMessage);
//     }
// }, false);