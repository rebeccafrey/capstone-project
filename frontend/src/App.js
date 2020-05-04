import React from 'react'
import GlobalStyles from './GlobalStyles'
import HeaderStyled from './components/Header'
import Statements from './pages/statements'
import Result from './pages/result'

function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderStyled />
      <Statements />
      <Result />
    </>
  )
}

export default App
