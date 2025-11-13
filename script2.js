document.getElementById('addMore').addEventListener('click', () => {
  const section = document.querySelector('.social');
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.placeholder = '@new_profile';
  section.insertBefore(newInput, document.getElementById('addMore'));
});

document.getElementById('nextBtn').addEventListener('click', () => {
  window.location.href = 'index3.html';
});
