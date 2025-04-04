import React from 'react'
import s from './styles.module.scss'
import logo from '/src/assets/svg/logo.svg'
import Image from 'next/image'
import { Button } from '..'
import facebook from '/src/assets/images/network-icons/facebook.png'
import instagram from '/src/assets/images/network-icons/instagram.png'
import linkedIn from '/src/assets/images/network-icons/linkedIn.png'
import gmail from '/src/assets/images/network-icons/gmail.png'

const Footer = () => {
  const legalLinks = [
    { title: "Terms and Conditions" },
    { title: "Privacy Policy" },
    { title: "Contact" },
    { title: "FAQ's" },
  ]

  const networkLinks = [
    { media: "Facebook", image: facebook },
    { media: "Instagram", image: instagram },
    { media: "LinkedIn", image: linkedIn },
    { media: "Gmail", image: gmail }
  ]

  return (
    <div className={s["container-footer"]}>
      <div className={s["container-info"]}>
        <Image src={logo} className={s["logo"]} alt="image"/>
        <div className={s["container-legal-links"]}>
          {legalLinks.map((item, idx) => (
            <Button className={s["button"]} key={idx}>{item.title}</Button>
          ))}
        </div>
        <div className={s["container-contact"]}>
          {networkLinks.map((item, idx) => (
            <Button className={s["network-item"]} key={idx}>
              <Image src={item.image} alt={`image ${item.image}`} className={s["network-image"]}/>
              <span className={s["network-name"]}>{item.media}</span>
            </Button>
          ))}
        </div>
      </div>
      <p className={s["copyright"]}>Copyright © 2025 DRONED - All rights reserved</p>
    </div>
  )
}

export default Footer