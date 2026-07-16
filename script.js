import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

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

const CLOUD_NAME = "do9l1n68b";
const UPLOAD_PRESET = "pushkar_upload";
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

// लॉगिन और साइनअप
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

// फाइल अपलोड फंक्शन
document.getElementById("uploadBtn").addEventListener("click", async () => {
    const files = document.getElementById("fileInput").files;
    if (files.length === 0) return alert("फाइल चुनें!");

    for (let file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        const res = await fetch(CLOUDINARY_URL, { method: "POST", body: formData });
        const data = await res.json();

        // गैलरी में दिखाएं
        const div = document.createElement("div");
        div.innerHTML = `<img src="${data.secure_url}" width="150px"><br><a href="${data.secure_url}" download target="_blank">Download</a>`;
        document.getElementById("gallery").appendChild(div);
    }
    alert("अपलोड सफल!");
});
