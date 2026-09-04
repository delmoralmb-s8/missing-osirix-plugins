const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = 'Sending...';
    status.className = 'form-status';

    const data = new URLSearchParams(new FormData(form)).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data,
    })
      .then((response) => {
        if (!response.ok) throw new Error('Request failed');
        status.textContent = "Thanks, we'll get back to you soon.";
        status.classList.add('form-status--ok');
        form.reset();
      })
      .catch(() => {
        status.textContent = 'Something went wrong. Please email us directly instead.';
        status.classList.add('form-status--error');
      });
  });
}
