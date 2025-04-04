import s from './styles.module.scss'
import Image from 'next/image'
import circleBlur from '/src/assets/images/circle-blur.png'

import { Bounded } from '/src/components'
import { MAIN_DRONE, DRONE_INVENTORY } from "/src/utils/constants"
import React from 'react'
import TargetProduct from './TargetProduct'

const CollectionPage = () => {
  const allItems = [ MAIN_DRONE, ...DRONE_INVENTORY ]

  return (
    <Bounded safearea>
      <div className={s["main-container"]}>
        <Image src={circleBlur} className={s["circle-blur"]} alt="circle blur"/>
        <TargetProduct allItems={allItems} />
      </div>
    </Bounded>
  )
}

export default CollectionPage