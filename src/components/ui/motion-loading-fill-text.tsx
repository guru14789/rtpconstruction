"use client"

import { useEffect, useState } from "react"
import "./motion-loading-fill-text-utils/index.css"

const LOADER_KEY = "rtpLoaderSeen"

function shouldSkipLoader() {
  if (typeof window === "undefined") return true
  try {
    if (
      window.location.hash ||
      sessionStorage.getItem(LOADER_KEY) ||
      navigator.webdriver ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return true
    }
  } catch {
    /* storage unavailable */
  }
  return false
}

export function LoadingFillText({ onComplete }: { onComplete?: () => void }) {
  const [skip] = useState(shouldSkipLoader)
  const [isExiting, setIsExiting] = useState(false)
  const [hidden, setHidden] = useState(skip)

  useEffect(() => {
    if (skip) return
    document.body.classList.add("rtp-loading")
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
      try {
        sessionStorage.setItem(LOADER_KEY, "1")
      } catch {
        /* ignore */
      }
    }, 280)

    const hideTimer = setTimeout(() => {
      setHidden(true)
      document.body.classList.remove("rtp-loading")
      if (onComplete) onComplete()
    }, 580)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(hideTimer)
      document.body.classList.remove("rtp-loading")
    }
  }, [skip, onComplete])

  if (hidden) return null

  return (
    <div
      className={`fill-text-container ${isExiting ? "is-exiting" : ""}`}
      role="status"
      aria-label="Loading RTP Construction"
    >
      <div className="fill-text-stack" aria-hidden="true">
        <div className="fill-text fill-text-bg">RTP</div>
        <div className="fill-text fill-text-fill">RTP</div>
      </div>
    </div>
  )
}

export default LoadingFillText
