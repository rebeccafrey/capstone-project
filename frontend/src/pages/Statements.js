import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Checkbox from '../components/Checkbox/Checkbox'
import { Divider } from '../components/Divider'
import NavButton from '../components/NavButton/NavButton'
import { loadFromLocal, saveToLocal } from '../services'
import statements from '../statements.json'

export default function Statements() {
  const [list, setList] = useState(loadFromLocal('list') || statements)
  useEffect(() => {
    saveToLocal('list', list)
  }, [list])

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
          es <BoldText>eher</BoldText> auf dich zutrifft.
        </TextStyled>
        <Divider />
        <ul>
          {list.map((item) => (
            <label key={item.id}>
              <ListItemStyled>
                <Checkbox
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleChangeCheckbox(item.id)}
                />
                <StatementStyled>{item.text}</StatementStyled>
              </ListItemStyled>
            </label>
          ))}
        </ul>
        <NavButton to="result" onClick={countTotalCheckedBoxes}>
          zur Auswertung!
        </NavButton>
      </main>
    </>
  )
  function handleChangeCheckbox(id) {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked }
        } else {
          return item
        }
      })
    )
  }
}

export function countTotalCheckedBoxes() {
  const list = loadFromLocal('list')
  return list.filter((props) => props.checked).length
}

Statements.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

const TextStyled = styled.p`
  margin-bottom: 24px;
`
const BoldText = styled.span`
  font-weight: 700;
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
