import PropTypes from 'prop-types'
import React from 'react'
import { useToggle } from 'react-hooks-lib'
import { BsArrowBarDown, BsArrowBarUp } from 'react-icons/bs'
import styled from 'styled-components/macro'
import Divider from '../ui/Divider'

export default function Entries({ entry }) {
  const { on, toggle } = useToggle(false)

  return (
    <>
      <ListStyled onClick={toggle}>
        <label key={entry.id}>
          <Divider />
          <li>
            {on || (
              <CollapsedStyled>
                <TopicStyled>{entry.topic}</TopicStyled>
                <ArrowDownStyled />
              </CollapsedStyled>
            )}
            {on && (
              <CollapsedStyled>
                <TopicStyled>{entry.topic}</TopicStyled> <BsArrowBarUp />
                <p>{entry.description}</p>
              </CollapsedStyled>
            )}
          </li>
        </label>
      </ListStyled>
    </>
  )
}

Entries.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  on: PropTypes.bool.isRequired,
}

const ListStyled = styled.ul`
  list-style: none;
`
const TopicStyled = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`
const CollapsedStyled = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
`
const ArrowDownStyled = styled(BsArrowBarDown)`
  text-align: right;
`
