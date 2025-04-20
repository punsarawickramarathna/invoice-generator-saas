# ADR-003: Use of html2pdf.js for PDF generation

## Status
Accepted

## Context
The app must allow users to download invoices as PDFs without a backend.

## Decision
We selected `html2pdf.js` because:
- It's lightweight and easy to use
- Works entirely in the browser
- No server-side rendering needed

## Consequences
- May have limitations on complex layouts
- Works well for small, static documents
