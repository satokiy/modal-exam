const closeButton = document.getElementsByClassName("modal-close")[0];

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  // 親windowがいるときのみ発火
  if (window.parent !== window) {
    const message = JSON.stringify({
      message: "CANCEL_MODAL",
    });
    window.parent.postMessage(message, "*");
  } else {
    console.log("no parent. closing.");
  }
});
