const userDeatils = [
    {username: 'faisal', password: 123}
]
const username = document.getElementById('username')
const password = document.getElementById('password')
const loginPage = document.getElementById('loginPage')

loginPage.addEventListener('submit',(e)=>{
    e.preventDefault()
    const getUser = username.value
    const getPassword = parseInt(password.value)
    if(getUser == '' || getPassword == ''){
        document.getElementById('result').innerHTML = 'Please enter your username or password'
    }else{
        userDeatils.filter(check => {
            const {username, password} = check
            if(username === getUser && password === getPassword){
                document.getElementById('result').innerHTML = "You Have Successfuly loged In!"
            }else{
                document.getElementById('result').innerHTML = "Please check your Username Or Password"
            }
        })
    }
})