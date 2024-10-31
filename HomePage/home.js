import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, getDocs, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

window.onload = async function() {
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
    const db = getFirestore(app);

    // Count the number of portfolio items
    const portfolioItems = document.querySelectorAll('.container.portfolio');
    const portfolioLength = portfolioItems.length;

    console.log("Current Portfolio Length:", portfolioLength);

    // Reference to the document where we store the portfolio length
    const docRef = doc(db, "portfolioLengths", "currentLength");

    // Fetch existing count from Firestore
    const docSnap = await getDocs(collection(db, "portfolioLengths"));

    if (docSnap.empty) {
        // If no document exists, create one
        await setDoc(docRef, {
            length: portfolioLength,
            timestamp: new Date()
        });
        console.log("Document created with ID: ", docRef.id);
    } else {
        // If document exists, check the current length
        const existingData = docSnap.docs[0].data();
        const existingLength = existingData.length;

        // Compare and update if different
        if (existingLength !== portfolioLength) {
            await setDoc(docRef, {
                length: portfolioLength,
                timestamp: new Date()
            });
            console.log("Document updated with new length: ", portfolioLength);
        } else {
            console.log("No update needed, length is the same.");
        }
    }
};