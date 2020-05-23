import React from 'react'
import styled from 'styled-components/macro'
import ToggleTopicsAll from '../components/ToggleTopicsAll'
import ToggleTopicsListNav from '../components/ToggleTopicsListNav/ToggleTopicsListNav'
import toggleBookmark from '../services/ToggleBookmark'
import useTopicsService from '../services/useTopicsService'
import FilterTopics from '../ui/FilterTopics'

export default function TopicsAllPage() {
  const { entries, setSearchResult } = useTopicsService()

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
        <ToggleTopicsListNav />
        {entries.map((entry, index) => (
          <ToggleTopicsAll
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
}

const SmallPrint = styled.p`
  font-size: 14px;
  font-style: italic;
`
