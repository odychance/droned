import { Button } from '/src/components'
import s from './styles.module.scss'
import Product from './product'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TargetProduct = ({ allItems }) => {
  const textRef = useRef(null)
  const targetRef = useRef(null)
  const productRef = useRef(null)
  
  useEffect(() => {
    const splitText = () => {
      const text = textRef?.current?.innerText
      const splitTextArray = text.split(" ")
  
      textRef.current.innerHTML = ""
      splitTextArray.forEach( word => {
        const span = document.createElement("span")
        span.innerText = word
        textRef.current.appendChild(span)
        textRef.current.appendChild(document.createTextNode(" "))
      })
    }

    splitText()
    const tl = gsap.timeline()

    const anim = gsap.fromTo(textRef.current.children, {
      opacity: 0,
      y: 10,
    }, {
      opacity: 1,
      y: 0,
      duration: 2,
      stagger: 0.25,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%",
        end: "top 70%",
        toggleActions: "play none reverse none"
      }
    })


    tl.set(targetRef.current.children, {
      opacity: 0,
      y: 100
    })
    tl.to(targetRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: targetRef.current,
        scrub: true,
        start: "top 50%",
        end: "top 40%",
        toggleActions: "play none reverse none"
      }
    })

    return () => {
      anim.kill()
    }

  }, [])
  return (
    <div className={s["main-container"]}>
      <h2 className={s["drone-target-title"]} ref={textRef}>Discover Our Drone Collection: <br/><span className={s["text-orange"]}> Flight, Innovation and Fun.</span></h2>
      <div className={s["wrapper-products"]}>
        <div className={s["wrapper"]} ref={targetRef}>
          {allItems.map((item, idx) => (
            <Product item={item} key={idx} ref={productRef}/>
          ))}
        </div>
        <Button className={s["button"]} arrowIcon arrowClassName={s["arrow-class"]}>Go to cart</Button>
      </div>
    </div>
  )
}

export default TargetProduct