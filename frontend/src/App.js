import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Header from './components/Header/Header'
import Statements from './pages/statements'
import Result from './pages/result'
import Topics from './pages/topics'
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
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
      <Navbar />
    </>
  )
}
