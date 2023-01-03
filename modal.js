// const closeButton = document.getElementsByClassName("modal-close")[0];
const otherButton = document.getElementsByClassName('go-other')[0];

// closeButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   // 親windowがいるときのみ発火
//   if (window.parent !== window) {
//     const message = JSON.stringify({
//       message: "CANCEL_MODAL",
//     });
//     window.parent.postMessage(message, "*");
//   } else {
//     console.log("no parent. closing.");
//   }
// })

otherButton.addEventListener("click", (e) => {
  e.preventDefault();
  // 親windowがいるときのみ発火
  if (window.parent !== window) {
    const message = JSON.stringify({
      message: "GO_OTHER",
      url: "https://www.netprotections.com/",
    });
    window.parent.postMessage(message, "*");
  } else {
    console.log("no parent. closing.");
  }
});
