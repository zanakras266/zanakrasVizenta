// /Users/user/Desktop/ZanaKrasniqi-Vizenta/scripts/contact.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form.needs-validation');
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.classList.add('was-validated');

        if (form.checkValidity()) {
            const data = {
                firstName: (form.querySelector('#validationCustom01')?.value || '').trim(),
                lastName: (form.querySelector('#validationCustom02')?.value || '').trim(),
                username: (form.querySelector('#validationCustomUsername')?.value || '').trim(),
                city: (form.querySelector('#validationCustom03')?.value || '').trim(),
                state: form.querySelector('#validationCustom04')?.value || '',
                zip: (form.querySelector('#validationCustom05')?.value || '').trim(),
                agreed: !!form.querySelector('#invalidCheck')?.checked,
                submittedAt: new Date().toISOString()
            };

            // Save to localStorage as an array of entries under key "contactFormEntries"
            const STORAGE_KEY = 'contactFormEntries';
            const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            existing.push(data);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

            const fullName = (data.firstName || data.lastName)
                ? `${data.firstName} ${data.lastName}`.trim()
                : (data.username || 'User');

            alert(`Thank you, ${fullName}. Your form has been saved.`);
            console.log('Form saved to localStorage. Submitted data:', data);

            // optionally reset the form:
            // form.reset();
            // form.classList.remove('was-validated');
        } else {
            console.log('Form is invalid. Please correct the errors and try again.');
        }
    });
});