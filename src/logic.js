export { submitForm, formNumberInputLimit };

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
