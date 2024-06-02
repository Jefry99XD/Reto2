document.addEventListener('DOMContentLoaded', () => {
  // Modal de Contacto
  const openContactModalBtn = document.getElementById('openContactModal');
  const contactModal = document.getElementById('contactModal');
  const closeContactModal = contactModal.querySelector('.close');

  openContactModalBtn.addEventListener('click', () => {
      contactModal.style.display = 'block';
  });

  closeContactModal.addEventListener('click', () => {
      contactModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === contactModal) {
          contactModal.style.display = 'none';
      }
  });
});
