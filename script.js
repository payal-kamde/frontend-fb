function myFunction() {
	var validated = validation();
	
	if(validated == true)
	{
		document.write("login success");
	}
	
}

			function validation() {
				var name =
					document.forms.RegForm.firstname.value;
					var lname =
					document.forms.RegForm.lastname.value;
				var email =
					document.forms.RegForm.EMail.value;
				var password =
					document.forms.RegForm.Password.value;
				var CPassword =
					document.forms.RegForm.CPassword.value;
				
				var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
				var regName = /\d+$/g;								 // Javascript reGex for Name validation

				if (name == "" || regName.test(name)) {
					firstNameErr=document.getElementById('first-name-err');
					firstNameErr.style.color = 'red';
					firstNameErr.innerHTML="First Name is required";
					name.focus();
					return false;
				}
				
				if (lname == "" || regName.test(lname)) {
					firstNameErr=document.getElementById('first-name-err');
					firstNameErr.style.color = 'red';
					firstNameErr.innerHTML="Last Name is required";
					name.focus();
					return false;
				}

				
				if (email == "" || !regEmail.test(email)) {
					EMailErr=document.getElementById('EMail-err');
					EMailErr.style.color = 'red';
					EMailErr.innerHTML="Please enter a valid e-mail address.";
					email.focus();
					return false;
				}
				
				if (password == "") {
					PasswordErr=document.getElementById('Password-err');
					PasswordErr.style.color = 'red';
					PasswordErr.innerHTML="Please enter your password";
					password.focus();
					return false;
				}

				if(password.length <6){
					PasswordErr=document.getElementById('Password-err');
					PasswordErr.style.color = 'red';
					PasswordErr.innerHTML="Password should be atleast 6 character long";
					password.focus();
					return false;
				}
				
				if (CPassword == "") {
					CPasswordErr=document.getElementById('CPassword-err');
					CPasswordErr.style.color = 'red';
					CPasswordErr.innerHTML="Please enter Confirm password";
					CPassword.focus();
					return false;
				}

				if(CPassword.length <6){
					CPasswordErr=document.getElementById('CPassword-err');
					CPasswordErr.style.color = 'red';
					CPasswordErr.innerHTML="Password should be atleast 6 character long";
					CPassword.focus();
					return false;
				}
				
				if (password != CPassword) {
					CPasswordErr=document.getElementById('CPassword-err');
					CPasswordErr.style.color = 'red';
					CPasswordErr.innerHTML="Use same password";
					CPassword.focus();
					return false;
				}

				
				if ( ( document.forms.RegForm.gender[0].checked == false ) && ( document.forms.RegForm.gender[1].checked == false ) )
					{
					gendar=document.getElementById('gendar-err');
					gendar.style.color = 'red';
					gendar.innerHTML="You have not selected gendar";
					//alert ( "Please choose your Gender: Male or Female" );
					return false;
					}

				
				

				return true;
			}