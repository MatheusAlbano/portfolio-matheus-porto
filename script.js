let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

let header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 200){
        header.style.background = '#191919'
    } else {
        header.style.background = 'transparent'
    }
});

function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
}
