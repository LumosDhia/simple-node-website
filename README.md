# Simple Node Website with Security-Hardened GitHub CI/CD

A modern, responsive Node.js web application configured with a complete Security & Delivery GitHub Actions Pipeline.

---

## Security & CI/CD Pipeline Architecture

The pipeline in [.github/workflows/ci-cd.yml](.github/workflows/ci-cd.yml) implements all security and quality checks:

1. **Trigger**: Runs automatically on `push` and `pull_request` to `main`, plus manual `workflow_dispatch`.
2. **Secret Scanning (Gitleaks)**: Scans commits with `gitleaks/gitleaks-action@v2` to catch committed secrets and credentials.
3. **SCA (Software Composition Analysis)**: Runs `npm audit` for vulnerable dependency detection.
4. **SAST (CodeQL)**: GitHub's native `github/codeql-action` static security analysis for JavaScript/TypeScript.
5. **Quality Gate (Lint & Test)**: Enforces code linting (`npm run lint`) and automated unit tests (`npm test`).
6. **Build & Upload**: Compiles assets with `npm run build` into `dist/` and packages them via `actions/upload-pages-artifact@v3`.
7. **Deploy**: Publishes the build artifact to GitHub Pages behind the `github-pages` environment.

### Always-on Automation
* **Dependabot** ([.github/dependabot.yml](.github/dependabot.yml)): Always-on weekly automated dependency updates for `npm` packages and `github-actions`.

---

## Local Commands

```bash
npm install     # Install dependencies
npm run lint    # Run code quality linting
npm test        # Run unit test suite
npm run build   # Build distribution output in dist/
npm start       # Start Express web server
```
