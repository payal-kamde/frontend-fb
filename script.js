function myFunction() {
	validation();
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
				var female =
					document.forms.RegForm.female.value;
				var male =
					document.forms.RegForm.male.value;
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

				if(password.length <8){
					PasswordErr=document.getElementById('Password-err');
					PasswordErr.style.color = 'red';
					PasswordErr.innerHTML="Password should be atleast 8 character long";
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

				if(CPassword.length <8){
					CPasswordErr=document.getElementById('CPassword-err');
					CPasswordErr.style.color = 'red';
					CPasswordErr.innerHTML="Password should be atleast 8 character long";
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
				
				if(!female.checked && !male.checked){
					gendar=document.getElementById('gendar-err');
					gendar.style.color = 'red';
					gendar.innerHTML="You have not selected gendar";
					female.focus();
					male.focus();
					return false;
					
				}
				
				

				return true;
			}