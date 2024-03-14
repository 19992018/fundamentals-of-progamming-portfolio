//Preferrably; Start reading the code from the last line

//We set our global consts
//They will be used in the functions validateCriteria and validateThenCreate
const REQUIRED = "REQUIRED";
const MIN_LENGTH = "MIN_LENGTH";
const VALID_EMAIL = "VALID_EMAIL";

function validateCriteria(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    //whenever we set our flag as required, we ensure that what is entered is greater than 0
    //What do we use in place of .trim!!!!!!
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    //when we set our flag as min_length we ensure that what is entered is greater than validator value(8)
    return value.trim().length > validatorValue;
  }
  if (flag === VALID_EMAIL) {
    //when we set our flag as valid_email we ensure that what is entered includes an @ and a .
    return value.includes("@") && value.includes(".");
  }
}

function getUserInput(inputElementId) {
  return document.getElementById(inputElementId).value;
}

//this function creates a user after checking if the user values
//entered meet the criteria set in thefunction validateCriteria
function validateThenCreate(userName, userPassword) {
  //we check if what is entered in place of validateCriteria's value meets required
  //and if  what is entered in place of validateCriteria's value meets min_lenth...
  //if it doesnt we throw an error
  if (!validateCriteria(userName || userPassword, REQUIRED)) {
    //Why not alert?!!!!!!!!!!
    throw new Error("Fill in all fields");
  } else if (!validateCriteria(userPassword, MIN_LENGTH, 8)) {
    throw new Error("Your password should be more than 8 characters long");
  } else if (!validateCriteria(userName, VALID_EMAIL)) {
    throw new Error("Please enter a valid email address");
  }

  //if it it does, we give what was entered new names that are a product of the function.
  //The new names will be used later in greetUser()
  return {
    userName: userName,
    password: userPassword,
  };
}

//this function greets the user (in the signUpHandler function after user is detected)
function greetUser(user) {
  alert("Hi, " + user.userName + "welcome to this website!");
}

function signupHandler() {
  //here we set the ids of the elements we are working with(input elemments)
  //we do this by calling the function getUserInput
  //for instance, we have set const enteredUsername to grab (the value of) the element with the id "email-field"
  const enteredUsername = getUserInput("email-field");
  const enteredPassword = getUserInput("password-field");

  try {
    //we set our new user depending on whether the user meets the validateThenCreate function criteria
    const newUser = validateThenCreate(enteredUsername, enteredPassword);
    // console.log(newUser);---code commented out
    //Here we give values to the function greetUser !!!!!!!
    greetUser(newUser);
  } catch (err) {
    alert(err.message);
  }
}

function buttonListener(btnId, formSubmitHandler) {
  //here we get the ID of whichever element we are working with (button)
  const btn = document.getElementById(btnId);
  //then we set an onclick listener to the element we are working with.
  //on click, we call the function that will take the place of the
  //parameter form submit handler (in this code we call sign up handler: line 86)
  btn.addEventListener("click", formSubmitHandler);
}

//here we call the function buttonListener; setting
//the btnId to submit-btn and formSubmitHandler function to signUp Handler
buttonListener("submit-btn", signupHandler);
