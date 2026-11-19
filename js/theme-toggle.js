document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const getSystemTheme = () => 
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const updateButtonText = (theme) => {
    toggleBtn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  };

  // Determine current active theme
  const currentTheme = document.documentElement.getAttribute('data-theme') || getSystemTheme();
  updateButtonText(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') || getSystemTheme();
    const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateButtonText(nextTheme);
  });
});