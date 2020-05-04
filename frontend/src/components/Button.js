import React from 'react'
import styled from 'styled-components/macro'

export default function Button({ children }) {
  //const [list, setList] = useState(statements)

  return (
    <section>
      <ButtonStyled>{children}</ButtonStyled>
    </section>
  )

  // function handleChangeCheckbox(id) {
  //   setList(
  //     list.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, select: !item.select }
  //       } else {
  //         return item
  //       }
  //     })
  //   )
  // }
}

const ButtonStyled = styled.button`
  width: 300px;
  height: 48px;
  border-radius: 8px;
  box-shadow: -4px 5px 8px 0 rgba(67, 86, 100, 0.12),
    -1px 2px 4px 0 rgba(67, 86, 100, 0.1);
  background: var(--secondary);
  margin: 40px auto 80px auto;
  color: var(--primary-light-8);
  font-size: 18px;
  font-weight: 700;
`
