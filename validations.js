function validationfunc(){
    var a= document.form1.Email.value;
    if(a.indexOf('@')<=0){
        alert("**Invalid position of @")
        return false;
        }
    var name=document.form1.Username.value;
    var password=document.form1.Password.value;
    if(name==null||name==""){

        alert("  Username cannot be empty ")
        return false;
    }
     
    if(password.length<=7){
        document.getElementsByClassName("username").innerHTML("**Password cannot be less than 8 characters")
        return false;
    }
}    
function validatefunction(){
    
     var e1=document.f1.email.value;
     var pass1=document.f1.password.value;
     if(e1==null||e1==""){
        alert("Email cannot be empty")
        return false;
     }
    if (pass1.length<8){
        alert("Password cannot be less than 8 characters")
        return false;
     }
    if(e1.indexOf("@")<=0){
        alert("@ need to be included at correct position")
        return false;
     }
   
}
