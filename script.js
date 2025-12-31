const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

envelope.addEventListener('click', () => {
  envelope.style.display = 'none';
  letter.classList.remove('hidden');
});
