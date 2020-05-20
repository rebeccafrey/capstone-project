import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import TopicsList from '../components/TopicsList'
import { db } from '../Firebase'
import FilterTopics from '../ui/FilterTopics'
import ToggleTopics from '../components/ToggleTopics/ToggleTopics'

Topics.propTypes = {
  entries: PropTypes.array,
}

export default function Topics() {
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
        <h1>Themen-Sammlung</h1>
        <p>
          Hier findest du alle Themen, die von dir oder anderen eingetragen
          wurden. Klicke auf die Pfeile, um die Beschreibungen zu lesen oder
          starte eine Suche. Klicke auf "offen zur Diskussion" um nur noch nicht
          besprochenene Themen zu sehen.
        </p>
        <SmallPrint>
          Du willst mehr Informationen? Schau <a href="/about">hier!</a>
        </SmallPrint>
        <FilterTopics setSearchResult={setSearchResult} />
        <ToggleTopics />

        {entries
          .slice()
          .sort((entryA, entryB) => entryA.topic.localeCompare(entryB.topic))
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

const SmallPrint = styled.p`
  font-size: 14px;
  font-style: italic;
`
