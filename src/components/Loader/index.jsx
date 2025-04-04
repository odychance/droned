import clsx from 'clsx';
import s from './styles.module.scss'
import React from 'react'
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({children}) => {
  const digit1Ref = useRef(null)
  const digit2Ref = useRef(null)
  const digit3Ref = useRef(null)
  const progressBarRef = useRef(null)

  const [ isLoading, setIsLoading ] = useState(true)
  const tl = gsap.timeline()

  const digit1 = [0, 1]
  const digit2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const digit3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  useEffect(() => {
    const animDigit = (ref) => {
      if(ref) {
        const numHeight = ref.children[0].getBoundingClientRect().height
        const totalHeight = numHeight * ref.children.length
        gsap.to(ref, {
          y: -(totalHeight - numHeight),
          duration: 4,
          ease: "power2.inOut"
        })
      }
    }

    animDigit(digit1Ref.current)
    animDigit(digit2Ref.current)
    animDigit(digit3Ref.current)

    tl.to(progressBarRef.current, {
      width: "75vw",
      duration: 3,
      ease: "power4.inOut"
    }, "+=4")

    const timer = setTimeout(() => setIsLoading(false), 5500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <div className={clsx(s["loaderContainer"], {[s["hidde"]] : isLoading} )}>
        <div className={s["preloader"]}>
          <p>Loading</p>
          <div className={s["counter"]}>
            <div className={clsx(s["digit1"], s["digitAlign"])} ref={digit1Ref}>
              {digit1.map((el, idx) => (
                <div className={s["num"]} key={idx}>{el}</div>
              ))}
            </div>
            <div className={clsx(s["digit2"], s["digitAlign"])} ref={digit2Ref}>
              {digit2.map((el, idx) => (
                <div className={s["num"]} key={idx}>{el}</div>
              ))}
            </div>
            <div className={clsx(s["digit3"], s["digitAlign"])} ref={digit3Ref}>
              {digit3.map((el, idx) => (
                <div className={s["num"]} key={idx}>{el}</div>
              ))}
            </div>
            <div className={clsx(s["digit4"], s["digitAlign"])}>%</div>
          </div>
          <div className={s["progressBar"]} ref={progressBarRef}/>
        </div>
      </div>
      {!isLoading && children}
    </div>
  )
}

export default Loader
