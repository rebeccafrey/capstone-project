import React from 'react'
import { BsArrowLeftRight as SwipeIcon } from 'react-icons/bs'
import { MdSpeakerNotes as OpenTopicsIcon } from 'react-icons/md'
import { animated, useSpring } from 'react-spring'
import { useScroll } from 'react-use-gesture'
import styled from 'styled-components/macro'
import ToggleTopicsListNav from '../ui/ToggleTopicsListNav/ToggleTopicsListNav'
import toggleBookmark from '../services/ToggleBookmark'
import useReadSubjectsFromDatabase from '../services/useReadSubjectsFromDatabase'
import Bookmark from '../ui/Bookmark'
import SearchBar from '../ui/SearchBar/SearchBar'
import LoadingIcon from '../ui/LoadingIcon'

export default function TopicsForDiscussion({ bookmarked }) {
  const { subjects, setSearchResult, loading } = useReadSubjectsFromDatabase()
  const clamp = (value, clampAt = 30) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value
    } else {
      return value < -clampAt ? -clampAt : value
    }
  }

  const [style, set] = useSpring(() => ({
    transform: 'perspective(900px) rotateY(0deg)',
  }))

  const bind = useScroll((event) => {
    set({
      transform: `perspective(900px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    })
  })

  return (
    <>
      <main>
        <h1>
          Themen-Sammlung <br /> (noch nicht diskutiert)
        </h1>
        <p>
          Hier findest du alle Themen, die noch nicht besprochen worden sind.
          Such dir eins aus!
        </p>
        <p>
          Fertig? Dann nimm es von der Liste, indem du auf{' '}
          <OpenTopicsIconStyled />
          klickst. Der Eintrag ist noch immer unter "alle Themen" zu finden.
        </p>
        <SearchBar setSearchResult={setSearchResult} />
        <ToggleTopicsListNav />
        {loading ? (
          <LoadingIcon />
        ) : (
          (subjects.filter((subject) => subject.bookmarked).length === 0 && (
            <p>
              Huch, es scheint keinen Eintrag zu geben! Hast du noch etwas auf
              dem Herzen? Dann nutze das Formular um es mit anderen zu teilen!
              Dein neuer Beitrag erscheint dann direkt auf dieser Seite.
            </p>
          )) || (
            <>
              <SwipeTextStyled>
                Wisch dich durch die Themen <SwipeIcon />
              </SwipeTextStyled>
              <Container {...bind()}>
                {subjects
                  .filter((subject) => subject.bookmarked)
                  .map((subject, src) => (
                    <AnimatedContainer
                      key={src}
                      style={{
                        ...style,
                      }}
                    >
                      <TopicStyled data-cy="topic">
                        {subject.topic}
                        <Bookmark
                          onClick={() => toggleBookmark(subject)}
                          bookmarked={subject.bookmarked}
                          className="icon"
                          role="bookmark"
                          aria-label={
                            bookmarked
                              ? 'Eintrag gekennzeichnet'
                              : 'Eintrag markieren'
                          }
                        />
                      </TopicStyled>
                      <p data-cy="description">{subject.description}</p>
                    </AnimatedContainer>
                  ))}
              </Container>
            </>
          )
        )}
      </main>
    </>
  )
}

const OpenTopicsIconStyled = styled(OpenTopicsIcon)`
  fill: var(--secondary);
  margin: 0 4px;
  height: 18px;
`
const TopicStyled = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 90% 10%;

  ::first-letter {
    text-transform: uppercase;
  }
`
const SwipeTextStyled = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 12px;
  font-style: italic;
  color: var(--primary-light);
`
const AnimatedContainer = styled(animated.div)`
  flex-shrink: 0;
  width: 280px;
  margin-left: 10px;
  border: 1px solid var(--primary-light-40);
  padding: 12px;
  border-radius: 8px;
  box-shadow: -4px 5px 8px 0 rgba(67, 86, 100, 0.12),
    -1px 2px 4px 0 rgba(67, 86, 100, 0.1);
`
const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  padding: 20px 0;
`
