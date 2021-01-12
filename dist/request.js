const successMessage = document.querySelector(".success-message");
const form = document.querySelector(".form-newsletter");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  setTimeout(() => $('form').submit(), 2000);
  removeMessage();
});


function removeMessage() {
  successMessage.classList.add("active");

  setTimeout(() => {
    successMessage.classList.remove("active");
  }, 2000);
}
