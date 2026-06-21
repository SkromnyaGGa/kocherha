const sliderRoot = document.querySelector('.banner-slider');
const progressEl = sliderRoot.querySelector('.js-bs-progress');
const currentEl  = sliderRoot.querySelector('.js-bs-current');
const totalEl    = sliderRoot.querySelector('.js-bs-total');
const slidesCount = sliderRoot.querySelectorAll('.swiper-slide').length;

totalEl.textContent = String(slidesCount).padStart(2, '0');

// генеруємо риски прогрес-бару, по одній на слайд
const dashes = [];
for (let i = 0; i < slidesCount; i++) {
    const dash = document.createElement('span');
    dash.className = 'banner-slider__dash';
    progressEl.appendChild(dash);
    dashes.push(dash);
}

function setActiveDash(index) {
    dashes.forEach((d, i) => d.classList.toggle('is-active', i === index));
    currentEl.textContent = String(index + 1).padStart(2, '0');
}

const swiper = new Swiper('.banner-slider__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 0, // відступ заданий через margin-right у css (var(--bs-gap))
    freeMode: {
        enabled: true,
        sticky: true,
        momentumBounce: false,
    },
    grabCursor: true,
    watchSlidesProgress: true,
    on: {
        init(sw) {
            setActiveDash(sw.activeIndex);
        },
        slideChange(sw) {
            setActiveDash(sw.activeIndex);
        },
    },
});
