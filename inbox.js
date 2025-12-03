import { db } from "./firebase.js";
import { collection, query, orderBy, onSnapshot } 
  from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const messageList = document.getElementById("messageList");

// Query Firestore → ambil messages berurutan dari terbaru
const q = query(
  collection(db, "messages"),
  orderBy("time", "desc")
);

// Listen realtime
onSnapshot(q, (snapshot) => {
  messageList.innerHTML = "";

  if (snapshot.empty) {
    messageList.innerHTML = "<p>Belum ada pesan...</p>";
    return;
  }

  snapshot.forEach((doc) => {
    const data = doc.data();

    const card = document.createElement("div");
    card.classList.add("message-card");

    const time = new Date(data.time).toLocaleString();

    card.innerHTML = `
      <h3>${data.name}</h3>
      <p>${data.message}</p>
      <small>${time}</small>
      <hr>
    `;

    messageList.appendChild(card);
  });
});