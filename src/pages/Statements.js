import React, { useState } from 'react'
import styled from 'styled-components/macro'
import statements from '../statements.json'

export default function Statements() {
  const [list, setList] = useState(statements)
  const Checkbox = ({ className, checked, ...props }) => (
    <label className={className}>
      <CheckboxHidden checked={checked} {...props} />
      <CheckboxStyled checked={checked} />
    </label>
  )

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

        {list.map((item) => (
          <section key={item.id}>
            <ListStyled>
              <label>
                <Checkbox
                  type="checkbox"
                  checked={item.select}
                  onChange={() => handleChangeCheckbox(item.id)}
                />
              </label>
              <StatementStyled>{item.text}</StatementStyled>
            </ListStyled>
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
const RectangleStyled = styled.div`
  width: 280px;
  height: 1px;
  background-color: var(--primary-light);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
`
const ListStyled = styled.div`
  margin-bottom: 16px;
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
`
const CheckboxHidden = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const CheckboxStyled = styled.div`
  width: 24px;
  height: 24px;
  border: solid 4px var(--secondary);
  background: ${(props) =>
    props.checked ? 'var(--secondary)' : 'var(--primary-light-8)'};
`
const StatementStyled = styled.span`
  margin-left: 8px;
`