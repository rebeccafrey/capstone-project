import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import { countTotalCheckedBoxes } from '../pages/statements'
import Divider from '../ui/Divider'

export default function Result() {
  return (
    <>
      <main>
        <h2>Dein Ergebnis</h2>
        <p>{showTextDependingOnResult()}</p>
        <Divider />
        <ResultStyled>
          <ScaleStyled />
          <TopScalePoint>20 - eher introvertiert</TopScalePoint>
          <ResultBubble>{countTotalCheckedBoxes()}</ResultBubble>
          <BottomScalePoint>0 - eher extravertiert</BottomScalePoint>
        </ResultStyled>
        <Divider />
        <SmallPrint>
          Du willst mehr Informationen? Schau <a href="/about">hier!</a>
        </SmallPrint>
      </main>
    </>
  )
  function showTextDependingOnResult() {
    if (countTotalCheckedBoxes() >= 0 && countTotalCheckedBoxes() <= 6) {
      return 'Nur wenige der Statements treffen auf dich zu. Du bist also eher extravertiert, aber was bedeutet das? Der Hauptunterschied zur Introvertiertheit besteht darin, dass du deine Batterien vor allem durch soziale Interaktion aufladen kannst. Treffen mit Freunden sind wichtig für dich, und du ziehst daraus Energie. Für Introverierte ist dies meist eher anstrengend, und sie benötigen Zeit für sich, um Kraft zu tanken.'
    } else if (
      countTotalCheckedBoxes() >= 7 &&
      countTotalCheckedBoxes() <= 13
    ) {
      return 'Du pendelst dich in der Mitte ein, das nennt man ambivertiert. Die Tendenz zur Mitte ist bei vielen gegeben und zeigt, dass du Charakterzüge von beiden Ausprägungen in dir trägst - und du sehr wahrscheinlich mal ein wenig Zeit für dich brauchst, oder auch mal gern kraftgebende Zeit mit anderen, auch größeren Gruppen, verbringst.'
    } else if (
      countTotalCheckedBoxes() >= 14 &&
      countTotalCheckedBoxes() <= 20
    ) {
      return (
        <>
          <p>
            Viele der Statements treffen auf dich zu. Du bist also eher
            introvertiert, aber was bedeutet das? Der Hauptunterschied zur
            Extravertiertheit besteht darin, dass du deine Batterien vor allem
            in der Zeit, die du ohne viel soziale Interaktion verbringst, wieder
            aufladen kannst. Treffen mit Freunden sind zwar auch wichtig für
            dich, können aber regelrechte Krafträuber darstellen. Extravertierte
            dagegen sind weniger gern allein - es verhält sich bei ihnen genau
            andersherum.
          </p>
          <QuoteStyled>
            "Ich bin nicht schüchtern, eher dezent."
            <br />- Anne with an E
          </QuoteStyled>
        </>
      )
    } else {
      return 'Mach den Test und erfahre mehr!'
    }
  }
}

Result.propTypes = {
  showTextDependingOnResult: PropTypes.func,
}

const ResultStyled = styled.div`
  display: grid;
  grid-template-columns: 56px auto;
  grid-template-rows: 20px 260px 20px;
  column-gap: 8px;
  margin-bottom: 24px;
`
const ScaleStyled = styled.div`
  width: 24px;
  height: 300px;
  border-radius: 8px;
  background: var(--secondary-40);
  margin-left: 32px;
  grid-column: 1;
  grid-row: 1 / 3;
`
const TopScalePoint = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: var(--secondary-40);
  width: 220px;
  grid-column: 2;
  grid-row: 1;
  align-self: center;
`
const BottomScalePoint = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: var(--secondary-40);
  width: 220px;
  grid-column: 2;
  grid-row: 3;
  align-self: center;
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
  grid-column: 2;
  grid-row: 2/2;
  place-self: center;
`
const QuoteStyled = styled.p`
  text-align: right;
  font-style: italic;
  font-size: 16px;
`
const SmallPrint = styled.p`
  font-size: 14px;
  font-style: italic;
`
