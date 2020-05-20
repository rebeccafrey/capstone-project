import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import TopicsList from '../components/TopicsList'
import { db } from '../Firebase'
import FilterTopics from '../ui/FilterTopics'
import ToggleTopics from '../components/ToggleTopics/ToggleTopics'
import { RiPlayListAddLine as AddToCollection } from 'react-icons/ri'

TopicsForDiscussion.propTypes = {
  entries: PropTypes.array,
}

export default function TopicsForDiscussion() {
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
        <ToggleTopics />
        {entries.length === 0 ? (
          <p>
            Zur Zeit sind keine offenen Themen vorhanden. Hast du noch etwas auf
            dem Herzen? Dann nutze das Formular um es mit anderen zu teilen!
            Dein neuer Beitrag erscheint dann direkt auf dieser Seite.
          </p>
        ) : (
          <>
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
              .map((entry, index) => (
                <TopicsList
                  entry={entry}
                  entries={entries}
                  key={entry.id}
                  bookmarked={entry.bookmarked}
                  toggleBookmark={toggleBookmark}
                  index={index}
                />
              ))}
          </>
        )}
      </main>
    </>
  )
  function toggleBookmark(entry) {
    db.collection('discussion-topics')
      .doc(entry.id)
      .update({ bookmarked: !entry.bookmarked })
      .then(() => console.log('Bookmark state updated!'))
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
