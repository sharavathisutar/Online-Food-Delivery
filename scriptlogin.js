function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Simple email validation
    if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email.";
        return false;
    }

    // Password length validation
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return false;
    }

    // If validation passes, you can proceed with the login logic (e.g., submit to a server)
    alert("Login successful!");
    return true;
}

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
