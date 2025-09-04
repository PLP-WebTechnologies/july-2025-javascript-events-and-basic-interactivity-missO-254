//  Dark Mode Toggle
// This feature allows users to switch between light and dark themes.
const toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

//  Counter Game
// A simple interactive counter with increase, decrease, and reset buttons.
let count = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("incrementBtn").addEventListener("click", () => {
  count++; // increase value
  counterValue.textContent = count;
});

document.getElementById("decrementBtn").addEventListener("click", () => {
  count--; // decrease value
  counterValue.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0; // reset value
  counterValue.textContent = count;
});

//  FAQ Toggle
// Shows or hides the answer when the user clicks the question button.
const faqToggle = document.querySelector(".faq-toggle");
const faqAnswer = document.querySelector(".faq-answer");

faqToggle.addEventListener("click", () => {
  faqAnswer.classList.toggle("hidden"); // toggle visibility
});

//  Form Validation
// Validates name, email, and password fields before form submission.
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from refreshing the page
  let isValid = true;

  // Validate Name (must be at least 3 characters)
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Validate Email (must follow email format)
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex for email
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Validate Password (at least 6 characters)
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  //  Success message if all fields are valid
  if (isValid) {
    document.getElementById("formMessage").textContent = " Form submitted successfully!";
  }
});
