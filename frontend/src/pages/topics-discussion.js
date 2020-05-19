import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import TopicsList from '../components/TopicsList'
import { db } from '../Firebase'
import FilterTopics from '../ui/Filter/FilterTopics'
import ToggleTopics from '../components/ToggleTopics'
import { RiPlayListAddLine as AddToCollection } from 'react-icons/ri'

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
        <h2>
          Themen-Sammlung <br /> (noch nicht diskutiert)
        </h2>
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

        {entries
          .slice()
          .sort((entryA, entryB) => entryA.topic.localeCompare(entryB.topic))
          .filter((entry) => entry.bookmarked === true)
          .filter(
            (entry) =>
              entry.topic.toLowerCase().includes(searchResult.toLowerCase()) ||
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

TopicsForDiscussion.propTypes = {
  entries: PropTypes.array,
}

const AddIconStyled = styled(AddToCollection)`
  fill: var(--secondary);
  margin: 0 4px;
  height: 18px;
`
