


Node.prototype.load = function(value){
    return window.addEventListener('load', () => this.classList.add(value))
}
document.querySelector('.preloader').load('hide-preloader')

const switchBtn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')
switchBtn.addEventListener('click', () => {
    if(!switchBtn.classList.contains('slide')){
        switchBtn.classList.add('slide')
        video.pause()
    }else{
        switchBtn.classList.remove('slide')
        video.play()
    }
})