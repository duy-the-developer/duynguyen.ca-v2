<pre style='background: transparent'>
██████╗ ██╗   ██╗██╗   ██╗    ███╗   ██╗ ██████╗ ██╗   ██╗██╗   ██╗███████╗███╗   ██╗
██╔══██╗██║   ██║╚██╗ ██╔╝    ████╗  ██║██╔════╝ ██║   ██║╚██╗ ██╔╝██╔════╝████╗  ██║
██║  ██║██║   ██║ ╚████╔╝     ██╔██╗ ██║██║  ███╗██║   ██║ ╚████╔╝ █████╗  ██╔██╗ ██║
██║  ██║██║   ██║  ╚██╔╝      ██║╚██╗██║██║   ██║██║   ██║  ╚██╔╝  ██╔══╝  ██║╚██╗██║
██████╔╝╚██████╔╝   ██║       ██║ ╚████║╚██████╔╝╚██████╔╝   ██║   ███████╗██║ ╚████║
╚═════╝  ╚═════╝    ╚═╝       ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝
*************************************************************************************
</pre>

# DUYNGUYEN.CA INTERACTIVE PORTFOLIO TERMINAL V2.0

v1 currently hosted on https://duynguyen-ca-v1.vercel.app/

###

---

###

[duynguyen.ca](https://www.duynguyen.ca/) is an interactive portfolio and blog built with `NextJS`, `TypeScript`, `Tailwind CSS` and `react-markdown`. The project started as a way for the author to learn and practice working with new web technologies and act as a hub to showcase his work. NextJS and TypeScript were selected because of their production ready viability, TailWind was selected for its utility-first nature, allowing for quick adjustments and rapid development. Finally, react-markdown is used to parse and display markdown files directly from within the repo's directory, acting as a developer friendly CMS. To deploy a new article, we simply create a new `.md` file in the `_data` folder and push to the `main` branch. Deployment and CI/ CD is handled by Vercel.

## Feature Overview/ Roadmap

- [x] Desktop-like interface
- [x] Draggable windows and desktop icons with `react-draggable`
- [x] Resizable windows
- [x] Clock and date display in the taskbar
- [x] Markdown display with `MDX` and `react-markdown`
- [x] Directory browsing using `Next.js API routes` and `fs`
- [] Taskbar with start menu
- [] Minimize windows to the taskbar
- [] Customizable settings (theme, desktop background, etc.)
- [] Calculator app
- [] Tic tac toe game
- [] Chess game
- [] Chromium browser
- [] Terminal with xTerm
- [] Boot sequence on start-up

## Directories

<pre style='background: transparent'>
.
├── _README.md
├── about.md
├── blog-posts
│   ├── hello-world.md
│   └── lorem-ipsum.md
└── projects
    └── duynguyen-ca.md

Total: 2 directories, 5 files 
</pre>

## Clone

```
// HTTPS
https://github.com/kefranabg/readme-md-generator.git

// SSH
git@github.com:kefranabg/readme-md-generator.git

// GitHub CLI
gh repo clone duy-the-developer/duynguyen.ca
```

## Installation

```
npm install
```

## Usage

```
npm run dev
```

## License

This project is MIT licensed.

###

---

###

Built with lots of coffee.
