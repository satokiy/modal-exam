// parent
const app = document.getElementById("app");
// overlay
const div = document.createElement("div");
app.appendChild(div);

const iframe = document.createElement("iframe");
const iframeAttr = {
  id: "my-iframe",
  src: "modal.html",
  class: "frame_center",
  height: "800px",
  width: "600px",
  frameborder: "0",
  scrolling: "no",
};
setAttr(iframe, iframeAttr);

// button
const openButton = document.createElement("button");
const openButtonAttr = {
  id: "modalOpen",
  class: "button",
};
openButton.innerText = "Open Modal";
setAttr(openButton, openButtonAttr);
app.appendChild(openButton);

// open modal
openButton.addEventListener("click", function () {
  div.classList.add("overlay");
  div.appendChild(iframe);
});

// close event
window.addEventListener("message", (e) => {
  const message = JSON.parse(e.data).message;
  console.log(message);

  if (message === "CANCEL_MODAL") {
    div.removeChild(iframe);
    div.classList.remove("overlay");
  }
});

// html要素に一括で属性を付与する
function setAttr(elm, obj) {
  for (const i of Object.entries(obj)) {
    elm.setAttribute(i[0], i[1]);
  }
}
