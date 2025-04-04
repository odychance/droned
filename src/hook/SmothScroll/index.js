"use client"
import { useEffect, useRef } from "react"
import Lenis from "lenis"

const SmothScroll = ({children}) => {
  const scrollContainerRef = useRef()

  useEffect(() => {
    if(typeof window !== "undefined") {
      const lenis = new Lenis({
        duration: 3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(3, -10 * t)),
        smothWheel: true,
        smoothTouch: false,
        lerp: 0.1
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      return () => lenis.destroy()
    }
  }, [])

  return (
    <div ref={scrollContainerRef}>
      {children}
    </div>
  )
}

export default SmothScroll