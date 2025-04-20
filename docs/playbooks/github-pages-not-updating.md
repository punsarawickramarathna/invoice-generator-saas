# Incident: GitHub Pages Not Showing Latest Version

## Detection
- User opens the site but doesn’t see recent changes

## Diagnosis
- Confirm if the correct branch (e.g., `main`) is selected under GitHub Pages settings
- Check browser cache or use incognito mode
- Review GitHub Actions/CI logs (if CI/CD is configured)
- Check if a deploy script was skipped

## Response
- Clear browser cache or force refresh
- Re-deploy manually using GitHub Pages settings
- Fix broken deploy script if automation is used

## Prevention
- Add a version number or timestamp to the footer for easy change tracking
- Set up GitHub Actions to automatically deploy on push to `main`
- Add a README note explaining how to deploy manually if needed
