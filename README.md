# My Portfolio

A minimal portfolio.

## Issues/Bugs Dealt With

**Issue** 'failed to load config from /-----/-----/-----/ep-portfolio/vite.config.js'

**Solution** Downgraded to the LTS version of NodeJS

**Issue** Error: ENOENT: no such file or directory, stat '---/----/-----/----'

**Solution** In package.json, changed *"deploy"* in "gh-pages -d deploy" to *"dist"*: "gh-pages -d dist"

**Issue** Github Pages couldn't find images or project from /public/assets folder

**Solution** Remove '/' from beginning of src/href file paths "/assets/img_name.imgtype" -> "assets/...."



## Dependencies

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
