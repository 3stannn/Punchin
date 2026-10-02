const signup = document.querySelector(".signup");
const signin = document.querySelector(".signin");

function showSignIn() {
    signup.style.display = "none";
    signin.style.display = "flex";
}

function showSignUp() {
    signin.style.display = "none";
    signup.style.display = "flex";
}

document.querySelector("#show-signin").addEventListener("click", function (event) {
    event.preventDefault();
    showSignIn();
});

document.querySelector("#show-signup").addEventListener("click", function (event) {
    event.preventDefault();
    showSignUp();
});

if (window.location.hash === "#signin" || new URLSearchParams(window.location.search).get("mode") === "signin") {
    showSignIn();
}

// Automatically hide notification messages after 2 seconds
const statusMessages = document.querySelectorAll(".success-msg, .error-msg");
statusMessages.forEach((msg) => {
    setTimeout(() => {
        msg.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        msg.style.opacity = "0";
        msg.style.transform = "translateY(-5px)";
        setTimeout(() => {
            msg.remove();
        }, 500);
    }, 2000);
});