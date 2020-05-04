import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import HeaderStyled from './components/Header'
import Statements from './pages/statements'
import Result from './pages/result'

function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderStyled />
      <Switch>
        <Route path="/statements">
          <Statements />
        </Route>
      </Switch>
      <Switch>
        <Route path="/result">
          <Result />
        </Route>
      </Switch>
    </>
  )
}

export default App
