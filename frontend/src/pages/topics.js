import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import Entries from '../components/Entries'
import Form from '../components/Form'
import { db } from '../Firebase'

export default function Topics() {
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
        <p>
          Du warst bestimmt auch schon der Situation, dass dich das Verhalten
          anderer irritiert hat - oder du dich gefragt hast, ob du selbst etwas
          eigenartig bist?
        </p>
        <p>
          Ich habe das erklärte Ziel, den Austausch zu fördern - und DU bist ein
          essentieller Teil davon!
        </p>
        <p>
          Beschreibe unten kurz die Situationen, in denen du dich fremd gefühlt
          hast, die du mitbekommen hast, bei denen du nie verstanden hast, warum
          jemand eigentlich auf eine bestimmte Art und Weise reagiert!
        </p>
        <p>Und dann lasst uns reden!</p>
        <Form addEntry={addEntry} />
        <Entries entry={entry} />
      </main>
    </>
  )
  function addEntry(newEntry) {
    setEntry([{ ...newEntry }, ...entry])
  }
}

Topics.propTypes = {
  setEntry: PropTypes.func,
}
