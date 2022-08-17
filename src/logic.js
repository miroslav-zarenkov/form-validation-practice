export {
  submitForm,
  formNumberInputLimit,
  formTextInputValidation,
  formEmailInputValidation,
  formNumberInputValidation,
  formPasswordInputValidation,
  formPasswordConfimationInputValidation,
  formPasswordInputValidationVisual,
};
import ValidInputIcon from "./valid.png";
import InvalidInputIcon from "./invalid.png";

const submitForm = (event) => {
  event.preventDefault();
  const inputFirstName = document.querySelector("#first-name");
  const inputLastName = document.querySelector("#last-name");
  const inputEmail = document.querySelector("#email");
  const inputCountry = document.querySelector("#country");
  const inputZipCode = document.querySelector("#zip-code");
  const inputPassword = document.querySelector("#password");
  const inputPasswordConfirmation = document.querySelector(
    "#password-confirmation"
  );
  if (
    inputFirstName.validity.valid &&
    inputLastName.validity.valid &&
    inputEmail.validity.valid &&
    inputCountry.validity.valid &&
    inputZipCode.validity.valid &&
    inputPassword.validity.valid &&
    inputPassword.value === inputPasswordConfirmation.value
  ) {
    clearFormInputs();
    showSubmitted();
  } else {
    console.log("first name " + inputFirstName.validity.valid);
    console.log("last name " + inputLastName.validity.valid);
    console.log("email " + inputEmail.validity.valid);
    console.log("country " + inputCountry.validity.valid);
    console.log("zipcode " + inputZipCode.validity.valid);
    console.log(inputPassword.value === inputPasswordConfirmation.value);
  }
};

const clearFormInputs = () => {
  const inputCollection = document.querySelectorAll("input");
  inputCollection.forEach((element) => {
    element.value = "";
    element.classList.remove("invalid-data");
    element.classList.remove("valid-data");
  });
  const errorParaCollection = document.querySelectorAll(".error-p");
  errorParaCollection.forEach((element) => {
    element.textContent = "Everything OK!";
    element.classList.remove("error-p-invalid");
    element.classList.add("hidden");
  });
};

const formTextInputValidation = (event) => {
  if (event.target.validity.valid) {
    event.target.classList.remove("invalid-data");
    event.target.classList.add("valid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "Everything OK!";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("error-p-invalid");
    event.target.parentNode.querySelector(".error-p").classList.add("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", ValidInputIcon);
  } else if (event.target.validity.valueMissing) {
    const inputName = event.target.previousElementSibling.textContent;
    event.target.classList.add("invalid-data");
    event.target.classList.remove("valid-data");
    event.target.parentNode.querySelector(
      ".error-p"
    ).textContent = `You Forgot Your ${inputName}`;
    event.target.parentNode
      .querySelector(".error-p")
      .classList.add("error-p-invalid");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", InvalidInputIcon);
  } else {
    event.target.classList.add("invalid-data");
    event.target.classList.remove("valid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "This should never happen";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.add("error-p-invalid");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", InvalidInputIcon);
  }
  if (event.target.value.length === 30) {
    event.target.parentNode.querySelector(".error-p").textContent =
      "Maximum 30 characters";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("error-p-invalid");
  }
};

const formNumberInputValidation = (event) => {
  if (event.target.validity.valid) {
    event.target.classList.remove("invalid-data");
    event.target.classList.add("valid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "Everything OK!";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("error-p-invalid");
    event.target.parentNode.querySelector(".error-p").classList.add("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", ValidInputIcon);
  } else if (event.target.validity.patternMismatch) {
    event.target.classList.add("invalid-data");
    event.target.classList.remove("valid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "Please use this pattern: 94301";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.add("error-p-invalid");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", InvalidInputIcon);
  } else if (event.target.validity.valueMissing) {
    const inputName = event.target.previousElementSibling.textContent;
    event.target.classList.add("invalid-data");
    event.target.classList.remove("valid-data");
    event.target.parentNode.querySelector(
      ".error-p"
    ).textContent = `You Forgot Your ${inputName}`;
    event.target.parentNode
      .querySelector(".error-p")
      .classList.add("error-p-invalid");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", InvalidInputIcon);
  } else {
    event.target.classList.add("invalid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "This should never happen";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.add("error-p-invalid");
    event.target.classList.add("invalid-data");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", InvalidInputIcon);
  }
  if (event.target.value.length === 5) {
    event.target.classList.remove("invalid-data");
    event.target.classList.add("valid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "Maximum 5 characters";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("error-p-invalid");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", ValidInputIcon);
  }
};

const formEmailInputValidation = (event) => {
  if (event.target.validity.valid) {
    event.target.classList.remove("invalid-data");
    event.target.classList.add("valid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "Everything OK!";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("error-p-invalid");
    event.target.parentNode.querySelector(".error-p").classList.add("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", ValidInputIcon);
  } else if (event.target.validity.patternMismatch) {
    event.target.classList.add("invalid-data");
    event.target.classList.remove("valid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "Please use this pattern: example@mail.com";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.add("error-p-invalid");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", InvalidInputIcon);
  } else if (event.target.validity.valueMissing) {
    const inputName = event.target.previousElementSibling.textContent;
    event.target.classList.add("invalid-data");
    event.target.parentNode.querySelector(
      ".error-p"
    ).textContent = `You Forgot Your ${inputName}`;
    event.target.parentNode
      .querySelector(".error-p")
      .classList.add("error-p-invalid");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", InvalidInputIcon);
  } else {
    event.target.classList.add("invalid-data");
    event.target.classList.remove("valid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "This should never happen";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.add("error-p-invalid");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", InvalidInputIcon);
  }
  if (event.target.value.length === 30) {
    event.target.parentNode.querySelector(".error-p").textContent =
      "Maximum 30 characters";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("error-p-invalid");
  }
};

const formNumberInputLimit = (event) => {
  /*   let invalidChars = ["+", "e"];
  if (invalidChars.includes(event.key)) event.preventDefault(); */
  let regex = new RegExp("^[0-9]+$");
  let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  console.log(event.charCode);
  console.log(event.which);
  console.log(event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
};

const formPasswordInputValidation = (event) => {
  if (event.target.validity.valid) {
    event.target.classList.remove("invalid-data");
    event.target.classList.add("valid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "Everything OK!";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("error-p-invalid");
    event.target.parentNode.querySelector(".error-p").classList.add("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", ValidInputIcon);
  } else if (event.target.validity.valueMissing) {
    const inputName = event.target.previousElementSibling.textContent;
    event.target.classList.add("invalid-data");
    event.target.classList.remove("valid-data");
    event.target.parentNode.querySelector(
      ".error-p"
    ).textContent = `You Forgot Your ${inputName}`;
    event.target.parentNode
      .querySelector(".error-p")
      .classList.add("error-p-invalid");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", InvalidInputIcon);
  } else if (event.target.validity.patternMismatch) {
    event.target.classList.add("invalid-data");
    event.target.classList.remove("valid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "Pattern mismatch";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.add("error-p-invalid");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", InvalidInputIcon);
  } else {
    event.target.classList.add("invalid-data");
    event.target.classList.remove("valid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "This should never happen";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.add("error-p-invalid");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", InvalidInputIcon);
  }
  if (event.target.value.length === 30) {
    event.target.parentNode.querySelector(".error-p").textContent =
      "Maximum 30 characters";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("error-p-invalid");
  }
};

const formPasswordConfimationInputValidation = (event) => {
  const inputPassword = document.querySelector("#password");
  const inputPasswordConfirmation = document.querySelector(
    "#password-confirmation"
  );
  if (inputPasswordConfirmation.validity.valueMissing) {
    const inputName = event.target.previousElementSibling.textContent;
    event.target.classList.add("invalid-data");
    event.target.classList.remove("valid-data");
    event.target.parentNode.querySelector(
      ".error-p"
    ).textContent = `You Forgot Your ${inputName}`;
    event.target.parentNode
      .querySelector(".error-p")
      .classList.add("error-p-invalid");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", InvalidInputIcon);
    return;
  }
  if (inputPassword.value === inputPasswordConfirmation.value) {
    inputPasswordConfirmation.classList.remove("invalid-data");
    inputPasswordConfirmation.classList.add("valid-data");
    inputPasswordConfirmation.parentNode.querySelector(".error-p").textContent =
      "Everything OK!";
    inputPasswordConfirmation.parentNode
      .querySelector(".error-p")
      .classList.remove("error-p-invalid");
    inputPasswordConfirmation.parentNode
      .querySelector(".error-p")
      .classList.add("hidden");
    inputPasswordConfirmation.parentNode
      .querySelector("img")
      .setAttribute("src", ValidInputIcon);
  } else if (inputPasswordConfirmation.validity.valueMissing) {
    const inputName =
      inputPasswordConfirmation.previousElementSibling.textContent;
    inputPasswordConfirmation.classList.add("invalid-data");
    inputPasswordConfirmation.classList.remove("valid-data");
    inputPasswordConfirmation.parentNode.querySelector(
      ".error-p"
    ).textContent = `You Forgot Your ${inputName}`;
    inputPasswordConfirmation.parentNode
      .querySelector(".error-p")
      .classList.add("error-p-invalid");
    inputPasswordConfirmation.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    inputPasswordConfirmation.parentNode
      .querySelector("img")
      .setAttribute("src", InvalidInputIcon);
  } else {
    inputPasswordConfirmation.classList.add("invalid-data");
    inputPasswordConfirmation.classList.remove("valid-data");
    inputPasswordConfirmation.parentNode.querySelector(".error-p").textContent =
      "Passwords do not match";
    inputPasswordConfirmation.parentNode
      .querySelector(".error-p")
      .classList.add("error-p-invalid");
    inputPasswordConfirmation.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    inputPasswordConfirmation.parentNode
      .querySelector("img")
      .setAttribute("src", InvalidInputIcon);
  }
  if (inputPasswordConfirmation.value.length === 30) {
    inputPasswordConfirmation.parentNode.querySelector(".error-p").textContent =
      "Maximum 30 characters";
    inputPasswordConfirmation.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    inputPasswordConfirmation.parentNode
      .querySelector(".error-p")
      .classList.remove("error-p-invalid");
  }
};

const formPasswordInputValidationVisual = () => {
  const inputPassword = document.querySelector("#password");

  let lowerCaseLetters = /[a-z]/g;
  const lowerCaseDiv = document.querySelector("#password-pattern-lowercase");
  if (inputPassword.value.match(lowerCaseLetters)) {
    lowerCaseDiv.classList.remove("invalid");
    lowerCaseDiv.classList.add("valid");
  } else {
    lowerCaseDiv.classList.remove("valid");
    lowerCaseDiv.classList.add("invalid");
  }

  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  const upperCaseDiv = document.querySelector("#password-pattern-uppercase");
  if (inputPassword.value.match(upperCaseLetters)) {
    upperCaseDiv.classList.remove("invalid");
    upperCaseDiv.classList.add("valid");
  } else {
    upperCaseDiv.classList.remove("valid");
    upperCaseDiv.classList.add("invalid");
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  const digitDiv = document.querySelector("#password-pattern-digit");
  if (inputPassword.value.match(numbers)) {
    digitDiv.classList.remove("invalid");
    digitDiv.classList.add("valid");
  } else {
    digitDiv.classList.remove("valid");
    digitDiv.classList.add("invalid");
  }

  // Validate length
  const lengthDiv = document.querySelector("#password-pattern-minimum");
  if (inputPassword.value.length >= 8) {
    console.log("length");
    lengthDiv.classList.remove("invalid");
    lengthDiv.classList.add("valid");
  } else {
    lengthDiv.classList.remove("valid");
    lengthDiv.classList.add("invalid");
  }
};

const showSubmitted = () => {
  document.querySelector(".form-wrapper").classList.add("none");
  console.log("Submitted");
  const submittedInfo = document.createElement("div");
  submittedInfo.classList.add("submitted-data-div");
  submittedInfo.textContent = "Data submitted";
  document.querySelector("main").appendChild(submittedInfo);
};
