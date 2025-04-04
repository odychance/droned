import s from './styles.module.scss'
import { useEffect, useRef } from 'react'
import circleBlur from '/src/assets/images/circle-blur.png'
import clsx from 'clsx'
import Image from 'next/image'
import MostSelled from '../PageComponents/HomePage/Hero/MostSelled'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Description = ({drones, className, title}) => {
  const titleRef = useRef(null)
  
  useEffect(() => {
    gsap.set(titleRef.current, {
      y: 100,
      opacity: 0
    })

    gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "center 90%",
        end: "center 90%",
        toggleActions: "play none reverse none"
      }
    })
  }, [])

  return (
    <div className={clsx(s["container-description"], className)}>
      {drones.name && <h2 className={s["title"]} ref={titleRef}>{title}</h2>}
      {drones?.length > 0 && drones?.map((item, idx) => (
        <div className={s["wrapper"]} key={idx}>
          <div className={s["text-container"]}>
            {item.name && <p className={s["name"]}>{item.name}</p>}
            {item.description && <p className={s["description"]}>{item.description}</p>}
            {item.price && <p className={s["price"]}>Price: <span className={s["ammount"]}>${item.price}</span></p>}
          </div>
          <Image src={item.imageUrl} className={s["image"]} alt="image"/>
          <Image src={circleBlur} className={s["circle-blur"]} alt="image"/>
        </div>
      ))}
      {drones.name && <MostSelled drones={drones} />}
    </div>
  )
}

export default Description