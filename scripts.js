// Плавный скролл к секциям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Обработка формы (демо-режим)
const form = document.getElementById('leadForm');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.querySelector('[name="name"]').value.trim();
        const phone = form.querySelector('[name="phone"]').value.trim();

        if (!name || !phone) {
            alert('Пожалуйста, заполните имя и телефон.');
            return;
        }

        // Здесь можно добавить отправку на сервер или в CRM.
        alert(`Спасибо, ${name}! Заявка отправлена. Мы свяжемся с вами по номеру ${phone}.`);
        form.reset();
    });
}