// parent
const app = document.getElementById("app");
// overlay
const div = document.createElement("div");
app.appendChild(div);

const iframe = document.createElement("iframe");
const src =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.3326425623934!2d139.70214685694324!3d35.67022196781234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQwJzEyLjgiTiAxMznCsDQyJzA5LjciRQ!5e0!3m2!1sja!2sjp!4v1571820504380!5m2!1sja!2sjp";
const iframeAttr = {
  id: "my-iframe",
  // src: 'modal.html',
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.3326425623934!2d139.70214685694324!3d35.67022196781234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQwJzEyLjgiTiAxMznCsDQyJzA5LjciRQ!5e0!3m2!1sja!2sjp!4v1571820504380!5m2!1sja!2sjp",
  class: "frame_center",
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
  const data = JSON.parse(e.data);
  const message = data.message;

  if (message === "CANCEL_MODAL") {
   div.removeChild(iframe);
   div.classList.remove("overlay"); 
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
