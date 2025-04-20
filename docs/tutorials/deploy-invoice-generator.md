# Tutorial: Deploy Invoice Generator on GitHub Pages

This tutorial walks you through deploying your Micro SaaS Invoice Generator using GitHub Pages.

## Prerequisites
- GitHub repository with your project
- `index.html`, `style.css`, `script.js`, and `package.json` ready

## Steps

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Go to GitHub → Settings → Pages**
   - Source: `main` branch
   - Folder: `/ (root)`
   - Save settings

3. **Access your site** at:
   ```
   https://<your-username>.github.io/<repo-name>
   ```

✅ Your app is now live!
