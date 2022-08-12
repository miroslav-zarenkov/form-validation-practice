export {
  submitForm,
  formNumberInputLimit,
  formTextInputValidation,
  formEmailInputValidation,
  formNumberInputValidation,
};
import ValidInputIcon from "./valid.png";
import InvalidInputIcon from "./invalid.png";

const submitForm = (event) => {
  event.preventDefault();
  const inputFirstName = document.querySelector("#first-name");
  console.log(inputFirstName.validity.valid);
  if (inputFirstName.validity.valid) {
    console.log("Everything valid!");
    clearFormInputs();
    showSubmitted();
  } else {
    console.log("Something invalid!");
  }
};

const clearFormInputs = () => {
  const inputCollection = document.querySelectorAll("input");
  inputCollection.forEach((element) => {
    element.value = "";
    element.classList.remove("invalid-data");
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
    event.target.parentNode.querySelector(
      ".error-p"
    ).textContent = `You Forgot Your ${inputName}`;
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
  if (event.target.value.length === 30) {
    event.target.classList.add("invalid-data");
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

const formNumberInputValidation = (event) => {
  if (event.target.validity.valid) {
    event.target.classList.remove("invalid-data");
    event.target.nextElementSibling.textContent = "Everything OK!";
    event.target.nextElementSibling.classList.remove("error-p-invalid");
    event.target.nextElementSibling.classList.add("hidden");
  } else if (event.target.validity.valueMissing) {
    const inputName = event.target.previousElementSibling.textContent;
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.textContent = `You Forgot Your ${inputName}`;
    event.target.nextElementSibling.classList.add("error-p-invalid");
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.classList.remove("hidden");
  } else {
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.textContent = "This should never happen";
    event.target.nextElementSibling.classList.add("error-p-invalid");
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.classList.remove("hidden");
  }
  if (event.target.value.length === 30) {
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.textContent = "Maximum 30 characters";
    event.target.nextElementSibling.classList.remove("hidden");
    event.target.nextElementSibling.classList.remove("error-p-invalid");
    event.target.classList.remove("invalid-data");
  }
};

const formEmailInputValidation = (event) => {
  if (event.target.validity.valid) {
    event.target.classList.remove("invalid-data");
    event.target.nextElementSibling.textContent = "Everything OK!";
    event.target.nextElementSibling.classList.remove("error-p-invalid");
    event.target.nextElementSibling.classList.add("hidden");
  } else if (event.target.validity.patternMismatch) {
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.textContent = "Wrong pattern";
    event.target.nextElementSibling.classList.add("error-p-invalid");
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.classList.remove("hidden");
  } else if (event.target.validity.valueMissing) {
    const inputName = event.target.previousElementSibling.textContent;
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.textContent = `You Forgot Your ${inputName}`;
    event.target.nextElementSibling.classList.add("error-p-invalid");
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.classList.remove("hidden");
  } else {
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.textContent = "This should never happen";
    event.target.nextElementSibling.classList.add("error-p-invalid");
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.classList.remove("hidden");
  }
  console.log("kek");
  if (event.target.value.length === 30) {
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.textContent = "Maximum 30 characters";
    event.target.nextElementSibling.classList.remove("hidden");
    event.target.nextElementSibling.classList.remove("error-p-invalid");
    event.target.classList.remove("invalid-data");
  }
};

const formNumberInputLimit = (event) => {
  let invalidChars = ["+", "e"];
  if (invalidChars.includes(event.key)) event.preventDefault();
};

const showSubmitted = () => {
  document.querySelector(".form-wrapper").classList.add("none");
  console.log("Submitted");
  const submittedInfo = document.createElement("div");
  submittedInfo.classList.add("submitted-data-div");
  submittedInfo.textContent = "Data submitted";
  document.querySelector("main").appendChild(submittedInfo);
};
