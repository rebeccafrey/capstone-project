import React from 'react'
import styled from 'styled-components/macro'
import { countTotalCheckedBoxes } from '../pages/statements'
import Divider from '../ui/Divider'

export default function Result() {
  return (
    <>
      <MainStyled>
        <p>
          Hier findest du dein Ergebnis. Je mehr Aussagen du zugestimmt hast,
          desto höher ist die Wahrscheinlichkeit, dass du introvertiert bist.
          Wenn du dich eher nicht dort wiedergefunden hast, bist du
          wahrscheinlich extravertierter.
        </p>
        <Divider />
        <ScaleStyled />
        <TopScalePoint>20 - eher introvertiert</TopScalePoint>
        <ResultBubble>{countTotalCheckedBoxes()}</ResultBubble>
        <BottomScalePoint>0 - eher extravertiert</BottomScalePoint>
      </MainStyled>
    </>
  )
}

const MainStyled = styled.main`
  height: 100vh;
`
const ScaleStyled = styled.div`
  width: 24px;
  height: 300px;
  border-radius: 8px;
  background: var(--secondary-40);
  margin-left: 32px;
`
const TopScalePoint = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: var(--secondary-40);
  position: relative;
  left: 60px;
  bottom: 300px;
  width: 220px;
`
const BottomScalePoint = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: var(--secondary-40);
  position: relative;
  left: 60px;
  bottom: 220px;
  width: 220px;
`
const ResultBubble = styled.div`
  width: 156px;
  height: 156px;
  border-radius: 50%;
  background: var(--secondary);
  color: var(--primary-light-8);
  font-size: 36px;
  font-weight: 700;
  line-height: 156px;
  text-align: center;
  position: relative;
  left: 100px;
  bottom: 260px;
`
