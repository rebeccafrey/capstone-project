import PropTypes from 'prop-types'
import React from 'react'
import { useToggle } from 'react-hooks-lib'
import { BsArrowBarDown, BsArrowBarUp } from 'react-icons/bs'
import styled from 'styled-components/macro'
import Bookmark from './Bookmark'
import Divider from './Divider'

ToggleAllTopics.propTypes = {
  bookmarked: PropTypes.bool.isRequired,
  toggleBookmark: PropTypes.func.isRequired,
  subject: PropTypes.object.isRequired,
}

export default function ToggleAllTopics({
  subject,
  toggleBookmark,
  bookmarked,
}) {
  const { on, toggle } = useToggle(false)

  return (
    <>
      <ListStyled>
        <label key={subject.id}>
          <Divider />
          <li>
            {on || (
              <TopicStyled data-cy="topic">
                {subject.topic}
                <Bookmark
                  onClick={() => toggleBookmark(subject)}
                  bookmarked={bookmarked}
                  className="icon"
                  role="bookmark"
                  aria-label={
                    bookmarked ? 'Eintrag gekennzeichnet' : 'Eintrag markieren'
                  }
                />
                <BsArrowBarDown onClick={toggle} className="icon arrow-icon" />
              </TopicStyled>
            )}
            {on && (
              <>
                <TopicStyled data-cy="topic">
                  {subject.topic}
                  <Bookmark
                    onClick={() => toggleBookmark(subject)}
                    bookmarked={bookmarked}
                    className="icon"
                    role="bookmark"
                    aria-label={
                      bookmarked
                        ? 'Eintrag gekennzeichnet'
                        : 'Eintrag markieren'
                    }
                  />
                  <BsArrowBarUp onClick={toggle} className="icon arrow-icon" />
                </TopicStyled>
                <p data-cy="description">{subject.description}</p>
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
