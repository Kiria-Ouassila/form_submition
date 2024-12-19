document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData.entries())),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    window.location.href = 'thank_you.html'; // Redirect to the thank_you.html page
  } else {
    alert('Failed to send message.');
  }
});
