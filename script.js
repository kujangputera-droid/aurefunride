// AUREVISTA FUN RIDE 2026
// Isi link pendaftaran di bawah ini saat sudah tersedia.

const REGISTRATION_URL = "ISI-LINK-PENDAFTARAN-DI-SINI";

document.querySelectorAll("[data-register]").forEach((link) => {
  link.href = REGISTRATION_URL;

  link.addEventListener("click", (event) => {
    if (REGISTRATION_URL.includes("ISI-LINK")) {
      event.preventDefault();
      alert(
        "Link pendaftaran belum diisi. Buka script.js lalu ganti REGISTRATION_URL."
      );
    }
  });
});
