import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { loadFromLocal, saveToLocal } from '../services'
import statements from '../statements.json'
import Button from '../ui/Button/Button'
import Checkbox from '../ui/Checkbox/Checkbox'
import Divider from '../ui/Divider'

export default function Statements() {
  const [list, setList] = useState(loadFromLocal('list') || statements)
  useEffect(() => {
    saveToLocal('list', list)
  }, [list])

  return (
    <>
      <main>
        <p>
          Mir hat es geholfen, mich selbst besser einschätzen zu können, also
          fangen wir dabei an - Mithilfe von Aussagen, die du in Susan Cains
          Buch „Still - Die Kraft der Introvertierten“ findest.
        </p>
        <p>
          Klicke einfach auf die untenstehenden Statements, bei denen du denkst,
          dass sie auf dich zutreffen. Du bist dir unsicher? Wähle es aus, wenn
          es <BoldText>eher</BoldText> auf dich zutrifft.
        </p>
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
        <Button as={NavLink} to="result" onClick={countTotalCheckedBoxes}>
          zur Auswertung!
        </Button>
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
  if (list === null) {
    return '?'
  } else {
    return list.filter((props) => props.checked).length
  }
}

Statements.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

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
