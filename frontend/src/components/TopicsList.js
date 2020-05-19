import PropTypes from 'prop-types'
import React from 'react'
import { useToggle } from 'react-hooks-lib'
import { BsArrowBarDown, BsArrowBarUp } from 'react-icons/bs'
import styled from 'styled-components/macro'
import Bookmark from '../ui/Bookmark'
import Divider from '../ui/Divider'

TopicsList.propTypes = {
  topic: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  on: PropTypes.bool,
  toggleBookmark: PropTypes.func,
}

export default function TopicsList({ entry, toggleBookmark, bookmarked }) {
  const { on, toggle } = useToggle(false)

  return (
    <>
      <ListStyled>
        <label key={entry.id}>
          <Divider />
          <li>
            {on || (
              <TopicStyled data-cy="topic">
                {entry.topic}
                <Bookmark
                  onClick={() => toggleBookmark(entry)}
                  bookmarked={bookmarked}
                />
                <BsArrowBarDown onClick={toggle} />
              </TopicStyled>
            )}
            {on && (
              <>
                <TopicStyled data-cy="topic">
                  {entry.topic}
                  <Bookmark
                    onClick={() => toggleBookmark(entry)}
                    bookmarked={bookmarked}
                  />
                  <BsArrowBarUp onClick={toggle} />
                </TopicStyled>
                <p data-cy="description">{entry.description}</p>
              </>
            )}
          </li>
        </label>
      </ListStyled>
    </>
  )
}

const ListStyled = styled.ul`
  list-style: none;

  svg {
    box-sizing: content-box;
    padding: 4px;
    text-align: right;
    color: var(--secondary);
  }

  li {
    margin: 0;
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
