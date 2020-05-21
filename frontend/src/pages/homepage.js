import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as EditIcon } from '../icons/EditIcon.svg'
import { ReactComponent as TopicsIcon } from '../icons/TopicsIcon.svg'
import { ReactComponent as ResultIcon } from '../icons/ResultIcon.svg'
import { ReactComponent as StatementIcon } from '../icons/StatementsIcon.svg'
import { IoIosArrowForward } from 'react-icons/io'

export default function Homepage() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set((state) => (state + 1) % 4), [])
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  const iconLinks = [
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Container>
          <IconDescriptionStyled>
            Zum ersten Mal hier? Mach den Test, indem du auf dieses Icon
            klickst!
          </IconDescriptionStyled>
          <Link to="/statements" data-testid="statements-link">
            <StatementIcon className="icon" alt="Link zur Selbsteinschätzung" />
          </Link>
          <ClickTextStyled>Nächstes Icon: Klick!</ClickTextStyled>
          <IoIosArrowForward className="arrowfwd" />
        </Container>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Container>
          <IconDescriptionStyled>
            Wiederholungstäter? Hier geht es direkt zu deinem Test-Ergebnis...
          </IconDescriptionStyled>
          <Link to="/result" data-testid="result-link">
            <ResultIcon className="icon" alt="Link zum Ergebnis" />
          </Link>
          <ClickTextStyled>Weiter: Klick!</ClickTextStyled>
          <IoIosArrowForward className="arrowfwd" />
        </Container>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Container>
          <IconDescriptionStyled>
            Klicke auf dieses Icon und teile deine Gedanken...
          </IconDescriptionStyled>
          <Link to="/entries" data-testid="entries-link">
            <EditIcon className="icon" alt="Link zum Eingabeformular" />
          </Link>
          <ClickTextStyled>Weiter: Klick!</ClickTextStyled>
          <IoIosArrowForward className="arrowfwd" />
        </Container>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Container>
          <IconDescriptionStyled>
            ...und werde unter diesem Punkt inspiriert!
          </IconDescriptionStyled>
          <Link to="/topics" data-testid="topics-link">
            <TopicsIcon className="icon" alt="Link zur Themensammlung" />
          </Link>
          <ClickTextStyled>Klick!</ClickTextStyled>
          <IoIosArrowForward className="arrowfwd" />
        </Container>
      </animated.div>
    ),
  ]

  return (
    <>
      <main>
        <HeadlineStyled>Willkommen!</HeadlineStyled>
        <SubheadlineStyled>Wie schön, dass du da bist.</SubheadlineStyled>
        <p>
          Ein wichtiger Charakterzug, der Einfluss darauf hat, wie wir uns in
          bestimmten Situationen verhalten und in welchen Umgebungen wir
          aufblühen, ist die Intro- bzw. Extravertiertheit. Finde hier mehr
          darüber heraus!
        </p>
        <SimpleTransMain onClick={onClick}>
          {transitions.map(({ item, props, key }) => {
            const IconLinks = iconLinks[item]
            return <IconLinks key={key} style={props} />
          })}
        </SimpleTransMain>
        <p>
          Du willst mehr Informationen zum Hintergrund oder weitere Quellen
          kennenlernen? Schau <a href="/about">hier!</a>
        </p>
      </main>
    </>
  )
}

const SimpleTransMain = styled.div`
  cursor: pointer;
  width: 100%;
  height: 140px;
  font-size: 14px;
  will-change: transform, opacity;
  position: relative;
  margin-bottom: 24px;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 140px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .icon {
    fill: var(--secondary);
    padding: 20px;
    margin: 4px;
    background: var(--primary-light-40);
    box-sizing: content-box;
    width: 48px;
    height: 48px;
  }

  .arrowfwd {
    fill: var(--primary-light);
    width: 4em;
  }
`
const IconDescriptionStyled = styled.p`
  margin: 0;
  hyphens: auto;
`
const ClickTextStyled = styled.span`
  font-style: italic;
  font-size: 14px;
  color: var(--primary-light);
  text-align: right;
  line-height: 1;
`
const HeadlineStyled = styled.h1`
  font-size: 24px;
  font-weight: 700;
`
const SubheadlineStyled = styled.h2`
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 24px;
`
