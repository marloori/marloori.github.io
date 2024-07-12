document.addEventListener('DOMContentLoaded', () => {
    const moreResearchBtn = document.getElementById('more-research-btn');
    const moreResearchDiv = document.getElementById('more-research');

    moreResearchBtn.addEventListener('click', () => {
        if (moreResearchDiv.style.display === 'none') {
            moreResearchDiv.style.display = 'block';
            moreResearchBtn.textContent = 'Less Research';
        } else {
            moreResearchDiv.style.display = 'none';
            moreResearchBtn.textContent = 'More Research';
        }
    });

    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        formMessage.style.display = 'block';
        formMessage.textContent = 'Thank you for your message. I will get back to you soon.';
        contactForm.reset();
    });
});

