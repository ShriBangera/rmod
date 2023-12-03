let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

function displayCakes() {
    let cont = document.getElementById("galeryContainer");
    let ViGallery=document.getElementById("ViGallery");
    if (ViGallery.textContent=="View More ↓ ") {
        cont.style.height = "fit-content";
        ViGallery.textContent="View Less ↑ ";
        i=1;
    }
    else {
        cont.style.height = "";
        ViGallery.textContent="View More ↓ ";
    }
}
