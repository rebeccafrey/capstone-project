import { useEffect, useState } from 'react'
import { db } from '../Firebase'

export default function useTopics() {
  const [entries, setEntries] = useState([])
  const [searchResult, setSearchResult] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const discussionTopics = db
      .collection('discussion-topics')
      .onSnapshot((snapshot) => {
        const allTopics = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .slice()
          .sort((entryA, entryB) => entryA.topic.localeCompare(entryB.topic))
          .filter(
            (entry) =>
              entry.topic.toLowerCase().includes(searchResult.toLowerCase()) ||
              entry.description
                .toLowerCase()
                .includes(searchResult.toLowerCase())
          )

        setEntries(allTopics)
        setLoading(false)
      })
    return () => {
      discussionTopics()
    }
  }, [searchResult])

  return { entries, setEntries, setSearchResult, loading }
}
