const successMessage = document.querySelector(".success-message");
const form = document.querySelector(".form-newsletter");

form.addEventListener("submit", (e) => {
//   e.preventDefault();
  const name = document.querySelector(".firstName-input").value;
  const lastname = document.querySelector(".lastName-input").value;
  const company = document.querySelector(".company-input").value;
  const email = document.querySelector(".email-input").value;


  
  Email.send({
    Host : "utimaco.netlify.app",
    Username : "utimaco.netlify.app",
    Password : "utimaco.netlify.app",
    To : `${email}`,
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

  removeMessage();
});


function removeMessage() {
  successMessage.classList.add("active");

  setTimeout(() => {
    successMessage.classList.remove("active");
  }, 2000);
}
