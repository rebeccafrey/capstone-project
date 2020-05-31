import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import AddTopicsPage from './pages/AddTopicsPage'
import Homepage from './pages/Homepage'
import TestResultsPage from './pages/TestResultsPage'
import TestStatementsPage from './pages/TestStatementsPage'
import TopicsAllPage from './pages/TopicsAllPage'
import TopicsBookmarkedPage from './pages/TopicsBookmarkedPage'
import AnchorToTop from './ui/AnchorToTop'
import Header from './ui/Header/Header'
import Navbar from './ui/Navbar/Navbar'

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/questionnaire" component={TestStatementsPage} />
        <Route path="/questionnaire-result" component={TestResultsPage} />
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
