import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const nameInput = document.querySelector("#senderName");
const messageInput = document.querySelector("#senderMessage");
const sendButton = document.querySelector("#sendBtn");

sendButton.addEventListener("click", async () => {
  const name = nameInput.value.trim();
  const msg = messageInput.value.trim();

  if (!name || !msg) {
    alert("Nama dan pesan tidak boleh kosong!");
    return;
  }

  try {
    await addDoc(collection(db, "messages"), {
      name: name,
      message: msg,
      time: Date.now()
    });

    alert("Pesan berhasil dikirim!");
    messageInput.value = "";
  } catch (error) {
    console.error(error);
    alert("Gagal mengirim pesan");
  }
});