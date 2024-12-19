document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData.entries())),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    alert('Message sent successfully!');
  } else {
    alert('Failed to send message.');
  }
});
