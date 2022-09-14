import { useEffect, useState } from 'react'

const useScrollingUp = () => {
  let prevScroll
  if (window) {
    prevScroll = window.pageYOffset
  }

  const [scrollingUp, setScrollingUp] = useState(true);

  const handleScroll = () => {
      const currScroll = window.pageYOffset
      const isScrolled = prevScroll > currScroll
      setScrollingUp(isScrolled)
      prevScroll = currScroll
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return scrollingUp
}

export default useScrollingUp
