
// Global Error Logging
window.onerror = function(message, source, lineno, colno, error) {
  console.error("Global Error Caught:", message, "at", source + ":" + lineno);
  alert("⚠️ Something went wrong. Please check your input or try again.");
};

document.getElementById("invoiceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Start Performance Monitoring
  console.time("InvoiceGeneration");

  // Collect form data
  const clientName = document.getElementById("clientName").value;
  const description = document.getElementById("description").value;
  const hours = parseFloat(document.getElementById("hours").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const total = (hours * rate).toFixed(2);
  const date = new Date().toLocaleDateString();

  // Fill in the invoice
  document.getElementById("displayClient").textContent = clientName;
  document.getElementById("displayDesc").textContent = description;
  document.getElementById("displayHours").textContent = hours;
  document.getElementById("displayRate").textContent = rate;
  document.getElementById("displayTotal").textContent = total;
  document.getElementById("invoiceDate").textContent = date;

  // Show invoice and download button
  document.getElementById("invoiceResult").classList.remove("hidden");
  document.getElementById("downloadBtn").classList.remove("hidden");

  // End Performance Monitoring
  console.timeEnd("InvoiceGeneration"); // Logs time like: InvoiceGeneration: 12.75ms
});

// Download PDF Functionality
document.getElementById("downloadBtn").addEventListener("click", function () {
  const element = document.getElementById("invoiceResult");
  const opt = {
    margin: 1,
    filename: 'invoice.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
});

document.getElementById("invoiceForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const clientName = document.getElementById("clientName").value;
    const description = document.getElementById("description").value;
    const hours = parseFloat(document.getElementById("hours").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const total = (hours * rate).toFixed(2);
    const date = new Date().toLocaleDateString();
  
    // Fill in the invoice
    document.getElementById("displayClient").textContent = clientName;
    document.getElementById("displayDesc").textContent = description;
    document.getElementById("displayHours").textContent = hours;
    document.getElementById("displayRate").textContent = rate;
    document.getElementById("displayTotal").textContent = total;
    document.getElementById("invoiceDate").textContent = date;
  
    // Show invoice & download button
    document.getElementById("invoiceResult").classList.remove("hidden");
    document.getElementById("downloadBtn").classList.remove("hidden");
  });
  
  document.getElementById("downloadBtn").addEventListener("click", function () {
    const element = document.getElementById("invoiceResult");
    const opt = {
      margin: 1,
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    html2pdf().set(opt).from(element).save();
  });
  

