window.onscroll =()=> { 

  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(id)) {
                link.classList.add('active');
            }
        })
    }
  })
  
}; 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
    
const slides = document.querySelectorAll('.sec-slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

function updateSlidePosition() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Go back to the first slide if at the end
    }
    updateSlidePosition();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // Go to the last slide if at the beginning
    }
    updateSlidePosition();
});