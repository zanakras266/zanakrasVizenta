document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.zkFaqQuestion');

    buttons.forEach((btn) => {
        const item = btn.closest('.zkFaqItem');
        if (!item) return;
        const answer = item.querySelector('.zkFaqAnswer');
        if (!answer) return;

        // ensure initial aria state
        btn.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');

        btn.addEventListener('click', () => {
            const isOpen = item.classList.toggle('open'); // simple open/closed state
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

            // Animate maxHeight for smooth transition
            if (isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});