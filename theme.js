// Dark/light mode toggle
const toggle = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');
const label = document.getElementById('themeLabel');

function setTheme(mode) {
  if (mode === 'light') {
    document.documentElement.classList.add('light');
    icon.textContent = '🌙';
    label.textContent = 'Dark';
  } else {
    document.documentElement.classList.remove('light');
    icon.textContent = '☀️';
    label.textContent = 'Light';
  }
  localStorage.setItem('theme', mode);
}

setTheme(localStorage.getItem('theme') || 'light');

toggle.addEventListener('click', () => {
  const isLight = document.documentElement.classList.contains('light');
  setTheme(isLight ? 'dark' : 'light');
});

// Mobile nav toggle
const navToggleBtn = document.getElementById('navToggleBtn');
const navLinks = document.getElementById('navLinks');
if (navToggleBtn && navLinks) {
  navToggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Fade-in on scroll
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
