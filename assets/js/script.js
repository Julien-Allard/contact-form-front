document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (e) => {
      try {
        e.preventDefault();
        const data = {
          firstname: document.querySelector("#firstName").value,
          lastname: document.querySelector("#lastName").value,
          email: document.querySelector("#email").value,
          subject: document.querySelector("#subject").value,
          message: document.querySelector("#message").value,
        };

        const response = await axios.post(
          "https://contact-form-le-reacteur.herokuapp.com/form",
          data
        );
      } catch (error) {
        console.log("ERROR ==> ", error.message);
        console.log("ERROR RESPONSE ==> ", error.response);
      }
    });
});
