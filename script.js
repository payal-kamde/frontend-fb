const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const confirmPass = document.querySelector("#confirm_pass");

const signUp = document.querySelector("#signup")

function showMessage(input, message) {
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
}

function checkUsername(){
    if(username.value == ""){
        return showMessage(username,"Enter username");
    }
    return true;
}
function checkEmail(){
    const eval = email.value;
    const eRegex = new RegExp(" /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/");

    if(eval ==''){
        return showMessage(email,"enter email");
    }
    else if(!eRegex.test(eval)){
        return showMessage(email, "enter valid email");
    }
    return true
}
function checkPassword(){
    const pass = password.value;
    const passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if(pass ==""){
        showMessage(password,'enter password');
    }
    else if(!passRegex.test(pass)){
        return showMessage(password,'enter valid password');
    }
    return true;
}

function confirmPassword(){
    const confirm_pass = confirmPass.value;
    if(confirm_pass ==""){
        showMessage(confirmPass,'enter password again');
    }
    else if(pass != confirm_pass){
        return showMessage(confirmPass,'password does not match');
    }
    return true; 
}

signUp.addEventListener('submit', function(e){
    
    e.preventDefault();
    let userValid = checkUsername();
    let emailValid = checkEmail();
    let passValid = checkPassword();
    let confirm = confirmPassword();

    if(userValid&&emailValid&&passValid&&confirm){

    }
})