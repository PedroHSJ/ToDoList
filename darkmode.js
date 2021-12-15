const theme = window.localStorage.getItem('theme');
const toggle = document.getElementById('toggle');

if (theme === 'dark') document.body.classList.add('dark')

toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark')

    if (theme === 'dark') {
        window.localStorage.setItem('theme', "light")
    }
    else window.localStorage.setItem('theme', "dark")
})


