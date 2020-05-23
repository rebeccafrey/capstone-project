import PropTypes from 'prop-types'
import React from 'react'
import { useToggle } from 'react-hooks-lib'
import { BsArrowBarDown, BsArrowBarUp } from 'react-icons/bs'
import styled from 'styled-components/macro'
import Bookmark from '../ui/Bookmark'
import Divider from '../ui/Divider'

ToggleTopicsAll.propTypes = {
  topic: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  on: PropTypes.bool,
  toggleBookmark: PropTypes.func,
}

export default function ToggleTopicsAll({ entry, toggleBookmark, bookmarked }) {
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
                  className="icon"
                  role="bookmark"
                  aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
                />
                <BsArrowBarDown onClick={toggle} className="icon arrow-icon" />
              </TopicStyled>
            )}
            {on && (
              <>
                <TopicStyled data-cy="topic">
                  {entry.topic}
                  <Bookmark
                    onClick={() => toggleBookmark(entry)}
                    bookmarked={bookmarked}
                    className="icon"
                    role="bookmark"
                    aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
                  />
                  <BsArrowBarUp onClick={toggle} className="icon arrow-icon" />
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

  li {
    margin: 0;
  }

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
