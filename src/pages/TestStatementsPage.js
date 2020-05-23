import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { loadFromLocal, saveToLocal } from '../services/localStorage'
import statements from '../statements.json'
import Button from '../ui/Button'
import Checkbox from '../ui/Checkbox/Checkbox'
import Divider from '../ui/Divider'

export default function TestStatementsPage() {
  const [list, setList] = useState(loadFromLocal('list') || statements)
  useEffect(() => {
    saveToLocal('list', list)
  }, [list])

  return (
    <>
      <main>
        <h1> Selbsteinschätzung</h1>
        <p>
          Klicke einfach auf die Statements, bei denen du denkst, dass sie auf
          dich zutreffen. Du bist dir unsicher? Wähle es aus, wenn es{' '}
          <BoldText>eher</BoldText> auf dich zutrifft.
        </p>
        <SmallPrint>
          Aussagen ausgeliehen aus: Susan Cain :: Still.
          <br /> Du willst mehr Informationen? Schau <a href="/about">hier!</a>
        </SmallPrint>
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
        <Button
          as={NavLink}
          to="test-result"
          data-cy="button-result-link"
          onClick={countTotalCheckedBoxes}
        >
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

const BoldText = styled.span`
  font-weight: 500;
`
const ListItemStyled = styled.li`
  margin: 0 0 16px 0;
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
`
const StatementStyled = styled.span`
  margin-left: 8px;
`
const SmallPrint = styled.p`
  font-size: 14px;
  font-style: italic;
`
