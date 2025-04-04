import Image from 'next/image'
import s from './style.module.scss'
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import drone1 from '/src/assets/images/real-images/drone1.jpeg'
import drone2 from '/src/assets/images/real-images/drone2.jpg'
import drone3 from '/src/assets/images/real-images/drone3.webp'
import drone4 from '/src/assets/images/real-images/drone4.webp'
import drone5 from '/src/assets/images/real-images/drone5.webp'
import drone6 from '/src/assets/images/real-images/drone6.jpg'
import drone7 from '/src/assets/images/real-images/drone7.jpg'
import drone8 from '/src/assets/images/real-images/drone8.webp'

gsap.registerPlugin(ScrollTrigger)

const DronePhotos = () => {
  const allImages = [ drone2, drone3, drone4, drone5, drone6, drone7, drone8 ]
  const textRef = useRef(null)

  useEffect(() => {
    const anim = gsap.fromTo(textRef.current, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: textRef.current,
        start: "bottom 100%",
        end: "bottom 100%",
        toggleActions: "play none reverse none",
      }
    })

    return () => {
      anim.kill()
    }
  }, [])
          
  return (
    <div className={s["container-photos"]} id="prueba">
      <div className={s["bg-sticky"]}>
        <Image src={drone1} alt="main image" className={s["bg-image"]}/>
        <p className={s["slogan"]} ref={textRef}>We don&apos;t just sell<br/> drones,<br/>we sell experiences.</p>
      </div>

      <div className={s["wrapper-images"]}>
        { allImages.map((item, idx) => (
          <Image src={item} key={idx} className={s["random-pictures"]} alt={`image ${item.key}`}/>
        ))}
      </div>
    </div>
  )
}

export default DronePhotos