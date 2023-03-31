// Load the PDF file using the FileReader API
const reader = new FileReader();
reader.readAsArrayBuffer(pdfFile);

// Wait for the PDF file to load
reader.onload = () => {
  // Load the PDF into the pdf.js viewer
  const pdfData = new Uint8Array(reader.result);
  const loadingTask = pdfjsLib.getDocument(pdfData);

  loadingTask.promise.then((pdf) => {
    // Get the first page of the PDF
    pdf.getPage(1).then((page) => {
      // Extract the text content from the page
      const textContent = page.getTextContent();

      // Format the text content as an array of strings
      const textArray = textContent.items.map((item) => item.str);

      // Do something with the extracted text
      console.log(textArray);
    });
  });
};
