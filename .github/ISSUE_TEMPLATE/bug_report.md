# Bug Report - PDF Invoice Not Showing Client Name

## Summary
The generated PDF invoice only displays the header and address, but omits client details and service information.

## Steps to Reproduce
1. Go to the deployed invoice generator page
2. Fill out the invoice form with all fields
3. Click "Generate Invoice"
4. Click "Download Invoice"
5. Open the downloaded PDF

## Expected Behavior
The PDF should contain the full invoice:
- Client Name
- Service Description
- Hours and Rate
- Total Amount

## Actual Behavior
Only the header "Lotus Lagoon Freelance Services" and address are visible. All dynamic content is missing.

## Environment
- OS: Ubuntu 22.04
- Browser: Chrome 123.0
- Deployment: GitHub Pages (main branch)

## Additional Notes
The issue seems to be caused by `html2pdf()` being called before the invoice is actually visible/rendered in the DOM.

## Suggested Fix
Delay the PDF generation using `setTimeout()` or ensure `invoiceResult.classList.remove('hidden')` completes before passing to `html2pdf()`.
