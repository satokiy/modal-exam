/**
 * サイト側に提供するjavascript
 * 名前空間をいい感じに使いたい
 */
import { iframeEl } from "./components/iframe.js";
import { closeButtonEl } from "./components/closeButton.js";

// HTML element
const app = document.getElementById("app");
const div = document.createElement("div");
const iframe = iframeEl();
const closeButton = closeButtonEl();

/**
 * ボタンクリック時のfunction
 * クリック時にiframeを付ける方式では表示が遅いので、要改善
 */
export function start() {
  app.appendChild(div);
  div.classList.add("overlay");
  div.appendChild(closeButton);
  div.appendChild(iframe);
  iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
}

/**
 * config
 */
export function config(obj) {
  window.addEventListener("message", (e) => {
    const data = JSON.parse(e.data);
    const message = data.message;

    if (message === "CANCEL_MODAL") {
      fadeOutModal();
      setTimeout(() => {
        // サイト側で定義した処理を実行
        obj.cancel();
      }, 400);
    }
    if (message === "GO_OTHER") {
      div.removeChild(iframe);
      div.classList.remove("overlay");
      // サイト側で定義した処理を実行
      obj.goOther(data.url);
    }
  });
}

// close時の挙動
closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  fadeOutModal();
});

function fadeOutModal() {
  iframe.classList.add("fadeout");
  closeButton.classList.add("fadeout");
  div.classList.add("fadeout");
  setTimeout(() => {
    div.removeChild(iframe);
    div.removeChild(closeButton);
    div.classList.remove("overlay");
    iframe.classList.remove("fadeout");
    closeButton.classList.remove("fadeout");
    div.classList.remove("fadeout");
  }, 500);
}
