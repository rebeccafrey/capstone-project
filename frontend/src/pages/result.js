import PropTypes from 'prop-types'
//import React, { useState } from 'react'
import React from 'react'
import styled from 'styled-components/macro'

export default function Result() {
  return (
    <>
      <main>
        <TextStyled>
          Hier findest du dein Ergebnis. Je mehr Aussagen du zugestimmt hast,
          desto höher ist die Wahrscheinlichkeit, dass du introvertiert bist.
          Wenn du dich eher nicht dort wiedergefunden hast, bist du
          wahrscheinlich eher extrovertiert.
        </TextStyled>
        <RectangleStyled />
        <ScaleStyled />
        <TopScalePoint>20 - eher introvertiert</TopScalePoint>
        <ResultBubble>18</ResultBubble>
        <BottomScalePoint>0 - eher extravertiert</BottomScalePoint>
      </main>
    </>
  )
}

Result.propTypes = {
  result: PropTypes.number,
}

const TextStyled = styled.p`
  margin-bottom: 24px;
`
const RectangleStyled = styled.div`
  width: 75%;
  height: 1px;
  background-color: var(--primary-light);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
`
const ScaleStyled = styled.div`
  width: 24px;
  height: 340px;
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
  bottom: 340px;
`
const BottomScalePoint = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: var(--secondary-40);
  position: relative;
  left: 60px;
  bottom: 220px;
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
  bottom: 280px;
`
