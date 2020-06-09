import { useEffect, useState } from 'react'
import { db } from '../Firebase'

export default function useAddToDatabase() {
  const [subject, setSubject] = useState([])

  useEffect(() => {
    const discussionTopics = db
      .collection('discussion-topics')
      .onSnapshot((snapshot) => {
        const allTopics = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setSubject(allTopics)
      })
    return () => {
      discussionTopics()
    }
  }, [])
  return {
    subject,
    setSubject,
  }
}
