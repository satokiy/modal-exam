/**
 * サイト側の実装を用意する
 * 必要なのはボタンとコールバック
 */
import { openButtonEl } from "./src/components/openButton.js";
import { start } from "./src/exApp.js";


const openButton = openButtonEl()
app.appendChild(openButton);


// open modal
openButton.addEventListener("click", function () {
  start();
});


// close event
// TODO: 実装をexAppに剥がす
window.addEventListener("message", (e) => {
  const data = JSON.parse(e.data);
  const message = data.message;

  if (message === "CANCEL_MODAL") {
    fadeOutModal();
    setTimeout(() => {
      window.location.href = 'thanks.html';
    }, 400) 
  }
  
  if (message === "GO_OTHER") {
    div.removeChild(iframe);
    div.classList.remove("overlay");
    window.location.href = data.url;
  }
});

