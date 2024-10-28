// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAXOpxM81BD8jXsjUv4hzXkIUOAysTZMyo",
//     authDomain: "portbuilder-4f719.firebaseapp.com",
//     projectId: "portbuilder-4f719",
//     storageBucket: "portbuilder-4f719.appspot.com",
//     messagingSenderId: "761086433060",
//     appId: "1:761086433060:web:9757e662051e553d2805b1",
//     measurementId: "G-ZH75VMXJ52"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);  // Initialize Authentication

// // Get the submit button element
// const submit = document.getElementById("submit");

// // Add an event listener to the submit button
// submit.addEventListener("click", function (event) {
//     event.preventDefault();

//     // Get input values
//     // const username = document.getElementById("username").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     console.log(email);

//     // Create a new user with the provided email and password
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed up successfully
//             const user = userCredential.user;
//             alert("Account created successfully!");
//             window.location.href = "/Portfolio-Website-Builder/LoginPage/index.html"
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(`Error: ${errorMessage}`);
//         });
// });


// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration object
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
const auth = getAuth();

const registrationForm = document.getElementById('registrationForm');
const errorMessage = document.getElementById('errorMessage');

// Register and send verification email
registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Register user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Send email verification link
        await sendEmailVerification(user);
        alert('Verification email sent! Please check your inbox.');

        // Optionally redirect to login page after registration
        window.location.href = "/Portfolio-Website-Builder/LoginPage/index.html";
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});
