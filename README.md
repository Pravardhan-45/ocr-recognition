# 🖼️ Image to Text OCR

This is a simple and lightweight **web-based OCR (Optical Character Recognition)** tool that extracts text from uploaded images. Built with HTML, JavaScript, and [Tesseract.js](https://github.com/naptha/tesseract.js).

🔗 [Test here](https://pravardhan-45.github.io/ocr-recognition/)

## ✨ Features

- Upload image files (`.jpg` or `.png`)
- Extracts printed English text from images
- Simple UI with a single-click convert button
- Displays result clearly on the same page
- Uses **Tesseract.js** for client-side OCR

---

## ⚙️ How It Works

1. Click **Choose File** to upload an image.
2. Click the **Convert to Text** button.
3. The tool processes the image using Tesseract.js.
4. Extracted text appears below the button.

> ⚠️ Make sure your image has clear and readable text for better accuracy.

---

## 🧠 How It Works Internally

```js
function startTextExtraction() {
    const fileInput = document.getElementById('imageInput');
    const resultBox = document.getElementById('output');

    if (!isFileSelected(fileInput)) {
        alert('Please select an image.');
        return;
    }

    const selectedImage = fileInput.files[0];
    displayLoadingMessage(resultBox);
    performOCR(selectedImage, resultBox);
}
