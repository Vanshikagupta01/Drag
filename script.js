document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.getElementById("login-container");
    const appContainer = document.getElementById("app-container");

    // Redirect to login page if not authenticated
    if (!localStorage.getItem("authenticated") && window.location.pathname.includes("index.html")) {
        window.location.href = "login.html";
    }

    // Function to log in
    function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            localStorage.setItem("authenticated", "true");
            window.location.href = "index.html"; // Redirect to index page after login
        } else {
            alert("Invalid Credentials! Try again.");
        }
    }

    // Function to sign up
    function signup() {
        const newUsername = document.getElementById("new-username").value;
        const newPassword = document.getElementById("new-password").value;

        if (newUsername && newPassword) {
            localStorage.setItem("username", newUsername);
            localStorage.setItem("password", newPassword);
            alert("Signup successful! Now log in.");
            window.location.href = "login.html"; // Redirect to login after signup
        } else {
            alert("Please fill in all fields.");
        }
    }

    // Function to log out
    function logout() {
        localStorage.removeItem("authenticated");
        window.location.href = "login.html"; // Redirect to login after logout
    }

    // Ensure login state
    if (localStorage.getItem("authenticated")) {
        if (loginContainer) loginContainer.style.display = "none";
        if (appContainer) appContainer.style.display = "flex";
    } else {
        if (loginContainer) loginContainer.style.display = "flex";
        if (appContainer) appContainer.style.display = "none";
    }

    // Event listeners for buttons
    if (document.getElementById("login-btn")) {
        document.getElementById("login-btn").addEventListener("click", login);
    }

    if (document.getElementById("signup-btn")) {
        document.getElementById("signup-btn").addEventListener("click", signup);
    }

    if (document.getElementById("logout-btn")) {
        document.getElementById("logout-btn").addEventListener("click", logout);
    }
});
