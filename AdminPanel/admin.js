import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, collection, getDocs , query , where } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

window.onload = function() {
    const firebaseConfig = {
        apiKey: "AIzaSyAXOpxM81BD8jXsjUv4hzXkIUOAysTZMyo",
        authDomain: "portbuilder-4f719.firebaseapp.com",
        projectId: "portbuilder-4f719",
        storageBucket: "portbuilder-4f719.appspot.com",
        messagingSenderId: "761086433060",
        appId: "1:761086433060:web:9757e662051e553d2805b1"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const db = getFirestore();

    console.log("Firebase initialized:", app);

    // Get references to UI elements
    const totalUsersElement = document.getElementById('totalUsers');
    const totalAdmin = document.getElementById('totalAdmin');
    
    const totalRegUser = document.getElementById('totalRegUser');
    const logoutBtn = document.getElementById('logoutBtn');

    // Fetch all users from Firestore
    async function fetchTotalUsers() {
        console.log("Fetching users from Firestore...");
        try {
            const snapshot = await getDocs(collection(db, 'users'));
            console.log("Users fetched:", snapshot.size);
            totalUsersElement.textContent = snapshot.size;
        } catch (error) {
            console.error("Error fetching users:", error);
            totalUsersElement.textContent = 'Error fetching users';
        }
    }

    



    async function fetchTotalAdmins() {
        console.log("Fetching admins from Firestore...");
        try {
            // Create a query to filter admins by role
            const adminsQuery = query(collection(db, 'users'), where('role', '==', 'Admin'));
            const snapshot = await getDocs(adminsQuery);
            console.log("Admins fetched:", snapshot.size);
            totalAdmin.textContent = snapshot.size; // Update the total admins element
        } catch (error) {
            console.error("Error fetching admins:", error);
            totalAdmin.textContent = 'Error fetching admins';
        }
    }



    async function fetchTotalRegUsers() {
        console.log("Fetching admins from Firestore...");
        try {
            // Create a query to filter admins by role
            const adminsQuery = query(collection(db, 'users'), where('role', '==', 'User'));
            const snapshot = await getDocs(adminsQuery);
            console.log("Admins fetched:", snapshot.size);
            totalRegUser.textContent = snapshot.size; // Update the total admins element
        } catch (error) {
            console.error("Error fetching admins:", error);
            totalRegUser.textContent = 'Error fetching admins';
        }
    }

    // Fetch total users on page load
    fetchTotalUsers();
    fetchTotalAdmins();
    fetchTotalRegUsers(); 


    // Log-Out

    logoutBtn.addEventListener('click', async () => {
        try {
            await signOut(auth);
            alert('Logged out successfully!');
            window.location.href = '/Portfolio-Website-Builder/LoginPage/index.html';
        } catch (error) {
            console.error("Error logging out:", error);
        }
    });
}

    