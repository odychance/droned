import { Bounded } from '/src/components'
import s from './styles.module.scss'
import Image from 'next/image'
import bgImage from '/src/assets/images/real-images/drone7.jpg'
import { REVIEW_PRODUCTS } from '/src/utils/constants'
import star from '/src/assets/svg/star.svg'
import comment from '/src/assets/svg/comment.svg'
import { Modal } from '/src/components'
import { FormComment } from './components'

const BlogPage = () => {
  return (
    <Bounded safearea>
      <div className={s["main-container"]}>
        <div className={s["bg-image"]}>
          <Image src={bgImage} alt="image" className={s["image"]}/>
          <div className={s["gradient-color"]} />
        </div>
        <h2 className={s["title"]}>Comments of our clients</h2>
        <div className={s["comments-container"]}>
          <div className={s["button-add-comment"]}>
            <Image src={comment} className={s["comment-icon"]} alt="comment"/>
          </div>
          <div className={s["gray-line"]}/>
          {REVIEW_PRODUCTS.map((item, idx) => (
            <div className={s["comment"]} key={idx}>
              <Image src={item.icon} alt="img prof" className={s["icon"]} />
              <div className={s["info-comment"]}>
                <p className={s["name"]}>{item.name}</p>
                <span className={s["post"]}>{item.comment}</span>
                <span className={s["email"]}>{item.email}</span>
                <span className={s["date"]}>posted: <span className={s["total-date"]}>{item.date}</span></span>
                <div className={s["target-product"]}>
                  <span className={s["about"]}>About: <span className={s["product-name"]}>{item.product}</span></span>
                  <span className={s["rated"]}>Rated:
                    {Array.from({ length: Math.floor(item.rating) }).map((_, idx) => (
                      <Image key={idx} src={star} className={s["star-icon"]} alt="star icon" />
                    ))}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Modal>
        <FormComment />
      </Modal> */}
    </Bounded>
  )
}

export default BlogPage