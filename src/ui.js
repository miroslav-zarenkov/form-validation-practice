export { renderPage };
import "./style.scss";
import GithubLogo from "./github.png";
import {
  submitForm,
  formNumberInputLimit,
  formTextInputValidation,
  formEmailInputValidation,
  formNumberInputValidation,
  formPasswordInputValidation,
  formPasswordConfimationInputValidation,
  formPasswordInputValidationVisual,
} from "./logic";

const createWrapper = () => {
  const mainWrapper = document.createElement("div");
  mainWrapper.classList.add("main-wrapper");
  return mainWrapper;
};

const createHeader = () => {
  const header = document.createElement("header");
  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "Form Validation Practice";
  header.appendChild(headerTitle);
  return header;
};

const createMain = () => {
  const main = document.createElement("main");
  main.appendChild(createForm());
  return main;
};

const createForm = () => {
  const formWrapper = document.createElement("div");
  formWrapper.classList.add("form-wrapper");
  const formContainer = document.createElement("form");

  const formFirstName = document.createElement("label");
  const formFirstNamePara = document.createElement("p");
  formFirstNamePara.textContent = "First Name";
  const formFirstNameInput = document.createElement("input");
  formFirstNameInput.setAttribute("type", "text");
  formFirstNameInput.setAttribute("id", "first-name");
  formFirstNameInput.setAttribute("name", "first-name");
  formFirstNameInput.setAttribute("maxlength", "30");
  formFirstNameInput.setAttribute("placeholder", "Steve");
  formFirstNameInput.setAttribute("required", "");

  const formFirstNameValidationIconSpan = document.createElement("span");
  const formFirstNameValidationIconImg = document.createElement("img");
  formFirstNameValidationIconImg.classList.add("validation-icon");
  formFirstNameValidationIconSpan.appendChild(formFirstNameValidationIconImg);

  const formFirstNameErrorPara = document.createElement("p");
  formFirstNameErrorPara.classList.add("hidden");
  formFirstNameErrorPara.classList.add("error-p");
  formFirstNameErrorPara.setAttribute("id", "first-name-error-p");
  formFirstNameErrorPara.textContent = "Everything OK!";
  formFirstName.appendChild(formFirstNamePara);
  formFirstName.appendChild(formFirstNameInput);
  formFirstName.appendChild(formFirstNameValidationIconSpan);
  formFirstName.appendChild(formFirstNameErrorPara);

  const formLastName = document.createElement("label");
  const formLastNamePara = document.createElement("p");
  formLastNamePara.textContent = "Last Name";
  const formLastNameInput = document.createElement("input");
  formLastNameInput.setAttribute("type", "text");
  formLastNameInput.setAttribute("id", "last-name");
  formLastNameInput.setAttribute("name", "last-name");
  formLastNameInput.setAttribute("maxlength", "30");
  formLastNameInput.setAttribute("placeholder", "Jobs");
  formLastNameInput.setAttribute("required", "");

  const formLastNameValidationIconSpan = document.createElement("span");
  const formLastNameValidationIconImg = document.createElement("img");
  formLastNameValidationIconImg.classList.add("validation-icon");
  formLastNameValidationIconSpan.appendChild(formLastNameValidationIconImg);

  const formLastNameErrorPara = document.createElement("p");
  formLastNameErrorPara.classList.add("hidden");
  formLastNameErrorPara.classList.add("error-p");
  formLastNameErrorPara.setAttribute("id", "last-name-error-p");
  formLastNameErrorPara.textContent = "Everything OK!";
  formLastName.appendChild(formLastNamePara);
  formLastName.appendChild(formLastNameInput);
  formLastName.appendChild(formLastNameValidationIconSpan);
  formLastName.appendChild(formLastNameErrorPara);

  const formEmail = document.createElement("label");
  const formEmailPara = document.createElement("p");
  formEmailPara.textContent = "E-mail";
  const formEmailInput = document.createElement("input");
  formEmailInput.setAttribute("type", "email");
  formEmailInput.setAttribute("id", "email");
  formEmailInput.setAttribute("name", "email");
  formEmailInput.setAttribute("maxlength", "30");
  formEmailInput.setAttribute("placeholder", "sjobs@apple.com");
  formEmailInput.setAttribute(
    "pattern",
    "[[a-zA-Z0-9-_+.]+@[a-zA-Z]+[.]+[a-zA-Z]+"
  );
  formEmailInput.setAttribute("required", "");
  const formEmailValidationIconSpan = document.createElement("span");
  const formEmailValidationIconImg = document.createElement("img");
  formEmailValidationIconImg.classList.add("validation-icon");
  formEmailValidationIconSpan.appendChild(formEmailValidationIconImg);
  const formEmailErrorPara = document.createElement("p");
  formEmailErrorPara.classList.add("hidden");
  formEmailErrorPara.classList.add("error-p");
  formEmailErrorPara.setAttribute("id", "email-error-p");
  formEmailErrorPara.textContent = "Everything OK!";
  formEmail.appendChild(formEmailPara);
  formEmail.appendChild(formEmailInput);
  formEmail.appendChild(formEmailValidationIconSpan);
  formEmail.appendChild(formEmailErrorPara);

  const formCountry = document.createElement("label");
  const formCountryPara = document.createElement("p");
  formCountryPara.textContent = "Country";
  const formCountryInput = document.createElement("input");
  formCountryInput.setAttribute("type", "text");
  formCountryInput.setAttribute("id", "country");
  formCountryInput.setAttribute("name", "country");
  formCountryInput.setAttribute("maxlength", "30");
  formCountryInput.setAttribute("placeholder", "USA");
  formCountryInput.setAttribute("required", "");
  const formCountryValidationIconSpan = document.createElement("span");
  const formCountryValidationIconImg = document.createElement("img");
  formCountryValidationIconImg.classList.add("validation-icon");
  formCountryValidationIconSpan.appendChild(formCountryValidationIconImg);
  const formCountryErrorPara = document.createElement("p");
  formCountryErrorPara.classList.add("hidden");
  formCountryErrorPara.classList.add("error-p");
  formCountryErrorPara.setAttribute("id", "country-error-p");
  formCountryErrorPara.textContent = "Everything OK!";
  formCountry.appendChild(formCountryPara);
  formCountry.appendChild(formCountryInput);
  formCountry.appendChild(formCountryValidationIconSpan);
  formCountry.appendChild(formCountryErrorPara);

  const formZipCode = document.createElement("label");
  const formZipCodePara = document.createElement("p");
  formZipCodePara.textContent = "Zip Code";
  const formZipCodeInput = document.createElement("input");
  formZipCodeInput.setAttribute("type", "text");
  formZipCodeInput.setAttribute("id", "zip-code");
  formZipCodeInput.setAttribute("name", "zip-code");
  formZipCodeInput.setAttribute("maxlength", "5");
  formZipCodeInput.setAttribute("min", "0");
  formZipCodeInput.setAttribute("placeholder", "94301");
  formZipCodeInput.setAttribute("pattern", "[0-9]{5}");
  formZipCodeInput.setAttribute("required", "");
  const formZipCodeValidationIconSpan = document.createElement("span");
  const formZipCodeValidationIconImg = document.createElement("img");
  formZipCodeValidationIconImg.classList.add("validation-icon");
  formZipCodeValidationIconSpan.appendChild(formZipCodeValidationIconImg);
  const formZipCodeErrorPara = document.createElement("p");
  formZipCodeErrorPara.classList.add("hidden");
  formZipCodeErrorPara.classList.add("error-p");
  formZipCodeErrorPara.setAttribute("id", "zip-code-error-p");
  formZipCodeErrorPara.textContent = "Everything OK!";
  formZipCode.appendChild(formZipCodePara);
  formZipCode.appendChild(formZipCodeInput);
  formZipCode.appendChild(formZipCodeValidationIconSpan);
  formZipCode.appendChild(formZipCodeErrorPara);

  const formPassword = document.createElement("label");
  const formPasswordPara = document.createElement("p");
  formPasswordPara.textContent = "Password";
  const formPasswordInput = document.createElement("input");
  formPasswordInput.setAttribute("type", "password");
  formPasswordInput.setAttribute("id", "password");
  formPasswordInput.setAttribute("name", "password");
  formPasswordInput.setAttribute("maxlength", "30");
  formPasswordInput.setAttribute(
    "pattern",
    "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"
  );
  formPasswordInput.setAttribute("required", "");
  const formPasswordValidationIconSpan = document.createElement("span");
  const formPasswordValidationIconImg = document.createElement("img");
  formPasswordValidationIconImg.classList.add("validation-icon");
  formPasswordValidationIconSpan.appendChild(formPasswordValidationIconImg);
  const formPasswordErrorPara = document.createElement("p");
  formPasswordErrorPara.classList.add("hidden");
  formPasswordErrorPara.classList.add("error-p");
  formPasswordErrorPara.setAttribute("id", "password-error-p");
  formPasswordErrorPara.textContent = "Everything OK!";
  const formPasswordPatternDiv = document.createElement("div");
  formPasswordPatternDiv.classList.add("password-pattern");
  const formPasswordPatternDivOne = document.createElement("div");
  formPasswordPatternDivOne.classList.add("password-pattern-element");
  formPasswordPatternDivOne.classList.add("invalid");
  formPasswordPatternDivOne.setAttribute("id", "password-pattern-uppercase");
  formPasswordPatternDivOne.textContent = "1 uppercase letter";
  const formPasswordPatternDivTwo = document.createElement("div");
  formPasswordPatternDivTwo.classList.add("password-pattern-element");
  formPasswordPatternDivTwo.classList.add("invalid");
  formPasswordPatternDivTwo.setAttribute("id", "password-pattern-lowercase");
  formPasswordPatternDivTwo.textContent = "1 lowercase letter";
  const formPasswordPatternDivThree = document.createElement("div");
  formPasswordPatternDivThree.classList.add("password-pattern-element");
  formPasswordPatternDivThree.classList.add("invalid");
  formPasswordPatternDivThree.setAttribute("id", "password-pattern-digit");
  formPasswordPatternDivThree.textContent = "1 digit";
  const formPasswordPatternDivFour = document.createElement("div");
  formPasswordPatternDivFour.classList.add("password-pattern-element");
  formPasswordPatternDivFour.classList.add("invalid");
  formPasswordPatternDivFour.setAttribute("id", "password-pattern-minimum");
  formPasswordPatternDivFour.textContent = "minimum 8 chars";
  formPasswordPatternDiv.appendChild(formPasswordPatternDivOne);
  formPasswordPatternDiv.appendChild(formPasswordPatternDivTwo);
  formPasswordPatternDiv.appendChild(formPasswordPatternDivThree);
  formPasswordPatternDiv.appendChild(formPasswordPatternDivFour);

  formPassword.appendChild(formPasswordPara);
  formPassword.appendChild(formPasswordInput);
  formPassword.appendChild(formPasswordValidationIconSpan);
  formPassword.appendChild(formPasswordErrorPara);
  formPassword.appendChild(formPasswordPatternDiv);

  const formPasswordConfirmation = document.createElement("label");
  const formPasswordConfirmationPara = document.createElement("p");
  formPasswordConfirmationPara.textContent = "Password Confirmation";
  const formPasswordConfirmationInput = document.createElement("input");
  formPasswordConfirmationInput.setAttribute("type", "password");
  formPasswordConfirmationInput.setAttribute("id", "password-confirmation");
  formPasswordConfirmationInput.setAttribute("name", "password-confirmation");
  formPasswordConfirmationInput.setAttribute("maxlength", "30");
  formPasswordConfirmationInput.setAttribute("required", "");
  const formPasswordConfirmationValidationIconSpan =
    document.createElement("span");
  const formPasswordConfirmationValidationIconImg =
    document.createElement("img");
  formPasswordConfirmationValidationIconImg.classList.add("validation-icon");
  formPasswordConfirmationValidationIconSpan.appendChild(
    formPasswordConfirmationValidationIconImg
  );
  const formPasswordConfirmationErrorPara = document.createElement("p");
  formPasswordConfirmationErrorPara.classList.add("hidden");
  formPasswordConfirmationErrorPara.classList.add("error-p");
  formPasswordConfirmationErrorPara.setAttribute(
    "id",
    "password-confirmation-error-p"
  );
  formPasswordConfirmationErrorPara.textContent = "Everything OK!";
  formPasswordConfirmation.appendChild(formPasswordConfirmationPara);
  formPasswordConfirmation.appendChild(formPasswordConfirmationInput);
  formPasswordConfirmation.appendChild(
    formPasswordConfirmationValidationIconSpan
  );
  formPasswordConfirmation.appendChild(formPasswordConfirmationErrorPara);

  const formButtonWrapper = document.createElement("div");
  formButtonWrapper.classList.add("form-btn-wrapper");
  const formSubmitButton = document.createElement("button");
  formSubmitButton.textContent = "Submit";
  formSubmitButton.classList.add("submit-form-button");
  formSubmitButton.setAttribute("type", "submit");
  formButtonWrapper.appendChild(formSubmitButton);

  formContainer.appendChild(formFirstName);
  formContainer.appendChild(formLastName);
  formContainer.appendChild(formEmail);
  formContainer.appendChild(formCountry);
  formContainer.appendChild(formZipCode);
  formContainer.appendChild(formPassword);
  formContainer.appendChild(formPasswordConfirmation);
  formContainer.appendChild(formButtonWrapper);
  formWrapper.appendChild(formContainer);

  return formWrapper;
};

const createFooter = () => {
  const footer = document.createElement("footer");
  const footerDiv = document.createElement("div");
  const footerLink = document.createElement("a");
  const footerLinkImg = document.createElement("img");
  footerLinkImg.classList.add("github-logo");
  footerLinkImg.setAttribute("src", GithubLogo);
  footerDiv.textContent = "Developed by miroslav-zarenkov";
  footerLink.setAttribute("href", "https://github.com/miroslav-zarenkov");
  footerLink.setAttribute("target", "_blank");
  footerLink.setAttribute("rel", "noopener noreferrer");
  footer.appendChild(footerDiv);
  footer.appendChild(footerLink);
  footerLink.appendChild(footerLinkImg);
  return footer;
};

const createPage = (event) => {
  document.body.appendChild(createWrapper());
  document.querySelector(".main-wrapper").appendChild(createHeader());
  document.querySelector(".main-wrapper").appendChild(createMain());
  document.querySelector(".main-wrapper").appendChild(createFooter());
};

const initialiseEventListeners = () => {
  document
    .querySelector("#first-name")
    .addEventListener("input", formTextInputValidation);
  document
    .querySelector("#first-name")
    .addEventListener("focusout", formTextInputValidation);
  document
    .querySelector("#last-name")
    .addEventListener("input", formTextInputValidation);
  document
    .querySelector("#last-name")
    .addEventListener("focusout", formTextInputValidation);
  document
    .querySelector("#email")
    .addEventListener("input", formEmailInputValidation);
  document
    .querySelector("#email")
    .addEventListener("focusout", formEmailInputValidation);
  document
    .querySelector("#country")
    .addEventListener("input", formTextInputValidation);
  document
    .querySelector("#country")
    .addEventListener("focusout", formTextInputValidation);
  document
    .querySelector("#zip-code")
    .addEventListener("keypress", formNumberInputLimit);
  document
    .querySelector("#zip-code")
    .addEventListener("input", formNumberInputValidation);
  document
    .querySelector("#zip-code")
    .addEventListener("focusout", formNumberInputValidation);
  document
    .querySelector("#password")
    .addEventListener("input", formPasswordConfimationInputValidation);
  document
    .querySelector("#password")
    .addEventListener("input", formPasswordInputValidation);
  document
    .querySelector("#password")
    .addEventListener("input", formPasswordInputValidationVisual);
  document
    .querySelector("#password")
    .addEventListener("focusout", formPasswordInputValidation);

  document
    .querySelector("#password-confirmation")
    .addEventListener("input", formPasswordConfimationInputValidation);
  document
    .querySelector("#password-confirmation")
    .addEventListener("focusout", formPasswordConfimationInputValidation);

  document
    .querySelector(".submit-form-button")
    .addEventListener("click", submitForm);
};

const renderPage = (event) => {
  createPage(event);
  initialiseEventListeners();
};

function kek() {
  console.log("you suck");
}
