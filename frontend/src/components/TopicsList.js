import PropTypes from 'prop-types'
import React from 'react'
import { useToggle } from 'react-hooks-lib'
import { BsArrowBarDown, BsArrowBarUp } from 'react-icons/bs'
import styled from 'styled-components/macro'
import Divider from '../ui/Divider'
import Bookmark from '../ui/Bookmark'

export default function TopicsList({ entry }) {
  const { on, toggle } = useToggle(false)

  return (
    <>
      <ListStyled onClick={toggle}>
        <label key={entry.id}>
          <Divider />
          <ListItemStyled>
            {on || (
              <TopicStyled data-cy="topic">
                {entry.topic}
                <Bookmark />
                <ArrowDownStyled />
              </TopicStyled>
            )}
            {on && (
              <>
                <TopicStyled data-cy="topic">
                  {entry.topic}
                  <Bookmark />
                  <ArrowUpStyled />
                </TopicStyled>
                <p data-cy="description">{entry.description}</p>
              </>
            )}
          </ListItemStyled>
        </label>
      </ListStyled>
    </>
  )
}

TopicsList.propTypes = {
  topic: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  on: PropTypes.bool,
}

const ListStyled = styled.ul`
  list-style: none;

  .icon {
    box-sizing: content-box;
    padding: 4px;
  }
  .arrow-icon {
    color: var(--secondary);
  }
`
const TopicStyled = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 80% 10% 10%;

  ::first-letter {
    text-transform: uppercase;
  }
`
const ArrowDownStyled = styled(BsArrowBarDown)`
  text-align: right;
`
const ArrowUpStyled = styled(BsArrowBarUp)`
  text-align: right;
`
const ListItemStyled = styled.li`
  margin: 0;
`
