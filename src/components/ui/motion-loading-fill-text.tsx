"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useTransform } from "framer-motion"
import "./motion-loading-fill-text-utils/index.css"

function useFillProgress(onComplete?: () => void) {
  const progress = useSpring(0, { stiffness: 90, damping: 20 })

  useEffect(() => {
    const id = setInterval(() => {
      const current = progress.get()
      const next = current + Math.random() * 0.25
      if (next >= 1) {
        progress.set(1)
        clearInterval(id)
        if (onComplete) {
          setTimeout(onComplete, 350)
        }
      } else {
        progress.set(next)
      }
    }, 280)
    return () => clearInterval(id)
  }, [progress, onComplete])

  return progress
}

export function LoadingFillText({ onComplete }: { onComplete?: () => void }) {
  const [isExiting, setIsExiting] = useState(false)
  const [hidden, setHidden] = useState(false)

  const progress = useFillProgress(() => {
    setIsExiting(true)
    setTimeout(() => {
      setHidden(true)
      document.body.classList.remove("rtp-loading")
      if (onComplete) onComplete()
    }, 450)
  })

  const clipPath = useTransform(progress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])

  useEffect(() => {
    document.body.classList.add("rtp-loading")
    return () => {
      document.body.classList.remove("rtp-loading")
    }
  }, [])

  if (hidden) return null

  return (
    <div className={`fill-text-container ${isExiting ? "is-exiting" : ""}`} role="progressbar">
      <div className="fill-text-stack">
        <div className="fill-text fill-text-bg" aria-hidden>
          RTP
        </div>
        <motion.div className="fill-text fill-text-fill" style={{ clipPath }}>
          RTP
        </motion.div>
      </div>
    </div>
  )
}

export default LoadingFillText
