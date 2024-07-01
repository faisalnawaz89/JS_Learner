

const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

// Toggle Menu
const toggleNav = () => {
    const linksHeight = links.getBoundingClientRect().height
    const conatinerHeight = linksContainer.getBoundingClientRect().height
    if(conatinerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }else{
        linksContainer.style.height = 0
    }
}
navToggle.addEventListener('click', toggleNav)

// Fixed Navigation header
const navBar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

const fixedNav = () => {
    const scrollHeight = window.pageYOffset
    const navHeight = navBar.getBoundingClientRect().height 
    if(scrollHeight > 0){
        navBar.classList.add('fixed-nav')
    }else{
        navBar.classList.remove('fixed-nav')
    }
    if(scrollHeight > 500){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link')
    }
}
window.addEventListener('scroll', fixedNav)

const scrollLink = document.querySelectorAll('.scroll-link')
scrollLink.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)

        const navHeight = navBar.getBoundingClientRect().height 
        const conatinerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navBar.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight
        if(!fixedNav){
            position -= navHeight
        }
        if(navHeight > 82){
            position += conatinerHeight
        }
        window.scrollTo({left:0,top:position})
    })
})