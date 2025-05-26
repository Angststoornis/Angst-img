const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const imagePreview = document.getElementById("imagePreview");

fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.src = e.target.result;
      preview.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  } else {
    preview.classList.add("hidden");
    imagePreview.src = "#";
  }
});