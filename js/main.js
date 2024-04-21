const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
});
const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5,

});

sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slider_item').forEach(item => {
    item.addEventListener('click', e => {
        const isOpened = item.classList.contains('opened');
        document.querySelectorAll('.slider_item').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('opened')) {
                otherItem.classList.remove('opened');
            }
        });
        if (!isOpened) {
            item.classList.add('opened');
        }
        e.stopPropagation(); // Prevent click event propagation to document
    });
});

document.addEventListener('click', e => {
    document.querySelectorAll('.slider_item').forEach(item => {
        if (!item.contains(e.target)) {
            item.classList.remove('opened');
        }
    });
});

let desc = document.querySelector('.desc');

sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden');
});
