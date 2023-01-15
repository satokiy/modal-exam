/**
 * サイト側の実装を用意する
 * 必要なのはボタンとコールバック
 */
import { openButtonEl } from "./src/components/openButton.js";
import { start, config } from "./src/exApp.js";

const openButton = openButtonEl();
app.appendChild(openButton);

// open modal
openButton.addEventListener("click", function () {
  start();
});

config({
  cancel: () => {
    console.log("cancel!!!");
    window.location.href = "thanks.html";
  },
  goOther: (url) => {
    console.log("go other!!!");
    if (url) {
      console.log(url);
      window.location.href = url;
    }
  },
});
