document.getElementById("generate").addEventListener("click", () => {
  const user = document.getElementById("username").value.trim();

  if (!user) {
    alert("Masukkan username!");
    return;
  }

  const link = `${window.location.origin}/send.html?u=${encodeURIComponent(user)}`;

  document.getElementById("result").innerHTML = `
    <p>Link kamu:</p>
    <a href="${link}" target="_blank">${link}</a>
  `;
});