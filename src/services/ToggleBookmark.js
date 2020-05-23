import { db } from '../Firebase'

export default function toggleBookmark(entry) {
  db.collection('discussion-topics')
    .doc(entry.id)
    .update({ bookmarked: !entry.bookmarked })
    .catch((error) =>
      alert(
        'Oh, da ist etwas schief gegangen. Versuch es später noch einmal.',
        error
      )
    )
}
