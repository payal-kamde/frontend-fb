const form = document.querySelector('#facebook');
form.addEventListener('submit', (event) =>{
    event.preventDefault()

    console.log("form submitted", event);

    usernameValidation();
    emailValidation();
    passwordValidation();
    confirmPasswordValidation();
});

function showErrorMessage(message, elementId){
    const errorMessage = document.querySelector(elementId)
    errorMessage.innerText=message;
}

function showSuccessMessage(successMsg, elementId){
    const noErrorMessage=document.querySelector(elementId)
    noErrorMessage.innerText=successMsg;
}

function usernameValidation(){

    const username = document.querySelector('#username')
    const usernameValue = username.value;

    const usernameRegex=new RegExp("[A-Za-z][A-Za-z0-9_]{7,29}$")

    if (!usernameValue){
        showErrorMessage('Username should not be empty', '#user-error-block');
    } else if (!usernameRegex.test(usernameValue)){
        showErrorMessage('enter valid username', '#user-error-block');
    }
    else{
        showSuccessMessage('Valid Username', '#user-error-block');
    }
}

function emailValidation(){

    const email =document.querySelector('#email')
    const emailValue=email.value

    const emailRegex=new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

    if(!emailValue){
        showErrorMessage('Email cannot be empty', '#email-error-block');
    }
    else if(!emailRegex.test(emailValue)){
        showErrorMessage(e, 'enter valid email id', '#email-error-block');
    }
    else{
        showSuccessMessage('Valid Email', '#email-error-block');
    }

}

function passwordValidation(){

    const password=document.querySelector('#password')
    const passwordValue=password.value

    const passwordRegex=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")

    if(!passwordValue){
        showErrorMessage('Password must be entered properly', '#password-error-block');
    }
    else if(!passwordRegex.test(passwordValue)){
        showErrorMessage('Enter Valid password', '#password-error-block');
    }
    else{
        showSuccessMessage('Valid Password', '#password-error-block');
    }
}

function confirmPasswordValidation(){

    const passwordValidate=password.value
    const confirmPassword=document.querySelector('#confirm-password')
    const confirmPasswordValue=confirmPassword.value

    if(!confirmPasswordValue){
        showErrorMessage('Please Re-enter Password','#confirm-password-error-block');
    }
    else if(passwordValidate != confirmPasswordValue){
        showErrorMessage('password does not match', '#confirm-password-error-block');
    }
    else{
        showSuccessMessage('Password matched', '#confirm-password-error-block');
    }
}