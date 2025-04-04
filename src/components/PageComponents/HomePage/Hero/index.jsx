import s from './styles.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import { Bounded, Button } from '/src/components'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Hero = ({MAIN_DRONE}) => {
  const heroRef = useRef(null)
  const title1Ref = useRef(null)
  const title2Ref = useRef(null)
  const buttonRef = useRef(null)
  const bgText1 = useRef(null)
  const bgText2 = useRef(null)
  const tl = gsap.timeline()

  
  useEffect(() => {
    gsap.set(heroRef.current, {
      x: 0,
      y: 100,
      opacity: 0
    })

    gsap.set([title1Ref.current, title2Ref.current, buttonRef.current], {
      y: 200,
      opacity: 0
    })

    gsap.set(bgText1.current, {
      x: 300,
      opacity: 0
    })

    gsap.set(bgText2.current, {
      x: -300,
      opacity: 0
    })

    gsap.to(heroRef.current, {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power2.inOut"
    })

    tl.to(title1Ref.current, {
      delay: 1,
      duration: .5,
      y: 0,
      opacity: 1,
      ease: "power2.inOut"
    })

    tl.to(title2Ref.current, {
      duration: .5,
      y: 0,
      opacity: 1,
      ease: "power2.inOut"
    })

    tl.to(buttonRef.current, {
      duration: 0,
      y: 0,
      opacity: 1,
      ease: "power2.inOut"

    })

    tl.to([bgText1.current, bgText2.current], {
      delay: -1,
      duration: 2,
      x: 0,
      opacity: 1,
      ease: "power2.inOut"
    })
  }, [])

  return (
    <Bounded className={s["container-hero"]} safearea>
      <div className={s["container-header"]} ref={heroRef}>
        <Image src={MAIN_DRONE.imageUrl} className={s["main-drone"]} alt="drone" />
        <p className={clsx(s["title"],s["title-top"])} ref={title1Ref}>DRONED</p>
        <p className={clsx(s["title"], s["title-bottom"])} ref={title2Ref}>A DIFFERENT STORE</p>
        <Button className={s["button"]} arrowIcon ref={buttonRef}>Discover Now</Button>
      </div>
      <div className={s["DJI-MINI"]}>
        <p className={s["soft-gray"]} ref={bgText1}>DJI Mini </p>
        <p className={s["light-gray"]} ref={bgText2}>DJI Mini </p>
      </div>
    </Bounded>
  )
}

export default Hero