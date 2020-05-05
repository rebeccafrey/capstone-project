import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import HeaderStyled from './components/Header'
import Statements from './pages/statements'
import Result from './pages/result'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderStyled />
      <Switch>
        <Route path="/statements">
          <Statements />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
      </Switch>
    </>
  )
}
