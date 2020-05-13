import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Entries from '../components/Entries'
import { db } from '../Firebase'
import FilterTopics from '../ui/FilterTopics'

export default function Topics() {
  const [searchResult, setSearchResult] = useState('')
  const [entry, setEntry] = useState([])

  useEffect(() => {
    const discussionTopics = db
      .collection('discussion-topics')
      .onSnapshot((snapshot) => {
        const allTopics = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setEntry(allTopics)
      })
    return () => {
      discussionTopics()
    }
  }, [])

  return (
    <>
      <main>
        <IntroTopicsStyled>
          Untenstehend kannst du alle Themen, die von dir oder anderen
          eingetragen wurden, sehen. Klicke auf die Pfeile, um die
          Beschreibungen zu lesen oder starte eine Volltextsuche.
        </IntroTopicsStyled>

        <FilterTopics setSearchResult={setSearchResult} />
        {entry
          .filter(
            (entry) =>
              entry.topic.toLowerCase().includes(searchResult.toLowerCase()) ||
              entry.description
                .toLowerCase()
                .includes(searchResult.toLowerCase())
          )
          .map((entry) => (
            <Entries entry={entry} key={entry.id} />
          ))}
      </main>
    </>
  )
}

Topics.propTypes = {
  entry: PropTypes.array,
}

const IntroTopicsStyled = styled.p`
  font-style: italic;
  font-size: 14px;
`
