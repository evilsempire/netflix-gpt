export const validateData = (name= null, email, password, isSignInForm = true) => {

 if(!isSignInForm && !name) return "Name is required!";

 const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

 if(!isEmailValid) return "Email Address is not valid!";

 const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

 if(!isPasswordValid) return "Password is not valid!";

 return null;
   
}