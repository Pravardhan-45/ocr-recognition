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

function isFileSelected(inputElement) {
    return inputElement.files.length > 0;
}

function displayLoadingMessage(targetElement) {
    targetElement.innerHTML = "Processing... Please wait...";
}

function performOCR(imageFile, displayElement) {
    Tesseract.recognize(
        imageFile,
        'eng',
        { logger: msg => console.log(msg) }
    ).then(({ data: { text } }) => {
        showExtractedText(displayElement, text);
    }).catch(error => {
        displayElement.innerHTML = "Error: " + error;
    });
}

function showExtractedText(targetElement, extractedText) {
    targetElement.innerHTML = `<h3>Extracted Text:</h3><pre>${extractedText}</pre>`;
}
