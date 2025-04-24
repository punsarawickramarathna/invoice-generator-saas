document.getElementById("invoiceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const clientName = document.getElementById("clientName").value;
  const description = document.getElementById("description").value;
  const hours = parseFloat(document.getElementById("hours").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const total = (hours * rate).toFixed(2);
  const date = new Date().toLocaleDateString();

  document.getElementById("displayClient").textContent = clientName;
  document.getElementById("displayDesc").textContent = description;
  document.getElementById("displayHours").textContent = hours;
  document.getElementById("displayRate").textContent = rate;
  document.getElementById("displayTotal").textContent = total;
  document.getElementById("invoiceDate").textContent = date;

 
  document.getElementById("invoiceResult").classList.remove("hidden");
  document.getElementById("downloadBtn").classList.remove("hidden");
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  const element = document.getElementById("invoiceResult");

 
  element.classList.remove("hidden");


  setTimeout(() => {
    const opt = {
      margin: 0.5,
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  }, 200); 
});
