export {
  submitForm,
  formNumberInputLimit,
  formTextInputValidation,
  formEmailInputValidation,
  formNumberInputValidation,
  formPasswordInputValidation,
  formPasswordConfimationInputValidation,
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
    event.target.classList.remove("invalid-data");
    event.target.classList.add("valid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "Maximum 30 characters";
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
    event.target.classList.remove("invalid-data");

    event.target.parentNode.querySelector(".error-p").textContent =
      "Maximum 30 characters";
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("hidden");
    event.target.parentNode
      .querySelector(".error-p")
      .classList.remove("error-p-invalid");
    event.target.classList.remove("invalid-data");
    event.target.parentNode
      .querySelector("img")
      .setAttribute("src", ValidInputIcon);
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
    event.target.classList.remove("invalid-data");
    event.target.classList.add("valid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "Maximum 30 characters";
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

const formPasswordConfimationInputValidation = (event) => {
  const inputPassword = document.querySelector("#password");
  const inputPasswordConfirmation = document.querySelector(
    "#password-confirmation"
  );
  console.log(inputPassword.value);
  console.log(inputPasswordConfirmation.value);
  if (inputPassword.value === inputPasswordConfirmation.value) {
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
    event.target.classList.remove("invalid-data");
    event.target.classList.add("valid-data");
    event.target.parentNode.querySelector(".error-p").textContent =
      "Maximum 30 characters";
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

const showSubmitted = () => {
  document.querySelector(".form-wrapper").classList.add("none");
  console.log("Submitted");
  const submittedInfo = document.createElement("div");
  submittedInfo.classList.add("submitted-data-div");
  submittedInfo.textContent = "Data submitted";
  document.querySelector("main").appendChild(submittedInfo);
};
