
// closeButton
export function closeButtonEl() {
  const closeButton = document.createElement("div");
  closeButton.className = "button-close";
  closeButton.innerHTML = `
<button class="modal-close">✕</button>
`;
  return closeButton;
}