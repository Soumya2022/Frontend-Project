var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");

menuIcon.onclick=function()
{
    sidebar.classList.toggle("small-sidebar");
}

const toggleSwitch = document.querySelector('#toggle-theme');

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    document.querySelector('link[href="sl.css"]').href = 'sd.css';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    document.querySelector('link[href="sd.css"]').href = 'sl.css';
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Check localStorage for previously saved theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    document.querySelector('link[href="sl.css"]').href = 'sd.css';
  }
}
