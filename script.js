const button = document.getElementById('about-toggle');
button.addEventListener('click', () => {
  const expanded = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(expanded));
  document.getElementById('about').hidden = !expanded;
  button.textContent = expanded ? 'Cerrar detalles ↑' : 'Conocé el proyecto ↗';
});
