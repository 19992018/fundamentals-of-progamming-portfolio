// Validator Class contains static methods for common validations
/**Classes included:
 * Validator
 * FieldValidation
 * LoginForm
 */

class Validator {
  // Check if a value is not empty
  static isNotEmpty(value) {
    return value.trim() !== "";
  }

  // Check if a password is valid (more than 8 characters)
  static isPasswordValid(password) {
    return password.length > 8;
  }

  // Check if an email is valid
  static isEmailValid(email) {
    return email.includes("@") && email.includes(".");
  }
}

// FieldValidation Class represents validation and interaction for a specific form field
class FieldValidation {
  constructor(fieldId) {
    // Get the HTML element for the field
    this.field = document.getElementById(fieldId);
  }

  // Get the value of the field
  getValue() {
    return this.field.value.trim();
  }

  // Show an error message (using alert in this example)
  showError(message) {
    alert(message);
  }
}

// LoginForm Class orchestrates the validation process for the login form
class LoginForm {
  constructor(emailFieldId, passwordFieldId, loginButtonId) {
    // Create instances of FieldValidation for each form field
    this.emailField = new FieldValidation(emailFieldId);
    this.passwordField = new FieldValidation(passwordFieldId);

    // Get the login button
    this.loginButton = document.getElementById(loginButtonId);

    // Initialize event listener for login button click
    this.init();
  }

  // Initialize event listener for login button click
  init() {
    this.loginButton.addEventListener("click", () => this.handleLogin());
  }

  // Handle the login process
  handleLogin() {
    // Get values from form fields
    const email = this.emailField.getValue();
    const password = this.passwordField.getValue();

    // Validate form fields using Validator methods
    if (!Validator.isNotEmpty(email) || !Validator.isNotEmpty(password)) {
      this.emailField.showError("Fill in all fields");
    } else if (!Validator.isPasswordValid(password)) {
      this.passwordField.showError(
        "Your password should be more than 8 characters long"
      );
    } else if (Validator.isEmailValid(email)) {
      alert("Successful login");
    } else {
      this.emailField.showError("Please enter a valid email address");
    }
  }
}

//create an instance of LoginForm
const loginForm = new LoginForm("email-field", "password-field", "submit-btn");
