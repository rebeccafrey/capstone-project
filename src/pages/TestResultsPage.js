import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import { countTotalCheckedBoxes } from './TestStatementsPage'
import Divider from '../ui/Divider'

TestResultPage.propTypes = {
  showTextDependingOnResult: PropTypes.func,
}

export default function TestResultPage({ px }) {
  return (
    <>
      <main>
        <h1>Dein Ergebnis</h1>
        <ResultStyled>
          <ScaleStyled />
          <ScaleFilled px={calculateScaleFill(0, px, 300)} />
          <TopScalePoint>20 - eher introvertiert</TopScalePoint>
          <ResultBubble>{countTotalCheckedBoxes()}</ResultBubble>
          <BottomScalePoint>0 - eher extravertiert</BottomScalePoint>
        </ResultStyled>
        <Divider />
        {showTextDependingOnResult()}
        <Divider />
        <SmallPrint>
          Du willst mehr Informationen? Schau <a href="/about">hier!</a>
        </SmallPrint>
      </main>
    </>
  )
  function showTextDependingOnResult() {
    if (countTotalCheckedBoxes() >= 0 && countTotalCheckedBoxes() <= 6) {
      return (
        <ExplanationStyled>
          <p>
            Nur wenige der Statements treffen auf dich zu. Du bist also eher
            extravertiert, aber was bedeutet das? Der Hauptunterschied zur
            Introvertiertheit besteht darin, dass du deine Batterien vor allem
            durch soziale Interaktion aufladen kannst. Treffen mit Freunden sind
            wichtig für dich, und du ziehst daraus Energie. Für Introverierte
            ist dies meist eher anstrengend, und sie benötigen Zeit für sich, um
            Kraft zu tanken.
          </p>
          <QuoteStyled>
            <q>
              Ich würd' mich lieber anfahren lassen / Als zu warten, bis ich
              gehen darf / Riesen-Risiko in jedem zweiten Nebensatz / Darf nur
              so schnell fahren, bevor es anfängt Spaß zu machen / Das Geile am
              seidenen Faden ist, ihn loszulassen / Mann, es ist doch alles
              wahr, was man sagt / Dass man nicht viel Zeit hat und zu wenig
              draus macht / Mann, denk doch einmal nicht nach / Probleme werden
              später bequemer und danach egal
            </q>
            <br />- Fynn Kliemann :: Alles was ich hab
          </QuoteStyled>
        </ExplanationStyled>
      )
    } else if (
      countTotalCheckedBoxes() >= 7 &&
      countTotalCheckedBoxes() <= 13
    ) {
      return (
        <ExplanationStyled>
          <p>
            Du pendelst dich in der Mitte ein, das nennt man ambivertiert. Die
            Tendenz zur Mitte ist bei vielen gegeben und zeigt, dass du
            Charakterzüge von beiden Ausprägungen in dir trägst - und du sehr
            wahrscheinlich mal ein wenig Zeit für dich brauchst, oder auch mal
            gern kraftgebende Zeit mit anderen, auch größeren Gruppen,
            verbringst.
          </p>
          <QuoteStyled>
            <q>
              Eine gewisse feierliche Grazie bei gewöhnlichen Dingen, eine Art
              von leichtsinniger Zierlichkeit bei ernsthaften und wichtigen
              kleidet ihn wohl, weil er sehen läßt, daß er überall im
              Gleichgewicht steht.
            </q>
            <br />- Johann Wolfgang von Goethe :: Wilhelm Meisters Lehrjahre V,
            3
          </QuoteStyled>
        </ExplanationStyled>
      )
    } else if (
      countTotalCheckedBoxes() >= 14 &&
      countTotalCheckedBoxes() <= 20
    ) {
      return (
        <ExplanationStyled>
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
            <q>Ich bin nicht schüchtern, eher dezent.</q>
            <br />- Anne with an E
          </QuoteStyled>
        </ExplanationStyled>
      )
    } else {
      return 'Mach den Test und erfahre mehr!'
    }
  }
  function calculateScaleFill() {
    return (300 / 20) * countTotalCheckedBoxes()
  }
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
  background: var(--primary-light);
  margin-left: 32px;
  grid-column: 1;
  grid-row: 1 / 3;
`
const ScaleFilled = styled.div`
  width: 24px;
  border-radius: 8px;
  margin-left: 32px;
  grid-column: 1;
  grid-row: 1 / 4;
  border-radius: 8px;
  align-self: end;
  animation: scalefill 2s;
  animation-fill-mode: forwards;

  @keyframes scalefill {
    from {
      height: 0px;
      background: var(--primary-light);
    }
    to {
      height: ${(props) => props.px}px;
      background: var(--secondary);
    }
  }
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
const ExplanationStyled = styled.div`
  animation: 2s slidein;
  
  @keyframes slidein {
    from {
      margin-top:100%;
      height:300%
    }
    
    to {
      margin-top:0%;
      height:100%;
    };
`
const QuoteStyled = styled.p`
  text-align: right;
  font-style: italic;
  font-size: 16px;
  margin-bottom: 24;
`
const SmallPrint = styled.p`
  font-size: 14px;
  font-style: italic;
`
