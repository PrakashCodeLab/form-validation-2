const userName = document.querySelector('#username');
const userEmail = document.querySelector('#email');
const form = document.querySelector('#form');
const userPassword = document.querySelector('#password');
const userCpasswword = document.querySelector('#cpassword');
let sucess=true;
const errorMsg = document.querySelector(".error")

const inputGroup = document.querySelector(".input__group");

form.addEventListener("submit", (e) => {
 
    if(!userValidate()){
      e.preventDefault();
    } else{
      userValidate();
    }
 
}) 


function userValidate() {

   username(userName, "user name is required");

  

  useremail(userEmail, "email is required");

  userpassword(userPassword, "password is required");

  userConPassword(userPassword, userCpasswword, "password is required")

}


function username(element, msg) {
  const userNameValue = element.value.trim();
  if (userNameValue === "") {
    errorMsg.innerHTML = msg;
    element.classList.add("error-group");
    element.classList.remove("success__group");
    
  }
  else {
    errorMsg.innerHTML = "";
    element.classList.remove("error-group");
    element.classList.add("success__group");
  }


}



function useremail(element, msg) {
   
  const userEmailValue = element.value.trim();
  
  // Regular expression for email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
   const isValidEmail=regex.test(userEmailValue);

 const emailError = document.querySelector(".email__error");

  if (userEmailValue === "") {
    emailError.innerHTML = msg;
    element.classList.add("error-group");
    element.classList.remove("success__group");
  }
  else if(!isValidEmail ){
    emailError.innerHTML = "this is not valid email";
    element.classList.add("error-group");
    element.classList.remove("success__group");
  }
  else {
    emailError.innerHTML = "";
    element.classList.remove("error-group");
    element.classList.add("success__group");
  }
}




function userpassword(element, msg) {
  const userPasswordValue = element.value.trim();

  const errpassword = document.querySelector(".errorpassword");

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{8,}$/;
  const isValidPassword = regex.test(userPasswordValue);

  if (userPasswordValue === "") {
    errpassword.innerHTML = msg;
    element.classList.add("error-group");
    element.classList.remove("success__group");

  }

  else if(!isValidPassword){
    errpassword.innerHTML = "password  should contain atleast 8 charcters";  
    element.classList.add("error-group");
    element.classList.remove("success__group");   
   }

  else {
    errpassword.innerHTML = "";
    element.classList.remove("error-group");
    element.classList.add("success__group");
  }

}



function userConPassword(element1, element2, msg) {



  const errcpassword = document.querySelector(".error__confrim--password");

  const userconfirmPassword1 = element1.value.trim();
  const userconfirmPassword2 = element2.value.trim();

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{8,}$/;
  const isValidPassword = regex.test(userconfirmPassword2);

  if (userconfirmPassword2 === "") {
    errcpassword.innerHTML = msg;
    element2.classList.add("error-group");
    element2.classList.remove("success__group");

  }
  else if (userconfirmPassword1 !== userconfirmPassword2) {
    errcpassword.innerHTML = "password is mismatched";
    element2.classList.add("error-group");
    element2.classList.remove("success__group");
  }
  else if(!isValidPassword){
    errcpassword.innerHTML = "password  should contain atleast 8 charcters";  
    element2.classList.add("error-group");
    element2.classList.remove("success__group");   
   }

   
  
  else {
    errcpassword.innerHTML = '';
    element2.classList.remove("error-group");
    element2.classList.add("success__group");
  }


}