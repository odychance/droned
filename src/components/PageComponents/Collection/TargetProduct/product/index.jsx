import React from 'react'
import s from './styles.module.scss'
import Image from 'next/image'
import { Button } from '/src/components'
import Link from 'next/link'

const Product = ({ item }) => {
  return (
    <div className={s["container-product"]}>
      <Image src={item.imageUrl} className={s["image-product"]} alt="image product" />
      <div className={s["wrapper"]}>
        <p className={s["item-name"]}>{item.name}</p>
        <p className={s["item-price"]}>Price: ${item.price}</p>
        <p className={s["item-stock"]}>{item.stock > 0 ? "Available" : "Out of stock"}</p>
      </div>
      <Link href={`/collection/${item.name}`}>
        <Button className={s["button"]}>Watch details</Button>
      </Link>
    </div>
  )
}

export default Product