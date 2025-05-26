const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const imagePreview = document.getElementById("imagePreview");
const scoreSpan = document.getElementById("score");
const quoteText = document.getElementById("randomQuote");
const sfx = document.getElementById("sfx");

const quotes = [
  "De angst zit al in je camera...",
  "Wat je ziet, kun je niet meer ont-zien.",
  "Elke pixel vertelt een verhaal.",
  "Is dit echt? Of gewoon je verbeelding?",
  "Soms kijkt iets terug."
];

fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.src = e.target.result;
      preview.classList.remove("hidden");

      // Genereer random 'angstscore' en quote
      const score = Math.floor(Math.random() * 100) + 1;
      scoreSpan.textContent = score;
      quoteText.textContent = quotes[Math.floor(Math.random() * quotes.length)];

      // Speel geluid af
      sfx.currentTime = 0;
      sfx.play();
    };
    reader.readAsDataURL(file);
  } else {
    preview.classList.add("hidden");
    imagePreview.src = "#";
    scoreSpan.textContent = "-";
    quoteText.textContent = "";
  }
});