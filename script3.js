const form = document.getElementById('profileForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  const zip = document.getElementById('zip').value;

  if (address && city && country && zip) {
    alert('✅ Profile info saved successfully!');
    window.location.href = 'index1.html';
  } else {
    alert('⚠️ Please fill in all required fields.');
  }
});
