import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AboutPage from './pages/AboutPage'
import AddTopicsPage from './pages/AddTopicsPage'
import Homepage from './pages/Homepage'
import TestResultsPage from './pages/TestResultsPage'
import TestStatementsPage from './pages/TestStatementsPage'
import TopicsAllPage from './pages/TopicsAllPage'
import AnchorToTop from './ui/AnchorToTop'
import TopicsBookmarkedPage from './pages/TopicsBookmarkedPage'

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/test-statements">
          <TestStatementsPage />
        </Route>
        <Route path="/test-result">
          <TestResultsPage />
        </Route>
        <Route path="/add-topics">
          <AddTopicsPage />
        </Route>
        <Route path="/topics-all">
          <TopicsAllPage />
        </Route>
        <Route path="/topics-for-discussion">
          <TopicsBookmarkedPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
      <AnchorToTop />
      <Navbar />
    </>
  )
}
