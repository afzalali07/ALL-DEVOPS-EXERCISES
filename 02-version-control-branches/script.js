const message = document.querySelector("#message");
const button = document.querySelector("#change-message");

button.addEventListener("click", () => {
  message.textContent = "A change made on a Git branch!";
});
