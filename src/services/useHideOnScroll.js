import useDocumentScrollThrottled from './useDocumentScrollThrottled'
import { useState } from 'react'

export default function useHideOnScroll(callback) {
  const [shouldHide, setShouldHide] = useState(false)

  const minimumScroll = 50
  const timeoutDelay = 400

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > minimumScroll

    setTimeout(() => {
      setShouldHide(isScrolledDown && isMinimumScrolled)
    }, timeoutDelay)
  })

  return { shouldHide }
}
