let nameInput = document.getElementById("fullname");
let emailInput = document.getElementById("email");
let phoneNoInput= document.getElementById("phoneno");
let nameInputAlert = document.getElementById("fullname-alert");
let emailInputAlert = document.getElementById("email-address-alert");
let phoneNoInputAlert = document.getElementById("phoneno-alert");
let button = document.getElementById("account-button");

function validateFullName (){
    let fullName = nameInput.value;
    if(fullName.length == 0){
        nameInputAlert.innerText = "Please enter a name"
        nameInput.style.border = "none"
        nameInput.style.outline = "1px solid red"

    } else if(fullName.match(/^[^0-9]+$/)){
        nameInput.innerText = "Name should contain only letters"
    } else{
        nameInput.innerText = " "
        nameInput.style.outline = "1px solid green"
    }
}

nameInput.addEventListener("keyup", function(){
    validateFullName()
})



function validateEmailAddress (){
    let emailAddress = emailInput.value;
    if(emailAddress.length == 0){
        emailInputAlert.innerText = "Please enter a valid email address"
        emailInput.style.border = "none"
        emailInput.style.outline = "1px solid red"

    } else if(emailAddress.match(/^[^0-9]+$/)){
        emailInput.innerText = "Name should contain only letters"
    } else{
        emailInput.innerText = " "
        emailInput.style.outline = "1px solid green"
    }
}

emailInput.addEventListener("keyup", function(){
    validateEmailAddress()
})






function validatePhoneNo (){
    
    let userPhoneNo = phoneNoInput.value
    if(userPhoneNo.length !== 11){
        phoneNoInputAlert.innerText = "Phone number must be 11 digits"
    
    phoneNoInput.style.border = "none"
    
    phoneNoInput.style.outline = "1px solid red"
    
    }else{
        phoneNoInputAlert.innerText=
        phoneNoInput.style.outline = "1px solid green"
    }
}
phoneNoInput.addEventListener("keyup", function(){
    validatePhoneNo()
})


function submitButton (){
    if(!validateEmailAddress() || !validateFullName() || !validatePhoneNo){
        console.log("The form is not ready to be submitted.")
    }

}
button.addEventListener("click", function(){
    submitButton
})






/*
// Get references to the form and input elements
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Add an event listener to the form's submit event
form.addEventListener("submit", function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Validate name
  if (nameInput.value === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return; // Stop further validation if name is empty
  }

  // Validate email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return; // Stop further validation if email is invalid
  }

  // If all validations pass, submit the form or perform other actions
  alert("Form submitted successfully!");
  // Uncomment to submit the form:
  // form.submit();
});
*/





