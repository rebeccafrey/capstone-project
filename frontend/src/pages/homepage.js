import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../ui/Button/Button'
import Divider from '../ui/Divider'

export default function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <main>
        <HeadlineStyled>Willkommen!</HeadlineStyled>
        <SubheadlineStyled>Wie schön, dass du da bist.</SubheadlineStyled>
        <p>
          Hast du dich auch schon mal gefragt, ob du anders bist als andere?
          Oder dich über das Verhalten von deinem Gegenüber gewundert?
        </p>
        <p>
          Ein wichtiger Charakterzug, der Einfluss darauf hat, wie wir uns in
          bestimmten Situationen verhalten und in welchen Umgebungen wir
          aufblühen, ist die Intro- bzw. Extravertiertheit.
        </p>
        <p>
          Mir hat es sehr geholfen herauszufinden, wo ich mich in diesem
          Spektrum bewege.
        </p>
        <p>
          Hier hast du die Möglichkeit, einen kleinen Test zu machen, um dies
          auch für dich besser bestimmen zu können.
        </p>
        <Button as={NavLink} to="statements">
          Hier geht's zum Test
        </Button>
        <Divider />
        <p>
          Mir ist es schon öfter passiert, dass mir gesagt wurde, ich müsse
          einen anderen Charakterzug zeigen, um erfolgreich zu sein. Meine
          Meinung ist aber eine andere.
        </p>
        <p>
          Ich glaube daran, dass wir zuallererst den Austausch fördern müssen.
          Ein besseres Verständnis zugrundeliegender Wesenszüge, die auch nicht
          aktiv veränderbar sind, ist grundlegend, um die Gesellschaft zu einem
          besseren Ort für alle zu machen.{' '}
        </p>
        <p>Hilfst du mit, die Welt menschlicher zu machen?</p>
        <Button as={NavLink} to="topics">
          Hier geht's zum Formular
        </Button>
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
