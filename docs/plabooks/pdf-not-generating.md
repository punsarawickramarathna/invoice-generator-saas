# Incident: PDF Not Generating

## Detection
- User reports the download button is not working or PDF is empty

## Diagnosis
- Check browser console for JavaScript errors
- Ensure `html2pdf.bundle.min.js` is correctly linked in the HTML
- Validate that the DOM element passed to `html2pdf()` contains all required invoice data

## Response
- Re-link the correct CDN version of `html2pdf`
- Ensure data is inserted into the DOM before triggering PDF
- Wrap invoice content in a single container with proper class/id

## Prevention
- Add a visual check before allowing download
- Use `try...catch` to catch and log PDF generation issues
- Optionally, add automated browser test with tools like Puppeteer or Playwright
