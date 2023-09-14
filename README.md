# My Portfolio

A minimal portfolio.

## Issues/Bugs Dealt With

**Issue** 'failed to load config from /Users/*****/******/portfolio-mnml/vite.config.js'

**Solution** Downgraded to the LTS version of NodeJS

**Issue** Error: ENOENT: no such file or directory, stat

**Solution** In package.json, changed "deploy": "gh-pages -d deploy" to "deploy": "gh-pages -d dist"



## Dependencies

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
