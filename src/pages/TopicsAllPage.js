import React from 'react'
import styled from 'styled-components/macro'
import ToggleAllTopics from '../ui/ToggleAllTopics'
import ToggleTopicsListNav from '../ui/ToggleTopicsListNav/ToggleTopicsListNav'
import LoadingIcon from '../ui/LoadingIcon'
import toggleBookmark from '../services/ToggleBookmark'
import useReadSubjectsFromDatabase from '../services/useReadSubjectsFromDatabase'
import SearchBar from '../ui/SearchBar/SearchBar'

export default function TopicsAllPage() {
  const { subjects, setSearchResult, loading } = useReadSubjectsFromDatabase()

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
        <SearchBar setSearchResult={setSearchResult} />
        <ToggleTopicsListNav />
        {loading ? (
          <LoadingIcon />
        ) : (
          (subjects.length === 0 && (
            <p>
              Huch, es scheint keinen Eintrag zu geben! Hast du noch etwas auf
              dem Herzen? Dann nutze das Formular um es mit anderen zu teilen!
              Dein neuer Beitrag erscheint dann direkt auf dieser Seite.
            </p>
          )) ||
          subjects.map((subject, index) => (
            <ToggleAllTopics
              subject={subject}
              subjects={subjects}
              key={subject.id}
              bookmarked={subject.bookmarked}
              toggleBookmark={toggleBookmark}
              index={index}
            />
          ))
        )}
      </main>
    </>
  )
}

const SmallPrint = styled.p`
  font-size: 14px;
  font-style: italic;
`
