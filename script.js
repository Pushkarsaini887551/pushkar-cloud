// 1. Firebase कॉन्फ़िगरेशन
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5NQYqtdKLfReVM9u3-Woo8hwIgxz5Rg",
  authDomain: "pushkar-cloud.firebaseapp.com",
  projectId: "pushkar-cloud",
  storageBucket: "pushkar-cloud.firebasestorage.app",
  messagingSenderId: "129945481337",
  appId: "1:129945481337:web:e78b41bddbbf1676cee4a8"
};

// Firebase इनिशियलाइज़ करें
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 2. Cloudinary का सेटअप (यहाँ अपनी Cloudinary की जानकारी डालें)
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload";
const UPLOAD_PRESET = "YOUR_UPLOAD_PRESET";

// उदाहरण: इमेज अपलोड फंक्शन (Cloudinary के लिए)
async function uploadToCloudinary(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const response = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData
    });
    const data = await response.json();
    return data.secure_url; // यह आपको इमेज का लिंक देगा
}

console.log("Firebase और Cloudinary सेटअप तैयार है!");
