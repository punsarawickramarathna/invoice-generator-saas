# Invoice Generator SaaS

A **Micro SaaS** web-based Invoice Generator built for freelancers and small businesses.  
Developed using **HTML, CSS, JavaScript**, and powered by modern **DevOps practices** including Conventional Commits, CI/CD workflows, and GitHub Pages deployment.

---

## Features

- Generate professional invoices directly in the browser  
- Download invoices as **PDF**  
- Clean, responsive **one-page design**  
- DevOps-ready repository with CI/CD structure  
- Follows **Conventional Commits**  
- Structured documentation using the **Divio framework**

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript  
- **DevOps Tools**: Git, GitHub, Commitizen  
- **Terminal**: Ubuntu  
- **Versioning**: Conventional Commits  
- **Documentation**: Markdown + optional OpenAPI 3.0 spec

---

## Project Structure

```
invoice-generator-saas/
├── index.html              
├── style.css               
├── script.js               
├── /docs/                 
│   ├── tutorials/
│   ├── how-to-guides/
│   ├── reference/
│   └── explanation/
├── openapi.yaml            
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_report.md
│   └── PULL_REQUEST_TEMPLATE.md
├── ADRs/                   
│   ├── ADR-001-github-pages.md
│   ├── ADR-002-html2pdf.md
│   └── ADR-003-blue-green-deploy.md
└── README.md              
```

---

## How to Use

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/invoice-generator-saas.git
   cd invoice-generator-saas
   ```

2. **Run the app**:  
   Open `index.html` in your browser.  
   (No build tools or dependencies are required.)

3. **Generate an invoice**:
   - Enter: Client Name, Description, Hours Worked, Hourly Rate  
   - Click **"Generate Invoice"**  
   - Click **"Download Invoice"** to save it as a PDF

---

## Architecture

This is a **frontend-only** Micro SaaS with no backend.

It uses:
- `html2pdf.js` for generating PDF invoices
- GitHub Pages for deployment
- Blue-Green deployment via `main` (production) and `staging` (preview)

---

## Deployment

- **Production**  
  Branch: `main`  
  URL: [https://punsarawikramarathna.github.io/invoice-generator-saas](https://punsarawikramarathna.github.io/invoice-generator-saas)

- **Staging**  
  Branch: `staging` (used for testing before merging to production)

---

## Documentation

- Divio-style docs in `/docs`  
- OpenAPI 3.0 YAML spec in `openapi.yaml` (for future backend)  
- Incident Playbooks in markdown  
- Architectural Decision Records (ADRs) in `/ADRs`

---

## Contributing

Contributions are welcome!  
Please fork the repo and submit a pull request.

- Use [Conventional Commits](https://www.conventionalcommits.org/)  
  Examples:
  - `feat`: A new feature
  - `fix`: A bug fix
  - `docs`: Documentation only changes
  - `refactor`: Code that neither fixes a bug nor adds a feature

---

## License

**MIT License**  
© 2025 Punsara Wickramarathna

---
