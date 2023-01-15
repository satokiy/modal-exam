// parent
const app = document.getElementById("app");
// overlay
const div = document.createElement("div");
app.appendChild(div);

const iframe = document.createElement("iframe");
const iframeAttr = {
  id: "my-iframe",
  // src: 'modal.html',
  src: "https://benevolent-tartufo-457c6c.netlify.app/",
  class: "frame_center fadein",
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

// close button
const closeButton = document.createElement("div");
closeButton.className = "button-close";
closeButton.innerHTML = `
<button class="modal-close">✕</button>
`;

// open modal
openButton.addEventListener("click", function () {
  div.classList.add("overlay");
  div.appendChild(closeButton);
  div.appendChild(iframe);
  iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
});

// close modal
closeButton.addEventListener("click", () => fadeOutModal());

// close event
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

// html要素に一括で属性を付与する
function setAttr(elm, obj) {
  for (const i of Object.entries(obj)) {
    elm.setAttribute(i[0], i[1]);
  }
}

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
