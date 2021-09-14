function Dark() {
  const darkButton = document.querySelector('.dark-mode-button');
  const darkButtonImg = document.querySelector('.dark-mode-button #color-mode-img');
  const body = document.querySelector('body');
  const buttonOutlined = document.querySelector('.button.outlined');
  const input = document.querySelector('input');
  const isDark = localStorage.getItem('dark');
  
  body.classList.add(`${isDark === 'true' ? 'dark' : 'white'}-mode`);
  darkButton.addEventListener('click', (event) => handleClick(event));

  function addTransition() {
    if (!body.className.includes('transition')) {
      [body, darkButtonImg, buttonOutlined, input].forEach(element => {
        if (element) {
          element.classList.add('transition');
        }
      });
    }
  }

  function handleClick(event) {
    body.classList.replace(body.classList[0], `${body.classList[0] === 'white-mode' ? 'dark' : 'white'}-mode`);
    addTransition();

    localStorage.setItem('dark', body.classList[0] === 'dark-mode' ? 'true' : 'false');
  }
}

Dark();
