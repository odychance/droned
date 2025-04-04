import Image from 'next/image'
import s from './styles.module.scss'
import circleBlur from '../../assets/images/circle-blur.png'
import { Bounded } from '..'
import { Button } from '..'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CallToAction = ({cta}) => {

  const textRef = useRef(null)
  const titleRef = useRef(null)
  const buttonRef = useRef(null)

  const splitText = () => {
    const text = textRef.current.innerText
    const splitTextArray = text.split(" ")

    textRef.current.innerHTML = ""
    splitTextArray.forEach((word, idx) => {
      const span = document.createElement("span")
      span.innerText = word
      textRef.current.appendChild(span)
      textRef.current.appendChild(document.createTextNode(" "))
    })
  }

  useEffect(() => {
    splitText()
    const tl = gsap.timeline()

    const anim = gsap.fromTo(textRef.current.children, {
      opacity: 0,
      y: 10,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%",
        end: "top 70%",
        toggleActions: "play none reverse none"
      }
    })

    const titleAnim = gsap.fromTo(titleRef.current, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "top 80%",
        toggleActions: "play none reverse none",
      }
    })

    const buttonAnim = gsap.fromTo(buttonRef.current, {
      opacity: 0,
      scale: 1.5
    }, {
      opacity: 1,
      scale: 1,
      ease: "power2.inOut",
      duration: .5,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 60%",
        end: "top 60%",
        toggleActions: "play none reverse none",
      }
    })

    return () => {
      anim.kill()
      titleAnim.kill()
      buttonAnim.kill()
    }
  },[])

  return (
    <Bounded className={s["container-cta"]}>
      <div className={s["container-text"]}>
        <p ref={titleRef}>Discover the latest drone technologies</p>
        <span ref={textRef}>Travel through our exclusive drone website, designed to capture magical moments, explore new horizons and enjoy the latest technology. Whether for personal or professional use, we have the perfect drone for you! Increase your possibilities!</span>
      </div>
      {cta && (
        <Button ref={buttonRef} className={s["call-to-action"]} arrowIcon>
          <p>{cta}</p>
        </Button>
      )}
      <Image src={circleBlur} className={s["circle-blur"]} alt="image"/>
    </Bounded>
  )
}

export default CallToAction