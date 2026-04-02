# Deploy this site to GitHub Pages

This repository contains a static site in the `src/` folder. A GitHub Actions workflow is included to publish the contents of `src/` to GitHub Pages automatically when you push to the `main` branch.

How it works
- On `push` to `main`, the workflow copies `src/` into `public/`, uploads it as a Pages artifact, and deploys via the GitHub Pages actions.

Quick setup
1. Create a repository on GitHub and add this project.
2. Ensure your default branch is `main` (or update `.github/workflows/deploy.yml` to your branch).
3. Push the repository to GitHub:

```bash
git init
git add .
git commit -m "Initial site"
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

4. Open the Actions tab on GitHub and verify the "Deploy to GitHub Pages" workflow runs.

After the workflow completes, your site will be published by GitHub Pages. The URL will be one of:

- `https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/` (project site)
- Or a custom domain if you configure one in the repository Pages settings.

Changing branch or folder
- If you use a different branch than `main`, update the `on.push.branches` value in `.github/workflows/deploy.yml`.
- If your static files live in a different folder, change the `cp -r src/* public/` step accordingly.

Notes
- The workflow creates `public/.nojekyll` to prevent Jekyll from ignoring files starting with underscores.
- GitHub Actions must be enabled for the repository.
