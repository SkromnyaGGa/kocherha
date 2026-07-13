const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
const input = searchBox.querySelector('input');

let hideTimeout;

// показати
searchBtn.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);

    searchBox.classList.add('active');

    setTimeout(() => {
        input.focus();
    }, 250);
});

// прибрати після виходу
searchBtn.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {

        if (!searchBox.matches(':hover')) {
            searchBox.classList.remove('active');
        }

    }, 200);
});

// якщо перейшли на саме поле — не ховаємо
searchBox.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
});

// коли курсор покинув поле — ховаємо
searchBox.addEventListener('mouseleave', () => {
    searchBox.classList.remove('active');
});