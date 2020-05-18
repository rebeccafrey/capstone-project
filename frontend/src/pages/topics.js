import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import TopicsList from '../components/TopicsList'
import { db } from '../Firebase'
import FilterTopics from '../ui/Filter/FilterTopics'

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
        <h2>Themen-Sammlung</h2>
        <p>
          Untenstehend kannst du alle Themen, die von dir oder anderen
          eingetragen wurden, sehen. Klicke auf die Pfeile, um die
          Beschreibungen zu lesen oder starte eine Volltextsuche.
        </p>
        <SmallPrint>
          Du willst mehr Informationen? Schau <a href="/about">hier!</a>
        </SmallPrint>
        <FilterTopics setSearchResult={setSearchResult} />
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

Topics.propTypes = {
  entry: PropTypes.array,
}
const SmallPrint = styled.p`
  font-size: 14px;
  font-style: italic;
`
