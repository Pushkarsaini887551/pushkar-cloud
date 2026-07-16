// ... (ऊपर वाला Firebase कोड वैसा ही रहेगा) ...

// Cloudinary के लिए सही जानकारी डालें
const CLOUD_NAME = "do9l1n68b"; // अपनी Cloudinary सेटिंग्स में 'Cloud name' चेक करें
const UPLOAD_PRESET = "pushkar_upload"; // जो आपने अभी बनाया है
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

// इमेज अपलोड फंक्शन
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

