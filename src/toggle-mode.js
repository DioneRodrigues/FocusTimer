let darkMode = true

const buttonToggle = document.getElementById("toggle-model")

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light');
    //funcação toggle troca, se tiver tira e se não tiver coloca


    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`


    // negando a variavel
    darkMode = !darkMode
})