document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = {
        firstname: document.querySelector("#firstName").value,
        lastname: document.querySelector("#lastName").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };

      const response = await axios.post("http://localhost:4000/form", data);
    });
});
