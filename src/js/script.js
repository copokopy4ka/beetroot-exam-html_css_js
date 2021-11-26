const burgerBtn = document.querySelector('#burger');
const header = document.querySelector('.header');
const headerNavItem = document.querySelector('.header__nav-item');
const headerNavList = document.querySelectorAll('.header__nav-list');

burgerBtn.addEventListener('click', function() {
    if (header.classList.contains('active')) {
        header.classList.remove('active');
    } else {
        header.classList.add('active');
    }
})

for (item of headerNavList) {
    item.addEventListener('click', function() {
        if (header.classList.contains('active')) {
            header.classList.remove('active');
        }
    })
}

$(function() {
    $('.intro__slider').slick({
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        vertical: true,
        infinite: true,
    })
});

$(function() {
    $('.news__slider').slick({
        prevArrow: $('.news__btn_prev'),
        nextArrow: $('.news__btn_next'),
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 4000,
        dots: true,
        infinite: true,
        // centerMode: true,
        // centerPadding: '20px',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
});

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
}

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}