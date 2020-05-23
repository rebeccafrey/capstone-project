import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
import { useScroll } from 'react-use-gesture'
import styled from 'styled-components/macro'
import { ReactComponent as EditIcon } from '../icons/EditIcon.svg'
import { ReactComponent as ResultIcon } from '../icons/ResultIcon.svg'
import { ReactComponent as StatementIcon } from '../icons/StatementsIcon.svg'
import { ReactComponent as TopicsIcon } from '../icons/TopicsIcon.svg'

export default function Homepage() {
  const clamp = (value, clampAt = 30) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value
    } else {
      return value < -clampAt ? -clampAt : value
    }
  }

  const [style, set] = useSpring(() => ({
    transform: 'perspective(900px) rotateY(0deg)',
  }))

  const bind = useScroll((event) => {
    set({
      transform: `perspective(900px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    })
  })

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
        <Container {...bind()}>
          <AnimatedContainer
            style={{
              ...style,
            }}
          >
            <ContainerIcon>
              <IconDescriptionStyled>
                Zum ersten Mal hier? Mach den Test, indem du auf dieses Icon
                klickst!
              </IconDescriptionStyled>
              <Link to="/test-statements" data-testid="statements-link">
                <StatementIcon
                  className="icon"
                  alt="Link zur Selbsteinschätzung"
                />
              </Link>
              <IoIosArrowForward className="arrowfwd" />
            </ContainerIcon>
          </AnimatedContainer>

          <AnimatedContainer
            style={{
              ...style,
            }}
          >
            <ContainerIcon>
              <IconDescriptionStyled>
                Wiederholungstäter? Hier geht es direkt zu deinem Test-Ergebnis
                ...
              </IconDescriptionStyled>
              <Link to="/test-result" data-testid="result-link">
                <ResultIcon className="icon" alt="Link zum Ergebnis" />
              </Link>
              <IoIosArrowForward className="arrowfwd" />
            </ContainerIcon>
          </AnimatedContainer>

          <AnimatedContainer
            style={{
              ...style,
            }}
          >
            <ContainerIcon>
              <IconDescriptionStyled>
                Klicke auf dieses Icon und teile deine Gedanken ...
              </IconDescriptionStyled>
              <Link to="/add-topics" data-testid="entries-link">
                <EditIcon className="icon" alt="Link zum Eingabeformular" />
              </Link>
              <IoIosArrowForward className="arrowfwd" />
            </ContainerIcon>
          </AnimatedContainer>

          <AnimatedContainer
            style={{
              ...style,
            }}
          >
            <ContainerIcon>
              <IconDescriptionStyled>
                ... und werde unter diesem Punkt inspiriert!
              </IconDescriptionStyled>
              <Link to="/topics-all" data-testid="topics-link">
                <TopicsIcon className="icon" alt="Link zur Themensammlung" />
              </Link>
              <IoIosArrowForward className="arrowfwd" />
            </ContainerIcon>
          </AnimatedContainer>
        </Container>
        <p>
          Du willst mehr Informationen zum Hintergrund oder weitere Quellen
          kennenlernen? Schau <a href="/about">hier!</a>
        </p>
      </main>
    </>
  )
}

const AnimatedContainer = styled(animated.div)`
  flex-shrink: 0;
  width: 280px;
  margin-left: 10px;
  border: 1px solid var(--primary-light-40);
  padding: 12px;
  border-radius: 8px;
  box-shadow: -4px 5px 8px 0 rgba(67, 86, 100, 0.12),
    -1px 2px 4px 0 rgba(67, 86, 100, 0.1);
`
const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  padding: 8px 0;
  margin-bottom: 24px;
  font-size: 14px;
`
const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 140px;
  width: 100%;

  .icon {
    fill: var(--secondary);
    padding: 20px;
    margin: 4px;
    background: var(--primary-light);
    box-sizing: content-box;
    width: 48px;
    height: 48px;
  }

  .arrowfwd {
    fill: var(--primary-light);
    width: 80px;
  }
`
const IconDescriptionStyled = styled.p`
  margin: 0;
  hyphens: auto;
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
