import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Checkbox from '../components/Checkbox'
import statements from '../statements.json'
import { Button } from '../components/Button'

export default function Statements() {
  const [list, setList] = useState(statements)
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
          es <BoldText>eher</BoldText> auf dich zutrifft. Je mehr Aussagen du
          auswählst, desto introvertierter bist du wahrscheinlich.
        </TextStyled>
        <RectangleStyled />
        <ul>
          {list.map((item) => (
            <label>
              <ListItemStyled key={item.id}>
                <Checkbox
                  type="checkbox"
                  checked={item.select}
                  onChange={() => handleChangeCheckbox(item.id)}
                />
                <StatementStyled>{item.text}</StatementStyled>
              </ListItemStyled>
            </label>
          ))}
        </ul>
        <Button>zur Auswertung!</Button>
      </main>
    </>
  )
  function handleChangeCheckbox(id) {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, select: !item.select }
        } else {
          return item
        }
      })
    )
  }
}

Statements.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  select: PropTypes.bool,
}

const TextStyled = styled.p`
  margin-bottom: 24px;
`
const BoldText = styled.span`
  font-weight: 700;
`
const RectangleStyled = styled.div`
  width: 75%;
  height: 1px;
  background-color: var(--primary-light);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
`
const ListItemStyled = styled.li`
  margin-bottom: 16px;
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
`
const StatementStyled = styled.span`
  margin-left: 8px;
`
