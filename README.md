
#  Travel Journal *1st try


Section 2 solo project for React in the Scrimba/FreeCodeCamp React tutorial - https://www.youtube.com/watch?v=bMknfKXIFA8 - first push completed on 10 Nov 2022 with 1 data - further improvements upcoming soon..

## Table of contents

- [Overview](#overview)
  - [Requirements](#requirements)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Getting Started with Vite](#getting-started-with-create-react-app)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

### Requirements

- Data array in a separate .js file
  - Title, description, price, cover image, rating, review count, location, open spots
- Use .map() and props
- Style & polished
- Mobile designed

## Screenshots

![App Screenshot](https://github.com/beauhelmi/travel-journey-2022/blob/main/public/2ndpush.png?raw=true)

### Links

- Live Site URL: [@Github](https://beauhelmi.github.io/travel-journey-2022/)
- Solution URL: [@GitHub](https://github.com/beauhelmi/travel-journey-2022)

### Getting Started with Vite

This project created with [ViteJS](https://github.com/vitejs/vite/tree/main/packages/create-vite).

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- React.JS

### What I learned

- Learned about props and mapping, and trying to figure out how to deploy site :

- Deploying site 
- Create 
```
.github/workflows/deploy.yml
```
- Inside deploy.yml
```
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 16

      - name: Install dependencies
        uses: bahmutov/npm-install@v1

      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v2
        with:
          name: production-files
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v2
        with:
          name: production-files
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

- Updating vite.config.js
```
 base: '/travel-journey-2022/',
```
- Due changes, solving the Img not displaying issues


## Author

- Website - [beau helmi](https://github.com/beauhelmi)

## Acknowledgements

 - [Jethrosweb](https://github.com/topics/travel-journal)
 - [Scrimba Projects](https://www.figma.com/file/QG4cOExkdbIbhSfWJhs2gs/Travel-Journal?node-id=0%3A1)
 - [Figma Design](https://scrimba.com/learn/learnreact/react-section-2-solo-project-co74f46f2b22693c5ea577559)
 - [xdelmo](https://github.com/xdelmo/travel-journal)


