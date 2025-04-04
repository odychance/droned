import s from './styles.module.scss'
import Image from 'next/image'
import circleBlur from '/src/assets/images/circle-blur.png'
import { Button } from '/src/components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const MostSelled = ({drones}) => {
  const containerRef = useRef(null)
  const nameRef = useRef(null)
  const mainImageRef = useRef(null)
  const droneImage1Ref = useRef(null)
  const droneImage2Ref = useRef(null)
  const info1Ref = useRef(null)
  const info2Ref = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        toggleActions: "play none reverse none",
        start: "top 60%",
        end: "top 60%",
      }
    })

    gsap.set([containerRef.current, mainImageRef.current, buttonRef.current], {
      y: 200,
      opacity: 0
    })

    gsap.set(nameRef.current, { opacity: 0 })
    gsap.set([droneImage1Ref.current, info2Ref.current], { opacity: 0, x: 200 })
    gsap.set([droneImage2Ref.current, info1Ref.current], { opacity: 0, x: -200 })
    
    tl.to(containerRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
    })

    tl.to(mainImageRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
    })

    tl.to(nameRef.current, {
      opacity: 1,
      duration: 1.5,
    }, "-=1")

    tl.to([droneImage1Ref.current, droneImage2Ref.current], {
      x: 0,
      opacity: 1,
      duration: 1.5
    }, "-=.5")

    tl.to([info1Ref.current, info2Ref.current], {
      x: 0,
      opacity: 1,
      duration: 1
    }, "-=.5")

    tl.to(buttonRef.current, {
      y: 0,
      opacity: 1,
      duration: 1
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className={s["container-main"]} ref={containerRef}>
      <Image alt="image" src={drones?.mainImagesAlternative?.image3} className={s["drone-alt"]} ref={mainImageRef}/>
      <h2 className={s["name"]} ref={nameRef}>{drones?.name}</h2>
      <Image alt="image" src={drones?.mainImagesAlternative?.image1} className={s["drone-alt2"]} ref={droneImage1Ref}/>
      <p className={s["advantage"]} ref={info1Ref}>{drones.advantage}</p>
      <Image alt="image" src={drones?.mainImagesAlternative?.image4} className={s["drone-alt3"]} ref={droneImage2Ref}/>
      <p className={s["description"]} ref={info2Ref}>{drones?.description}</p>
      <Button className={s["price"]} arrowIcon ref={buttonRef}>Price: ${drones?.price}</Button>
      <Image alt="image" src={circleBlur} className={s["circle-blur-main"]} />
      <div className={s["line-anim-1"]} />
      <div className={s["line-anim-2"]} />
    </div>
    )
}

export default MostSelled