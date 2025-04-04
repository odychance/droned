import s from './styles.module.scss'
import Image from 'next/image'
import truck from '/src/assets/svg/truck.svg'
import chat from '/src/assets/svg/chat.svg'
import shield from '/src/assets/svg/shield.svg'
import circleBlur from '/src/assets/images/circle-blur.png'

const StoreTrust = () => {
  const qualities = [
    {
      title: "Very fast",
      description: "Delivery in 24/48 hours.",
      icon: truck
    },
    {
      title: "Reliable and safe",
      description: "We track your order until the moment of delivery.",
      icon: shield
    },
    {
      title: "Customer service",
      description: "Agent available 24/7",
      icon: chat
    },
  ]

  return (
    <div className={s["container-trust"]}>
      <p className={s["hook-question"]}>Why choose our store?</p>
      <div className={s["container-center"]}>
      <Image src={circleBlur} alt="bg blur" className={s["circle-blur"]}/>
        { qualities.map((item, idx) => (
          <div className={s["wrapper"]} key={idx}>
            <Image src={item.icon} className={s["icon"]} alt="image" />
            <div className={s["info"]}>
              <p className={s["info-title"]}>{item.title}</p>
              <p className={s["info-description"]}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoreTrust