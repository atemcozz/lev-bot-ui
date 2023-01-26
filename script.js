const peer_id = document.querySelector("#peerid");
const message = document.querySelector("#message");
const button = document.querySelector("#send");

button.addEventListener("click", () => {
message.value = "";

  fetch("https://lev-bot.adaptable.app/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message.value,
      peer_id: peer_id.value,
    }),
  });
});
