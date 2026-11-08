<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/15kRaUGoJNA-brH8wteE6-qXCCz7T5T3T

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run locally:
   `npm run dev`
3. Build for production:
   `npm run build`

## Deploy to GitHub Pages

### Option 1: Automated via GitHub Actions (Recommended)
1. Push this repository to GitHub.
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build the project and publish the `dist/` directory with proper MIME types.

### Option 2: Deploy using gh-pages branch
Run:
```bash
npm run deploy
```
Then under **Settings** > **Pages**, select **Deploy from a branch** > branch: `gh-pages` / `(root)`.
