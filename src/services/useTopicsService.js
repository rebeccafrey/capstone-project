import { useEffect, useState } from 'react'
import { db } from '../Firebase'

export default function useTopics() {
  const [subjects, setSubjects] = useState([])
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
          .sort((subjectA, subjectB) =>
            subjectA.topic.localeCompare(subjectB.topic)
          )
          .filter(
            (subject) =>
              subject.topic
                .toLowerCase()
                .includes(searchResult.toLowerCase()) ||
              subject.description
                .toLowerCase()
                .includes(searchResult.toLowerCase())
          )

        setSubjects(allTopics)
        setLoading(false)
      })
    return () => {
      discussionTopics()
    }
  }, [searchResult])

  return { subjects, setSubjects, setSearchResult, loading }
}
