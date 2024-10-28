// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXOpxM81BD8jXsjUv4hzXkIUOAysTZMyo",
    authDomain: "portbuilder-4f719.firebaseapp.com",
    projectId: "portbuilder-4f719",
    storageBucket: "portbuilder-4f719.appspot.com",
    messagingSenderId: "761086433060",
    appId: "1:761086433060:web:9757e662051e553d2805b1",
    measurementId: "G-ZH75VMXJ52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication

// Get the form element
const loginForm = document.getElementById("loginForm");
const messageDiv = document.getElementById("message");

// Add event listener to the form
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Log the email for debugging
    console.log(`Attempting to log in with email: ${email}`);

    // Sign in the user with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login successful
            const user = userCredential.user;
            // messageDiv.innerHTML = `<p style="color:green;">Logged in successfully!</p>`;
            alert("Login Successfully")

            // Redirect after successful login
            window.location.href = "/Portfolio-Website-Builder/LandingPage/landing.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            messageDiv.innerHTML = `<p style="color:red;">Error: ${errorMessage}</p>`;
        });
});
