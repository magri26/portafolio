const toggle = document.getElementById('themeToggle');
const roleToggle = document.getElementById('roleToggle');
const roleText = document.getElementById('roleText');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggle.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
});

let recruiter = true;

roleToggle.addEventListener('click', () => {
  recruiter = !recruiter;

  roleText.textContent = recruiter
    ? 'Desarrollador Full-Stack & Mobile enfocado en lógica de negocio y problemas complejos'
    : 'Desarrollo soluciones web y móviles enfocadas en eficiencia, escalabilidad y resultados';

  roleToggle.textContent = recruiter ? 'Reclutadores' : 'Clientes';
});
