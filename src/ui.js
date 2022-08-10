export { renderPage };
import "./style.scss";
import GithubLogo from "./github.png";

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
  const formFirstNameErrorPara = document.createElement("p");
  formFirstNameErrorPara.classList.add("hidden");
  formFirstNameErrorPara.setAttribute("id", "first-name-error-p");
  formFirstNameErrorPara.textContent = "Everything OK!";
  formFirstName.appendChild(formFirstNamePara);
  formFirstName.appendChild(formFirstNameInput);
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
  const formLastNameErrorPara = document.createElement("p");
  formLastNameErrorPara.classList.add("hidden");
  formLastNameErrorPara.setAttribute("id", "last-name-error-p");
  formLastNameErrorPara.textContent = "Everything OK!";
  formLastName.appendChild(formLastNamePara);
  formLastName.appendChild(formLastNameInput);
  formLastName.appendChild(formLastNameErrorPara);

  const formEmail = document.createElement("label");
  const formEmailPara = document.createElement("p");
  formEmailPara.textContent = "E-mail";
  const formEmailInput = document.createElement("input");
  formEmailInput.setAttribute("type", "email");
  formEmailInput.setAttribute("id", "email");
  formEmailInput.setAttribute("name", "email");
  formEmailInput.setAttribute("maxlength", "30");
  formEmailInput.setAttribute("placeholder", "stevejobs@apple.com");
  formEmailInput.setAttribute("required", "");
  const formEmailErrorPara = document.createElement("p");
  formEmailErrorPara.classList.add("hidden");
  formEmailErrorPara.setAttribute("id", "email-error-p");
  formEmailErrorPara.textContent = "Everything OK!";
  formEmail.appendChild(formEmailPara);
  formEmail.appendChild(formEmailInput);
  formEmail.appendChild(formEmailErrorPara);

  const formCountry = document.createElement("label");
  const formCountryPara = document.createElement("p");
  formCountryPara.textContent = "Country";
  const formCountryInput = document.createElement("input");
  formCountryInput.setAttribute("type", "text");
  formCountryInput.setAttribute("id", "country");
  formCountryInput.setAttribute("name", "country");
  formCountryInput.setAttribute("maxlength", "30");
  formCountryInput.setAttribute("placeholder", "Murica");
  formCountryInput.setAttribute("required", "");
  const formCountryErrorPara = document.createElement("p");
  formCountryErrorPara.classList.add("hidden");
  formCountryErrorPara.setAttribute("id", "country-error-p");
  formCountryErrorPara.textContent = "Everything OK!";
  formCountry.appendChild(formCountryPara);
  formCountry.appendChild(formCountryInput);
  formCountry.appendChild(formCountryErrorPara);

  const formZipCode = document.createElement("label");
  const formZipCodePara = document.createElement("p");
  formZipCodePara.textContent = "Zip Code";
  const formZipCodeInput = document.createElement("input");
  formZipCodeInput.setAttribute("type", "number");
  formZipCodeInput.setAttribute("id", "zip-code");
  formZipCodeInput.setAttribute("name", "zip-code");
  formZipCodeInput.setAttribute("maxlength", "30");
  formZipCodeInput.setAttribute("placeholder", "96162");
  formZipCodeInput.setAttribute("required", "");
  const formZipCodeErrorPara = document.createElement("p");
  formZipCodeErrorPara.classList.add("hidden");
  formZipCodeErrorPara.setAttribute("id", "zip-code-error-p");
  formZipCodeErrorPara.textContent = "Everything OK!";
  formZipCode.appendChild(formZipCodePara);
  formZipCode.appendChild(formZipCodeInput);
  formZipCode.appendChild(formZipCodeErrorPara);

  const formPassword = document.createElement("label");
  const formPasswordPara = document.createElement("p");
  formPasswordPara.textContent = "Password";
  const formPasswordInput = document.createElement("input");
  formPasswordInput.setAttribute("type", "password");
  formPasswordInput.setAttribute("id", "password");
  formPasswordInput.setAttribute("name", "password");
  formPasswordInput.setAttribute("maxlength", "30");
  formPasswordInput.setAttribute("placeholder", "kek-123");
  formPasswordInput.setAttribute("required", "");
  const formPasswordErrorPara = document.createElement("p");
  formPasswordErrorPara.classList.add("hidden");
  formPasswordErrorPara.setAttribute("id", "password-error-p");
  formPasswordErrorPara.textContent = "Everything OK!";
  formPassword.appendChild(formPasswordPara);
  formPassword.appendChild(formPasswordInput);
  formPassword.appendChild(formPasswordErrorPara);

  const formPasswordConfirmation = document.createElement("label");
  const formPasswordConfirmationPara = document.createElement("p");
  formPasswordConfirmationPara.textContent = "Password Confirmation";
  const formPasswordConfirmationInput = document.createElement("input");
  formPasswordConfirmationInput.setAttribute("type", "password");
  formPasswordConfirmationInput.setAttribute("id", "password-confirmation");
  formPasswordConfirmationInput.setAttribute("name", "password-confirmation");
  formPasswordConfirmationInput.setAttribute("maxlength", "30");
  formPasswordConfirmationInput.setAttribute("placeholder", "kek-123");
  formPasswordConfirmationInput.setAttribute("required", "");
  const formPasswordConfirmationErrorPara = document.createElement("p");
  formPasswordConfirmationErrorPara.classList.add("hidden");
  formPasswordConfirmationErrorPara.setAttribute(
    "id",
    "password-confirmation-error-p"
  );
  formPasswordConfirmationErrorPara.textContent = "Everything OK!";
  formPasswordConfirmation.appendChild(formPasswordConfirmationPara);
  formPasswordConfirmation.appendChild(formPasswordConfirmationInput);
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
  console.log("initialiseEventListeners");
};

const renderPage = (event) => {
  createPage(event);
  initialiseEventListeners();
};
