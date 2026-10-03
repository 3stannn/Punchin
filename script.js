const signup = document.querySelector(".signup");
const signin = document.querySelector(".signin");

function showSignIn() {
    if (signup) signup.style.display = "none";
    if (signin) signin.style.display = "flex";
}

function showSignUp() {
    if (signin) signin.style.display = "none";
    if (signup) signup.style.display = "flex";
}

const showSignInBtn = document.querySelector("#show-signin");
if (showSignInBtn) {
    showSignInBtn.addEventListener("click", function (event) {
        event.preventDefault();
        showSignIn();
    });
}

const showSignUpBtn = document.querySelector("#show-signup");
if (showSignUpBtn) {
    showSignUpBtn.addEventListener("click", function (event) {
        event.preventDefault();
        showSignUp();
    });
}

if (window.location.hash === "#signup" || new URLSearchParams(window.location.search).get("mode") === "signup") {
    showSignUp();
} else {
    showSignIn();
}

function signIn(event) {
    if (event) event.preventDefault();

    let usernameInput = document.querySelector("#username");
    let passwordInput = document.querySelector("#password");

    if (!usernameInput || !passwordInput) return;

    let username = usernameInput.value.trim();
    let password = passwordInput.value;

    if (username === "admin" && password === "admin123") {
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password.");
    }
}
