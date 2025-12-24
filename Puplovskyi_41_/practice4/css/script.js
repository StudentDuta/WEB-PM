document.addEventListener('keydown', function(event) {
    highlightKey(event.code, true);

    // Блокуємо стандартні дії для деяких клавіш (наприклад, Tab або Alt), щоб фокус не тікав
    if (["Tab", "AltLeft", "AltRight", "F1", "F2", "F3", "F4", "F5"].includes(event.code)) {
        event.preventDefault();
    }
});

document.addEventListener('keyup', function(event) {
    highlightKey(event.code, false);
});

// Додаємо підтримку натискання мишкою
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('mousedown', function() {
        const code = this.getAttribute('data-code');
        // Додаємо клас active
        this.classList.add('active');
    });

    key.addEventListener('mouseup', function() {
        this.classList.remove('active');
    });

    key.addEventListener('mouseleave', function() {
        this.classList.remove('active');
    });
});

function highlightKey(code, isActive) {
    // Шукаємо кнопку по атрибуту data-code
    const keyElement = document.querySelector(`.key[data-code="${code}"]`);

    if (keyElement) {
        if (isActive) {
            keyElement.classList.add('active');
        } else {
            keyElement.classList.remove('active');
        }
    }
}