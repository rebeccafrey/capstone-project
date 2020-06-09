<div align="center">
  <img src="https://user-images.githubusercontent.com/61710830/83106146-44fdc900-a0bc-11ea-92b4-65cea0f52ea1.png" width="375px"/>
  
</div>

# About the app

I developed _Seelenleben_ as my final project for [neuefische](https://www.neuefische.de) web developer bootcamp in May 2020.

We live in a quite extraverted world, however, it is estimated that up to [50% of Germany's population](https://www.apotheken-umschau.de/Psyche/Introvertiertheit-Eine-unterschaetzte-Eigenschaft-224883.html) is more on the introverted side.
_Seelenleben_ was realized in order to cultivate increased exchange between those human beings that are more introverted and those more extraverted, made with [Create React App](https://github.com/facebook/create-react-app) and [Firebase](https://firebase.google.com/) database.
The user can easily find out if s/he is more on the intro- or extraverted side by going through a list of statements. In the interest of boosting understanding and eventually promote further appreciation, the user additionally has the possibility to note down topics and situations s/he would like to discuss, eventually finding out more about how one reacts in those specified circumstances.

---

<div align="center">
  <img src="https://user-images.githubusercontent.com/61710830/83105686-6611ea00-a0bb-11ea-8e4a-7a96377a7f4c.gif"
     height="400px"/>
</div>

#### A live demo is available [here](https://seelenleben.web.app).

---

## Tech stack

- React
- React Router
- React Hooks
- JavaScript
- styled-components
- Storybook
- react-spring
- Lodash
- React Use Gesture
- React Hooks Lib
- prop-types
- React Testing Library
- Cypress
- Firebase
- Local Storage
- Sketch
- Zeplin

Note: This app was developed and optimized for mobile usage (iPhone 6/7/8), so please switch your browser to responsive mode.

---

## Setting up the project

- Clone this repository
- Install all npm dependencies:
  `npm install`
- Run Storybook:
  `npm run storybook`
- Run React Testing Library & Jest:
  `npm test`
- Run Cypress:
  `npm run cypress`
- Create a build ready for deploying:
  `npm run build`
- This app uses Firebase. Because of that you need to install Firebase:
  `npm install -g firebase-tools` and to initialize it to use and deploy the firebase project. Firebase deploys on default the `public` folder, which should be changed to `build` for this project. For deploying, after running `npm run build`, move the `build` folder into the `hosting` folder of this project.
  For more information check out the official Firebase documentation.
- When in the `hosting` folder, deploy the build:
  `firebase deploy`

---

## Special thanks goes to...

Shoutout to [neuefische](https://neuefische.de/) and my impressive classmates for the opportunity, support and amazing team!
