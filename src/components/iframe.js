
import { setAttr } from "../util.js";
// iframe
export function iframeEl() {
  const iframe = document.createElement("iframe");
  const iframeAttr = {
    id: "my-iframe",
    // src: './test/modal.html',
    src: "https://benevolent-tartufo-457c6c.netlify.app/",
    class: "frame_center fadein",
    frameborder: "0",
    scrolling: "no",
  };
  setAttr(iframe, iframeAttr);
  return iframe;
}