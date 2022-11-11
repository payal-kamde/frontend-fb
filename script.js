
function myFunction() {
    



    firstNameErr=document.getElementById('first-name-err');
    
    var validFirstName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    
    
    var x = document.getElementsByClassName("firstname").value;
    // firstNameValue=x.value.trim(); 
    
    let text;
    if(x=="")
    {
        firstNameErr.innerHTML="First Name is required";
    }
    else if(!validFirstName.test(x))
    {
        firstNameErr.innerHTML="First Name requered";
    }
    else
    {
        firstNameErr.innerHTML="";
        return true;
        
    }
    }