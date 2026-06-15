const repertoireSlider = new Swiper('.repertoire-slider', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    freeMode: true,
    grabCursor: true,
});

document.querySelectorAll('.repertoire-slider .swiper-slide')
    .forEach(slide => {
        slide.addEventListener('click', () => {

            document
                .querySelector('.repertoire-slider .swiper-slide.active')
                ?.classList.remove('active');

            slide.classList.add('active');
        });
    });