const checkbox = document.getElementById('theme-switch');
const html = document.documentElement;

checkbox.checked = html.getAttribute('data-theme') === 'dark';

checkbox.addEventListener('change', (e) => {
  if (checkbox.checked) {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
  }
});
