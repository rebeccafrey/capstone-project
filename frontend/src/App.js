import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Header from './components/Header'
import Statements from './pages/statements'
import Result from './pages/result'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/statements">
          <Statements />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
      </Switch>
      <Navbar />
    </>
  )
}
