function formValidate()
{
if(document.loginForm.Myemail.value=="")
{
	alert("Please Enter Your Email");
// document.getElementByID('email_id').innerHTML="Please Enter Your Name"
document.loginForm.Myemail.focus();
return false;
}
// else
// {
// 	document.getElementByID('first_name_id').innerHTML=""
// }
if(document.loginForm.password.value=="")
{
	alert("Please Enter Your Password");
// document.getElementByID('password_id').innerHTML="Please Enter Your Password"
document.loginForm.password.focus();
return false;
}
// else
// {
// 	document.getElementByID('first_name_id').innerHTML=""
// }
return true;
}
function signupValidate()
{
	if(document.MyForm.fname.value=="")
}