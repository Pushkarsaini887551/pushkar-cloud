import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// 1. Firebase कॉन्फ़िगरेशन
const firebaseConfig = {
  apiKey: "AIzaSyB5NQYqtdKLfReVM9u3-Woo8hwIgxz5Rg",
  authDomain: "pushkar-cloud.firebaseapp.com",
  projectId: "pushkar-cloud",
  storageBucket: "pushkar-cloud.firebasestorage.app",
  messagingSenderId: "129945481337",
  appId: "1:129945481337:web:e78b41bddbbf1676cee4a8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 2. Cloudinary कॉन्फ़िगरेशन
const CLOUD_NAME = "do9l1n68b";
const UPLOAD_PRESET = "pushkar_upload";
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

// 3. इमेज अपलोड फंक्शन
async function uploadToCloudinary(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const response = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData
    });
    const data = await response.json();
    console.log("इमेज अपलोड हो गई, लिंक यहाँ है:", data.secure_url);
    return data.secure_url;
}

// 4. लॉगिन और साइनअप इवेंट्स
document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    signInWithEmailAndPassword(auth, email, password)
        .then(() => alert("लॉगिन सफल!"))
        .catch((error) => alert("एरर: " + error.message));
});

document.getElementById("signupBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => alert("साइनअप सफल!"))
        .catch((error) => alert("एरर: " + error.message));
});
