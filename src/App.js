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
        <Route exact path="/" component={Homepage} />
        <Route path="/test-statements" component={TestStatementsPage} />
        <Route path="/test-result" component={TestResultsPage} />
        <Route path="/add-topics" component={AddTopicsPage} />
        <Route path="/topics-all" component={TopicsAllPage} />
        <Route path="/topics-for-discussion" component={TopicsBookmarkedPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
      <AnchorToTop />
      <Navbar />
    </>
  )
}
