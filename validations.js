console.log("Handling onsubmit events");

const form=document.querySelector('#fbForm');
console.log(form, '------')

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    console.log("form submitted", event);

    const email =document.querySelector('#email')
    const password=document.querySelector('#password1')
    const confirmPassword=document.querySelector('#password2')

    const username = document.querySelector('#username')
    const usernameValue=username.value
    const emailValue=email.value
    const passwordValue=password.value
    const confirmPasswordValue=confirmPassword.value

    const usernameRegex=new RegExp(" ^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$")
    const emailRegex=new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
    const passwordRegex=new RegExp("(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}")

    function showErrorMessage(input, message, elementId){
        const errorMessage = input.querySelector(elementId)
        console.log(errorMessage, '-------', elementId)
        errorMessage.innerText=message;
    }

    function usernameValidation(){
        if(!usernameValue){
            return showErrorMessage(username, '**Username should not be empty', '#usernamediv')
        }
        else if(!usernameRegex.test(usernameValue)){
            return showErrorMessage(username, '**enter valid username', '#usernamediv');
        }
        return
    }

    function emailValidation(){
        if(!emailValue){
            return showErrorMessage(email, '**Email cannot be empty', '#emaildiv')
        }
        else if(!emailRegex.test(emailValue)){
            return showErrorMessage(email, '**enter valid email id', '#emaildiv');
        }
        return
    }

    function passwordValidation(){
        if(!passwordValue){
            return showErrorMessage(password, '**Password must be entered', '#passworddiv')
        }
        else if(!passwordRegex.test(passwordValue)){
            return showErrorMessage(password, '**Emter valid password', '#passworddiv')
        }
        return
    }

    function confirmPasswordValidation(){
        if(!confirmPasswordValue){
            return showErrorMessage(password, '**Please Re-enter Password','#confirmpassworddiv')
        }
        else if(passwordValue != confirmPasswordValue){
            return showErrorMessage(confirmPassword,'password does not match', '#confirmpassworddiv');
        }
    }
    
    usernameValidation();
    emailValidation();
    passwordValidation();
    confirmPasswordValidation();
})
