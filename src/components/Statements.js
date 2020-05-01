import React, { useState } from 'react'
import styled from 'styled-components/macro'
import statements from '../statements.json'

export default function Statements() {
  const [checked, setChecked] = useState()

  return (
    <>
      <main>
        <TextStyled>
          Mir hat es geholfen, mich selbst besser einschätzen zu können, also
          fangen wir dabei an - Mithilfe von Aussagen, die du in Susan Cains
          Buch „Still - Die Kraft der Introvertierten“ findest.
        </TextStyled>
        <TextStyled>
          Klicke einfach auf die untenstehenden Statements, bei denen du denkst,
          dass sie auf dich zutreffen. Du bist dir unsicher? Wähle es aus, wenn
          es <strong>eher</strong> auf dich zutrifft. Je mehr Aussagen du
          auswählst, desto introvertierter bist du wahrscheinlich.
        </TextStyled>

        {statements.map((statement) => (
          <section key={statement.id}>
            <label htmlfor="checkbox">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <span>{statement.text}</span>
            </label>
          </section>
        ))}
      </main>
    </>
  )
}

const TextStyled = styled.p`
  margin-bottom: 24px;
`
