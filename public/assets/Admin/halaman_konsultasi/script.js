// script.js

// Mengambil elemen-elemen penting dari DOM
const sendButton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");
const chatMessages = document.getElementById("chat-messages");

// Menambahkan event listener untuk tombol kirim
sendButton.addEventListener("click", sendMessage);

// Menambahkan event listener untuk tombol enter pada input pesan
messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// Fungsi untuk mengirim pesan
function sendMessage() {
    const message = messageInput.value.trim();

    // Jika input pesan tidak kosong
    if (message) {
        // Menambahkan pesan pengguna ke area chat
        addMessage(message, "user");
        // Mengosongkan input pesan
        messageInput.value = "";

        // Simulasi respons bot dengan jeda 1 detik
        setTimeout(() => {
            addMessage("Selamat Siang Pak", "bot");
        }, 1000);
    }
}

// Fungsi untuk menambahkan pesan ke area chat
function addMessage(text, sender) {
    // Membuat elemen div untuk pesan
    const messageContainer = document.createElement("div");
    // Menambahkan kelas 'message' dan kelas sesuai pengirim ('user' atau 'bot')
    messageContainer.classList.add("message", sender);
    // Menambahkan teks pesan ke elemen div
    messageContainer.textContent = text;

    // Menambahkan pesan ke area chat
    chatMessages.appendChild(messageContainer);
    // Menggulir area chat ke bawah agar pesan terbaru terlihat
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
