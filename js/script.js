let form1 = document.querySelector("#form1");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password1 = document.querySelector("#password1");
let password2 = document.querySelector("#password2");
let butt = document.querySelector("#button");

form1.addEventListener("submit",function(e){
	e.preventDefault()
	getData()
});

function getData(){
	let usernameVal = username.value.trim();
	let emailVal = email.value.trim();
	let password1Val =  password1.value.trim();
	let password2Val =  password2.value.trim();
	
	
	if(usernameVal===""){
		errorData(username,"Username is Required");
	}
	else{
		successData(username,"valid")
	}
	
	if(emailVal===""){
		errorData(email,"Email is Required");
	}
	else{
		successData(email,"valid")
	}
	
	if(password1Val===""){
		errorData(password1,"Password is Required");
	}
	else if(password1Val.length<7){
		errorData(password1,"Password Must Contain 8 Character")
	}
	else{
		successData(password1,"valid")
	}
	
	
	if(password2Val === ""){
		errorData(password2,"Confirm Password is Required")
	}
	else if(password2Val !== password1Val){
		errorData(password2,"Password does not match")
	}
	else{
		successData(password2,"valid");
	}
}

function errorData(ele,message){
	let errorList = ele.parentElement;
	let errorView = errorList.querySelector(".error");
	
	errorView.innerText = message;
	
	
	errorList.classList.add("error");
	errorList.classList.remove("success");
	
}


function successData(ele,message){
	let errorList = ele.parentElement;
	let errorView = errorList.querySelector(".error");
	
	errorView.innerText = message;
	
	errorList.classList.add("success")
	errorList.classList.remove("error")
	
}