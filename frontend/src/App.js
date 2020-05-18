import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import GlobalStyles from './GlobalStyles'
import About from './pages/about'
import EntriesList from './pages/entries'
import Homepage from './pages/homepage'
import Result from './pages/result'
import Statements from './pages/statements'
import Topics from './pages/topics'
import AnchorToTop from './ui/AnchorToTop'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/statements">
          <Statements />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/entries">
          <EntriesList />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <AnchorToTop />
      <Navbar />
    </>
  )
}
