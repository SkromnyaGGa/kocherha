document.addEventListener('DOMContentLoaded', () => {
    const currentNumEl = document.getElementById('slide-current');
    const totalNumEl = document.getElementById('slide-total');

    const postersSwiper = new Swiper('.posters-swiper', {
        slidesPerView: 'auto', // Важливо: дозволяє слайдам мати власну ширину
        spaceBetween: 20,      // Відступ між постерами
        grabCursor: true,      // Курсор-рука при наведенні

        // Налаштування пагінації (смужки)
        pagination: {
            el: '.progress-pagination',
            clickable: true,
            type: 'bullets',
        },

        // Події для оновлення лічильника
        on: {
            init: function () {
                updateFraction(this);
            },
            slideChange: function () {
                updateFraction(this);
            }
        }
    });

    // Функція для оновлення цифр
    function updateFraction(swiperInstance) {
        // Додаємо нуль спереду, якщо число менше 10 (наприклад, 04)
        let currentSlide = swiperInstance.realIndex + 1;
        let formattedCurrent = currentSlide < 10 ? '0' + currentSlide : currentSlide;

        let totalSlides = swiperInstance.slides.length;
        let formattedTotal = totalSlides < 10 ? '0' + totalSlides : totalSlides;

        if (currentNumEl) currentNumEl.textContent = formattedCurrent;
        if (totalNumEl) totalNumEl.textContent = '/' + formattedTotal; // або '/ ' + formattedTotal
    }
});