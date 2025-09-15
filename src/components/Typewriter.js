import { useState, useEffect } from 'react'

export default function Typewriter({ 
  texts = [], 
  speed = 50, 
  deleteSpeed = 30,
  delay = 1000,
  pauseTime = 2000,
  onComplete = () => {},
  showCursor = true,
  cursorChar = '|',
  infinite = true
}) {
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    if (texts.length === 0) return

    const currentText = texts[currentTextIndex]
    
    if (!isDeleting && currentCharIndex < currentText.length) {
      // Mengetik karakter
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[currentCharIndex])
        setCurrentCharIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (!isDeleting && currentCharIndex === currentText.length) {
      // Selesai mengetik, tunggu sebentar lalu mulai menghapus
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseTime)

      return () => clearTimeout(timeout)
    } else if (isDeleting && currentCharIndex > 0) {
      // Menghapus karakter
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1))
        setCurrentCharIndex(prev => prev - 1)
      }, deleteSpeed)

      return () => clearTimeout(timeout)
    } else if (isDeleting && currentCharIndex === 0) {
      // Selesai menghapus, lanjut ke teks berikutnya
      setIsDeleting(false)
      if (currentTextIndex < texts.length - 1) {
        setCurrentTextIndex(prev => prev + 1)
      } else if (infinite) {
        setCurrentTextIndex(0)
      } else {
        onComplete()
      }
    }
  }, [currentCharIndex, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseTime, infinite, onComplete])

  return (
    <span>
      {displayText}
      {showCursor && <span className="cursor-blink">{cursorChar}</span>}
    </span>
  )
}
