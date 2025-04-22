# Technical Debt Report

## Overview
This document lists known shortcuts and technical compromises made during the MVP development of the Invoice Generator.

---

## 1. Lack of Backend API
- **Reason**: To keep the app purely frontend and simple to deploy via GitHub Pages
- **Consequence**: No way to store or retrieve past invoices
- **Resolution Plan**: Design and build a backend API using Node.js or Firebase in a future version

---

## 2. Synchronous PDF Generation
- **Reason**: Used `html2pdf.js` for simplicity
- **Consequence**: Sometimes generates PDF before DOM is fully ready
- **Resolution Plan**: Use `MutationObserver` or PDF generation after a timeout or user confirmation

---

## 3. No Unit or UI Tests
- **Reason**: Limited scope and time
- **Consequence**: Bugs may go unnoticed
- **Resolution Plan**: Add test framework like Jest and browser automation with Playwright/Cypress

---

## 4. Hardcoded Styles and Structure
- **Reason**: Rapid prototyping
- **Consequence**: Difficult to scale or theme
- **Resolution Plan**: Refactor to component-based structure and apply utility-first CSS or a framework like Tailwind

---

## Summary
These issues are acceptable for MVP but should be tracked and addressed before scaling the product.
