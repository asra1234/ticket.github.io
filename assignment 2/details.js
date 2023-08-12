// Selecting form and input elements
const form = document.querySelector("form");


// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const c_emailInput = document.getElementById("c-email");
    const genderInput = document.getElementById("gender");
    const numberInput=document.getElementById("Mobilenumber");
    const continueButton=document.getElementById("submit")

    // Getting trimmed values from input fields
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const confirmemail = c_emailInput.value.trim();
    const Mobilenumber = numberInput.value.trim();
    const gender = genderInput.value;

    // Regular expression pattern for email and mobile number validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const MobilePttern= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (!emailPattern.test(confirmemail)) {
        showError(c_emailInput, "confirm your email address");
    }
    if (!MobilePttern.test(Mobilenumber)) {
        showError(numberInput, "Enter your Mobile number");
    }
    if (gender === "") {
        showError(genderInput, "Select your gender");
    }

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
    continueButton.addEventListener("click", function() {
        window.location.href = "details.html";
      });
    
    
}


// Handling form submission event
form.addEventListener("submit", handleFormData);

document.addEventListener("DOMContentLoaded", function () {
    // Initialize intlTelInput
    const input = document.getElementById("Mobilenumber");
    const iti = window.intlTelInput(input, {
        preferredCountries: ["us", "gb"],
        separateDialCode: true,
    
    });

})

