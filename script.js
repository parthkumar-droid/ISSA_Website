document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  form.addEventListener("submit", function (event) {
    const errors = [];

    // Username validation
    if (usernameInput.value.length < 3) {
      errors.push("Username must be at least 3 characters long.");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      errors.push("Please enter a valid email address.");
    }

    // Password validation
    if (passwordInput.value.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }

    // Password confirmation
    if (passwordInput.value !== confirmPasswordInput.value) {
      errors.push("Passwords do not match.");
    }

    // Show errors and prevent submission
    if (errors.length > 0) {
      event.preventDefault();
      alert(errors.join("\n"));
    }
  });
});
