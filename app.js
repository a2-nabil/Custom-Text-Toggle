// custom click event for accordion or text limit
let isTextLimited = {};
let originalText = {};

for (let i = 1; i <= 4; i++) {
  const paragraph = document.querySelector(
    `#myParagraph-${i} p.elementor-heading-title`
  );
  originalText[i] = paragraph.innerText;
  const readMoreLink = document.getElementById(`readMoreLink-${i}`);

  // Initially limit the text on load
  handleTextLimit(paragraph, readMoreLink, i, true);

  readMoreLink.addEventListener("click", () =>
    toggleTextLimit(paragraph, readMoreLink, i)
  );
}

function toggleTextLimit(element, link, index) {
  isTextLimited[index] = !isTextLimited[index];
  handleTextLimit(element, link, index);
}

function handleTextLimit(element, link, index, initial = false) {
  const maxLength = 100;
  if (!isTextLimited[index] || initial) {
    if (element.innerText.length > maxLength) {
      element.innerText = element.innerText.slice(0, maxLength) + "...";
    }
    link.innerText = "Read More";
  } else {
    element.innerText = originalText[index];
    link.innerText = "Read Less";
  }
}
