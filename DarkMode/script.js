

const button = document.getElementById('mode')
const bodyMode = document.querySelector('body')
button.addEventListener('click', (e)=>{
    bodyMode.classList.toggle('darkMode')
},false)

