export function renderPlaceholders(targetAmount = 3) {
  const containerEl = document.getElementById("placeholders");
  let createdItems = 0;

  while (targetAmount > createdItems) {
    const placeholderEl = document.createElement("li");
    placeholderEl.classList.add("sheet-line");

    containerEl.appendChild(placeholderEl);

    createdItems++;
  }
}
