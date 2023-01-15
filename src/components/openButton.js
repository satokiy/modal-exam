import { setAttr } from "../util.js";

export function openButtonEl() {
  const openButton = document.createElement("button");
  const openButtonAttr = {
    id: "modalOpen",
    class: "button",
  };
  openButton.innerText = "Open Modal";
  setAttr(openButton, openButtonAttr);
  return openButton;
}
