import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import styled from 'styled-components/macro'
import { ReactComponent as EditIcon } from '../icons/EditIcon.svg'
import { ReactComponent as ResultIcon } from '../icons/ResultIcon.svg'
import { ReactComponent as StatementIcon } from '../icons/StatementsIcon.svg'

export default function Homepage() {
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
        <IconOverviewStyled>
          <LinkStyled
            activeClassName="selected"
            to="/statements"
            data-testid="statements-link"
          >
            Mach den Test
            <StatementIconStyled alt="Statements" />
          </LinkStyled>
          <LinkStyled
            activeClassName="selected"
            to="/result"
            data-testid="result-link"
          >
            Zum Test-Ergebnis <ResultIconStyled alt="Result" />
          </LinkStyled>
          <LinkStyled
            activeClassName="selected"
            to="/entries"
            data-testid="entries-link"
          >
            <EditIconStyled alt="Entries" />
            Teile deine Gedanken
          </LinkStyled>
          <LinkStyled
            activeClassName="selected"
            to="/topics"
            data-testid="topics-link"
          >
            <TopicsIconStyled alt="Topics" size="48px" />
            Werde inspiriert
          </LinkStyled>
        </IconOverviewStyled>
        <p>
          Du willst mehr Informationen zum Hintergrund oder weitere Quellen
          kennenlernen? Schau <a href="/about">hier!</a>
        </p>
      </main>
    </>
  )
}

const HeadlineStyled = styled.h1`
  font-size: 24px;
  font-weight: 700;
`
const SubheadlineStyled = styled.h2`
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 24px;
`
const LinkStyled = styled(NavLink)`
  text-align: center;
  cursor: default;
  text-decoration: none;
  color: var(--primary-dark) !important;
  display: grid;
  justify-items: center;
  margin-bottom: 24px;
`
const StatementIconStyled = styled(StatementIcon)`
  fill: var(--secondary);
  padding: 32px;
  margin-bottom: 12px;
  background: var(--primary-light-40);
  box-sizing: content-box;
  width: 48px;
`
const ResultIconStyled = styled(ResultIcon)`
  fill: var(--secondary);
  padding: 32px;
  margin-bottom: 12px;
  background: var(--primary-light-40);
  box-sizing: content-box;
  width: 48px;
`
const EditIconStyled = styled(EditIcon)`
  fill: var(--secondary);
  padding: 32px;
  margin-top: 12px;
  background: var(--primary-light-40);
  box-sizing: content-box;
  width: 48px;
`
const TopicsIconStyled = styled(AiOutlineUnorderedList)`
  fill: var(--secondary);
  padding: 32px;
  margin-top: 12px;
  background: var(--primary-light-40);
  box-sizing: content-box;
`
const IconOverviewStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  font-size: 14px;
`
