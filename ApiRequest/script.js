

const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        const img = document.querySelector('img').src = data.avatar_url
        const h1 = document.querySelector('h1').innerText = data.name
    }
}
xhr.send();