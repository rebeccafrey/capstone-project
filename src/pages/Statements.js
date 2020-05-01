import React, { useState } from 'react'
import styled from 'styled-components/macro'
import statements from '../statements.json'

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
        <StyledRectangle />

        {list.map((item) => (
          <section key={item.id}>
            <label htmlFor="checkbox">
              <input
                id="checkbox"
                type="checkbox"
                checked={item.select}
                onChange={() => handleChangeCheckbox(item.id)}
              />
              <span>{item.text}</span>
            </label>
          </section>
        ))}
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

const TextStyled = styled.p`
  margin-bottom: 24px;
`
const BoldText = styled.span`
  font-weight: 700;
`
const StyledRectangle = styled.div`
  width: 280px;
  height: 5px;
  background-color: var(--primary-light);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
`

// const CheckboxHidden = styled.input`
//   visibility: hidden;
// `
// const CheckboxStyled = styled.div`
//   display: block;
//   width: 23px;
//   height: 23px;
//   border: solid 4px #344c54;
//   background: ${(props) =>
//     props.checked ? 'var(--secondary)' : 'var(--primary-light-8)'};
// `
// const CheckboxContainer = styled.label`
//   display: inline-block;
// `
