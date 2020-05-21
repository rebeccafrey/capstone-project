import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as EditIcon } from '../icons/EditIcon.svg'
import { ReactComponent as TopicsIcon } from '../icons/TopicsIcon.svg'
import { ReactComponent as ResultIcon } from '../icons/ResultIcon.svg'
import { ReactComponent as StatementIcon } from '../icons/StatementsIcon.svg'

export default function Homepage() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set((state) => (state + 1) % 3), [])
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
            Zum ersten Mal hier? Mach den Test, indem du unten auf dieses Icon
            klickst!
          </IconDescriptionStyled>
          <StatementIcon className="icon" alt="Link zur Selbsteinschätzung" />
        </Container>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Container>
          <IconDescriptionStyled>
            Wiederholungstäter? Bei diesem Icon geht es direkt zu deinem
            Test-Ergebnis...
          </IconDescriptionStyled>
          <ResultIcon className="icon" alt="Link zum Ergebnis" />
        </Container>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Container>
          <IconDescriptionStyled>
            Klicke auf dieses Icon unten in der Navigation und teile deine
            Gedanken...
          </IconDescriptionStyled>
          <EditIcon className="icon" alt="Link zum Eingabeformular" />
        </Container>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Container>
          <IconDescriptionStyled>
            ...und werde unter diesem Punkt inspiriert!
          </IconDescriptionStyled>
          <TopicsIcon className="icon" alt="Link zur Themensammlung" />
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
  height: 175px;
  font-size: 14px;
  will-change: transform, opacity;
  position: relative;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 175px;
  position: absolute;
  top: 0;
  left: 0;
  .icon {
    fill: var(--secondary);
    padding: 32px;
    background: var(--primary-light-40);
    box-sizing: content-box;
    width: 48px;
    height: 48px;
  }
`
const IconDescriptionStyled = styled.p`
  margin: 0 8px;
  width: 50%;
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
// const LinkStyled = styled(NavLink)`
//   text-align: center;
//   cursor: default;
//   text-decoration: none;
//   color: var(--primary-dark) !important;
//   display: grid;
//   justify-items: center;
//   margin-bottom: 24px;
// `
