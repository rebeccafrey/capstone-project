import { db } from '../Firebase'

export default function toggleBookmark(subject) {
  db.collection('discussion-topics')
    .doc(subject.id)
    .update({ bookmarked: !subject.bookmarked })
    .catch((error) =>
      alert(
        'Oh, da ist etwas schief gegangen. Versuch es später noch einmal.',
        error
      )
    )
}
