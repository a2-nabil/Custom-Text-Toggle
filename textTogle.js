let isTextLimited = false;
let originalText = "";
const paragraph = document.querySelector("#myParagraph .elementor-text-editor");
const toggleButton = document.querySelector("#readMoreBtn a");
const toggleButtonText = document.querySelector(
  "#readMoreBtn .elementor-button-text"
);

// Store original text
originalText = paragraph.innerText;

// Initially limit the text on load
handleTextLimit();

toggleButton.addEventListener("click", () => toggleTextLimit());

function toggleTextLimit() {
  isTextLimited = !isTextLimited;
  handleTextLimit();
}

function handleTextLimit() {
  const maxLength = 300;
  if (!isTextLimited) {
    if (paragraph.innerText.length > maxLength) {
      paragraph.innerText = paragraph.innerText.slice(0, maxLength) + "...";
      toggleButtonText.innerText = "Read More";
    }
  } else {
    paragraph.innerText = originalText;
    toggleButtonText.innerText = "Read Less";
  }
}
