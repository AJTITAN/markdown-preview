function updatePreview() {
    const markdownText = document.getElementById('editor').value;
    document.getElementById('preview').innerHTML = marked.parse(markdownText);
  }

  document.getElementById('editor').addEventListener('input', updatePreview);
  updatePreview(); 

  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
  });