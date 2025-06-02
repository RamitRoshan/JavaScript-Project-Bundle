const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')

hamburgerIcon.addEventListener('click', (event) => {
    event.stopPropagation()
    headerContent.classList.add('menu-open')
})

nav.addEventListener('click', (event) => {
    event.stopPropagation()
})

closeIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})

//when we click outside of hamburgur Icon that is when we click on window side then the
//side bar of hamburgur should be closed . 
window.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})
