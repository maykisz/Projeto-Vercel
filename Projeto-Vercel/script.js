
const contactBtn = document.querySelector('.contact-btn');
const contactDropdown = document.querySelector('.contact-dropdown');

contactBtn.addEventListener('click', () => {
  contactDropdown.classList.toggle('show');
});

window.addEventListener('click', function(event) {
  if (!contactDropdown.contains(event.target) && !contactBtn.contains(event.target)) {
    contactDropdown.classList.remove('show');
  }
});
