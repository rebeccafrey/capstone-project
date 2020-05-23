import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { BsArrowLeftRight as SwipeIcon } from 'react-icons/bs'
import { RiPlayListAddLine as AddToCollection } from 'react-icons/ri'
import { animated, useSpring } from 'react-spring'
import { useScroll } from 'react-use-gesture'
import styled from 'styled-components/macro'
import ToggleTopicsListNav from '../components/ToggleTopicsListNav/ToggleTopicsListNav'
import { db } from '../Firebase'
import Bookmark from '../ui/Bookmark'
import FilterTopics from '../ui/FilterTopics'

TopicsForDiscussion.propTypes = {
  entries: PropTypes.array,
}

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value
  } else {
    return value < -clampAt ? -clampAt : value
  }
}

export default function TopicsForDiscussion({ bookmarked }) {
  const [searchResult, setSearchResult] = useState('')
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const discussionTopics = db
      .collection('discussion-topics')
      .onSnapshot((snapshot) => {
        const allTopics = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setEntries(allTopics)
      })
    return () => {
      discussionTopics()
    }
  }, [])

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
          Fertig? Dann nimm es von der Liste, indem du auf <AddIconStyled />
          klickst. Der Eintrag ist noch immer unter "alle Themen" zu finden.
        </p>
        <FilterTopics setSearchResult={setSearchResult} />
        <ToggleTopicsListNav />
        {(entries.filter((entry) => entry.bookmarked === true).length === 0 && (
          <p>
            Zur Zeit sind keine offenen Themen vorhanden. Hast du noch etwas auf
            dem Herzen? Dann nutze das Formular um es mit anderen zu teilen!
            Dein neuer Beitrag erscheint dann direkt auf dieser Seite.
          </p>
        )) || (
          <>
            <SwipeTextStyled>
              Wisch dich durch die Themen <SwipeIcon />
            </SwipeTextStyled>
            <Container {...bind()}>
              {entries
                .slice()
                .sort((entryA, entryB) =>
                  entryA.topic.localeCompare(entryB.topic)
                )
                .filter((entry) => entry.bookmarked === true)
                .filter(
                  (entry) =>
                    entry.topic
                      .toLowerCase()
                      .includes(searchResult.toLowerCase()) ||
                    entry.description
                      .toLowerCase()
                      .includes(searchResult.toLowerCase())
                )
                .map((entry, src) => (
                  <AnimatedContainer
                    key={src}
                    style={{
                      ...style,
                    }}
                  >
                    <TopicStyled data-cy="topic">
                      {entry.topic}
                      <Bookmark
                        onClick={() => toggleBookmark(entry)}
                        bookmarked={entry.bookmarked}
                        className="icon"
                        role="bookmark"
                        aria-label={
                          bookmarked ? 'Remove bookmark' : 'Add bookmark'
                        }
                      />
                    </TopicStyled>
                    <p data-cy="description">{entry.description}</p>
                  </AnimatedContainer>
                ))}
            </Container>
          </>
        )}
      </main>
    </>
  )
  function toggleBookmark(entry) {
    db.collection('discussion-topics')
      .doc(entry.id)
      .update({ bookmarked: !entry.bookmarked })
      .catch((error) =>
        alert(
          'Oh, da ist etwas schief gegangen. Versuch es später noch einmal.',
          error
        )
      )
  }
}

const AddIconStyled = styled(AddToCollection)`
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
