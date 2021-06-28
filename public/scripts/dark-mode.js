function Dark() {
  const darkButton = document.querySelector('.dark-mode-button');
  const body = document.querySelector('body');
  const darkButtonImg = document.querySelector('.dark-mode-button #color-mode-img');
  const isDark = localStorage.getItem('dark');

  if (isDark === 'true') {
    body.classList.add('dark-mode');
    darkButtonImg.classList.add('light-img');
    darkButton.addEventListener('click', off, {once: true});
  } else {
    body.classList.add('white-mode');
    darkButtonImg.classList.add('dark-img');
    darkButton.addEventListener('click', toggle, {once: true});
  }

  function addTransition() {
    if (!body.className.includes('transition')) {
      [body, darkButtonImg].forEach(element => {
        element.classList.add('transition');
      });
    }
  }

  function toggle() {
    darkButtonImg.classList.replace('dark-img', 'light-img');

    body.classList.replace('white-mode', 'dark-mode');
    addTransition();

    darkButton.addEventListener('click', off, {once: true});
    localStorage.setItem('dark', 'true');
  }

  function off() {
    darkButtonImg.classList.replace('light-img', 'dark-img');

    body.classList.replace('dark-mode', 'white-mode');
    addTransition();

    darkButton.addEventListener('click', toggle, {once: true});
    localStorage.setItem('dark', 'false');
  }
}

Dark();
