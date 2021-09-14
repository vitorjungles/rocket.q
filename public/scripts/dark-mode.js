function Dark() {
  const darkButton = document.querySelector('.dark-mode-button');
  const darkButtonImg = document.querySelector('.dark-mode-button #color-mode-img');
  const body = document.querySelector('body');
  const buttonOutlined = document.querySelector('.button.outlined');
  const input = document.querySelector('input');
  const isDark = localStorage.getItem('dark');
  
  body.classList.add(`${isDark === 'true' ? 'dark' : 'white'}-mode`);
  darkButton.addEventListener('click', isDark === 'true' ? off : toggle, {once: true});

  function addTransition() {
    if (!body.className.includes('transition')) {
      [body, darkButtonImg, buttonOutlined, input].forEach(element => {
        if (element) {
          element.classList.add('transition');
        }
      });
    }
  }

  function toggle() {
    body.classList.replace('white-mode', 'dark-mode');
    addTransition();

    darkButton.addEventListener('click', off, {once: true});
    localStorage.setItem('dark', 'true');
  }

  function off() {
    body.classList.replace('dark-mode', 'white-mode');
    addTransition();

    darkButton.addEventListener('click', toggle, {once: true});
    localStorage.setItem('dark', 'false');
  }
}

Dark();
