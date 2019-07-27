const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const forgetPasswordButton = document.getElementById('forget-password');
const sendButton = document.getElementById('send');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
	container.classList.remove("forgetPassword");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
	
});

forgetPasswordButton.addEventListener('click', () => {
	container.classList.add("forgetPassword");
});

sendButton.addEventListener('click', () => {
	container.classList.remove("forgetPassword");
});

