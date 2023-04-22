<a name="top"></a>

# Big D'oh: Homer Reads 'Cracking the Coding Interview'

[![GitHub issues](https://img.shields.io/github/issues/bg-write/big-doh?style=flat-square)](https://github.com/bg-write/big-doh/issues)
[![twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fbig-doh.herokuapp.com%2F)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fbig-doh.herokuapp.com%2F)

![Big D'oh landing page](https://i.imgur.com/IsMuOEV.png)

## Table of Contents

I. [Big D'oh in Three Sentences](#intro)
II. [The Problem](#problem)
III. [The Goal](#goal)
IV: [Concepts Covered](#concepts)
V: [Getting Started](#starting)
VI: [Architecture](#architecture)
VII: [Style Guide](#styling)
VIII: [Tech Stack & Tools](#tech)
IX: [Next Steps](#icebox)
X: [The Team](#team)
XI: [Closing credits](#credits)

---

## Big D'oh in Three Sentences <a name="intro"></a>

Did you do a coding Bootcamp and read 'Cracking the Coding Interview' but still struggle with Big O? Welcome! This free study aid built in React and TypeScript is for anyone preparing for technical interviews to better understand Big O and common algorithms and data structures.

## The Problem <a name="problem"></a>

Big O and basic algorithms and data structures are important to learn as software engineers, but they're not easy concepts to learn for new developers, especially for those without computer science degrees.

## The Goal <a name="goal"></a>

To reinforce high-level knowledge of key algorithms and data structures from Gayle Laakmann McDowell's 6th Edition of 'Cracking the Coding Interview,' but in a way even Homer Simpson could understand.

This app is not meant to be a definitive or all-encompassing resource, but rather a beginner's guide to navigating key concepts in software engineering and computer science. YouTube links are included to deepen understanding and encourage ongoing learning. And if you're stressed, you can always play Homer in a game of Tic-Tac-D'oh.

Big D'oh is a mobile-first designed React app made by Brady Gerber and Molly Hodson.

---

## Concepts Covered <a name="concepts"></a>

- Big O
- Recursion
- Algorithms
  - Bubble Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - Bucket Sort
  - Radix Sort
  - Brute Force Search
  - Binary Search
- Data Structures
  - Arrays
  - Sets
  - Linked Lists
  - Hash Tables
  - Stacks
  - Queues
  - Trees
  - Binary Trees
  - Breadth First Search (BFS)
  - Depth First Search (DFS)
  - Tries
  - Graphs

---

## Getting Started <a name="starting"></a>

The deployed app: <https://big-doh.netlify.app/>

To launch Big D'oh locally:

1. In your IDE of choice, open a new terminal.
2. Enter and run the command `npm start`.
3. Open the development server URL provided in the terminal output (if it doesn't already open).
4. Enjoy!

---

## Architecture <a name="architecture"></a>

Here's the breakdown of the `src` folder:

- `components`

  - `Algorithms`
  - `BigO`
  - `DataStructures`
  - `TTT`
  - `Footer.tsx`
  - `Home.tsx`
  - `Navbar.js`

- `App.css`: holds the majority of our CSS
- `App.js`: our `components` are wrapped around `<Router/>` and `<Suspense/>`
- `index.css`: CSS for `<body/>` and `<code/>`
- `index.js`: `<App/>` is wrapped around `BrowserRouter`

> Note that `public` includes our `index.html`

---

## Style Guide <a name="styling"></a>

### UX/UI Design

Big D'oh was designed by [Molly Hodson](https://mollyhodson.design/) to be a fully responsive web app that's fun and accessible while still being useful. Check out Molly's case study detailing how she approached our project, including Figma boards and wireframes: <https://mollyhodson.design/home/big-doh>

### CSS

`App.css` holds our CSS variables, the majority of our styling code, and our media queries. "Helvetica Neue Regular" is the font used for this app. Color variables are defined as:

```css
  --white: #ffffff;
  --black: #111111;
  --blue-jeans: #40a0ff;
  --homer: #ffd90d;
  --donut: #ff4fa2;
  --lard-lad: #e86b17;
```

### The code Itself

Big D'oh will soon be updated to follow [Airbnb's JS style guide](https://airbnb.io/javascript/). This involves following [Nethmi Wijesinghe's excellent set-up guide](https://enlear.academy/how-to-set-up-airbnb-style-guide-82413ea6c5f2) for installing ESLint and Prettier in VS Code to match Airbnb's guide in a new project. Nethmi's guide also works if you wish to use another popular style guide (i.e. Google).

---

## Tech Stack & Tools <a name="tech"></a>

- React.js
- TypeScript
- Figma
- JavaScript
- HTML
- CSS
- GitHub
- Git
- Visual Studio Code
- Google Chrome DevTools
- Netlify
- Shields.io
- Google
- Bootstrap
- React Bootstrap
- Coffee
- Naps

---

## Next Steps <a name="icebox"></a>

- Convert more JS logic into TS (current TS use is minimal).
- Incorporate code style guide and enforce consistency from IDE to GitHub.
- Address new note that the CSS on TTT mobile is not as responsive on some iPhones.

---

## The Team <a name="team"></a>

[Brady Gerber](https://github.com/bg-write) (Software Engineer)

[Molly Hodson](https://mollyhodson.design/) (UX Designer)

## Closing Credits <a name="credits"></a>

All photos and gifs are taken from General Assembly except when linked to their original sources. The marquee was made with the help of [Coding Journey](https://www.youtube.com/watch?v=sVZX0XvEBhk). Flashcard templates were made with the help of [Alex Carpenter](https://www.youtube.com/watch?v=OmmM_a_AMNE).

© 2023 Brady Gerber. All Rights Reserved.

[Return to top](#top)
