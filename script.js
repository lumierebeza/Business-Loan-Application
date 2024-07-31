// Get references to the form and fields
const form = document.getElementById('loanApplication');
const fullNameField = document.getElementById('fullName');
const emailField = document.getElementById('email');
const phoneNumberField = document.getElementById('phoneNumber');
const businessField = document.getElementById('business');
const businessTypeField = document.getElementById('businessType');
const loanAmountField = document.getElementById('loanAmount');
const purposeField = document.getElementById('purpose');

// Add event listener to the form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting by default
    validateForm();
});

function validateForm() {
    // Clear previous error messages
    clearErrors();

    let isValid = true;

    // Validate Full Name
    if (fullNameField.value.trim() === '') {
        isValid = false;
        showError(fullNameField, 'Full Name is required');
    }

    // Validate Email
    if (!validateEmail(emailField.value)) {
        isValid = false;
        showError(emailField, 'Please enter a valid email address');
    }

    // Validate Phone Number
    if (phoneNumberField.value.length < 10) {
        isValid = false;
        showError(phoneNumberField, 'Phone number must be at least 10 digits long');
    }

    // Validate Business Name
    if (businessField.value.trim() === '') {
        isValid = false;
        showError(businessField, 'Business Name is required');
    }

    // Validate Business Type
    if (businessTypeField.value === '') {
        isValid = false;
        showError(businessTypeField, 'Please select a Business Type');
    }

    // Validate Loan Amount
    if (loanAmountField.value.trim() === '' || isNaN(loanAmountField.value) || loanAmountField.value <= 0) {
        isValid = false;
        showError(loanAmountField, 'Please enter a valid loan amount');
    }

    // Validate Purpose
    if (purposeField.value.trim() === '') {
        isValid = false;
        showError(purposeField, 'Purpose of the Loan is required');
    }

    // If the form is valid, submit it
    if (isValid) {
        // You can handle form submission here, e.g., sending data to a server
        alert('Form submitted successfully!');
        form.reset(); // Clear the form fields
    }
}

// Function to validate email format using a regex pattern
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to display error messages
function showError(field, message) {
    // Create a new div element to hold the error message
    let errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.innerText = message;
    // Insert the error message after the field
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

// Function to clear previous error messages
function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.remove());
}
