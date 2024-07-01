
const preloader = document.querySelector('.preloader')
window.addEventListener('load', ()=>{
    setTimeout(()=>{
        preloader.classList.add('hide-preloader')
    },2000)
    
})

const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

btn.addEventListener('click', ()=>{
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        video.pause()
    }else{
        btn.classList.remove('slide')
        video.play()
    }
})