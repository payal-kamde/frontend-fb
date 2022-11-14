console.log("Handling onsubmit events");

const form=document.querySelector('form')

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    console.log("form submitted", event);

    const username = document.querySelector('#username')
    const email =document.querySelector('#email')
    const password=document.querySelector('#password1')
    const confirmPassword=document.querySelector('#password2')

    const usernameValue=username.value
    const emailValue=email.value
    const passwordValue=password.value
    const confirmPasswordValue=confirmPassword.value

    if(!usernameValue){
        alert("Username cannot be empty")
        return
    }
    if(!emailValue){
        alert("Email cannot be empty")
        return
    }
    if(!passwordValue){
        alert("Password cannot be empty")
        return
    }
    if(!confirmPasswordValue){
        alert("confirm Password cannot be empty")
    }

})
