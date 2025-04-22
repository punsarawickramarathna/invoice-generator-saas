# invoice-generator-saas

This project is a **Micro SaaS** web-based Invoice Generator designed for freelancers and small businesses. Built using **HTML, CSS, JavaScript**, and configured with modern **DevOps practices** like **Conventional Commits**, **GitHub workflow automation**, and **CI/CD readiness**.

---

## Features

- Generate beautiful invoices in the browser
- Download invoice as PDF
- Light-weight and responsive one-page design
- CI/CD-ready GitHub repository structure
- Uses Conventional Commits for version control
- Designed with DevOps automation in mind

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **DevOps Tools**: Git, GitHub, Commitizen
- **Terminal**: Ubuntu Terminal
- **Versioning**: Conventional Commits
- **Documentation**: Markdown + OpenAPI (optional)

---
## How to Set Up

### 1. Clone this repository

```bash
git clone https://github.com/yourusername/invoice-generator.git
cd invoice-generator
# Open index.html in your browser

No build tools or dependencies are required.

 Usage
Fill in the invoice form (Client Name, Description, Hours Worked, Hourly Rate).

Click Generate Invoice to display it.

Click Download Invoice to save it as a PDF.

 Architecture
This project is frontend-only and follows a simple structure:

bash
Copy
Edit
  invoice-generator/
├── index.html          # Main UI
├── style.css           # Styling
├── script.js           # Business logic
├── /docs/              # Divio-based documentation
│   ├── tutorials/
│   ├── how-to-guides/
│   ├── reference/
│   └── explanation/
├── openapi.yaml        # Mock OpenAPI 3.0 Spec
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_report.md
│   └── PULL_REQUEST_TEMPLATE.md
├── ADRs/               # Architecture Decision Records
│   ├── ADR-001-github-pages.md
│   ├── ADR-002-html2pdf.md
│   └── ADR-003-blue-green-deploy.md
└── README.md
  Deployment
This app is deployed using GitHub Pages.

Production:
 Branch: main
 URL: https://punsarawikramarathna.github.io/invoice-generator-saas

Staging (Blue-Green):
 Branch: staging (used for testing changes before merging to production)

Documentation
Divio Framework Documentation included in /docs

OpenAPI 3.0 YAML Spec for future backend

Incident Playbooks and ADR records for maintainability

Contributing
Feel free to fork, open issues, or submit pull requests!

Commit Conventions
Follow Conventional Commits:

feat: A new feature

fix: A bug fix

docs: Documentation only changes

refactor: Code changes that neither fix a bug nor add a feature

 License
MIT License © 2025 Punsara Wickramarathna
