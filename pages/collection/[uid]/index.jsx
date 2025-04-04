import { useRouter } from "next/router";
import { DRONE_INVENTORY, MAIN_DRONE } from "/src/utils/constants";
import { Bounded, Button } from "/src/components";
import s from './styles.module.scss'
import Image from "next/image";
import star from '/src/assets/svg/star.svg'
import circuleBlur from '/src/assets/images/circle-blur.png'

const DroneDetails = () => {
  const router = useRouter();
  const { uid } = router.query;
  const allDrones = [ ...DRONE_INVENTORY, MAIN_DRONE]
  const x = allDrones.filter((item) => item.name === uid)
  const item = x[0]
  return (
    <Bounded safearea>
      <div className={s["main-container"]}>
        <h2 className={s["title"]}>{item?.name}</h2>
        <div className={s["container-item"]}>
          <div className={s["left-info"]}>
            <p className={s["description"]}>{item?.description}</p>
            <p className={s["advantage"]}>{item?.advantage}</p>
            {item?.stock > 0 ? <p className={s["available"]}>It's available, Buy now.</p> : <p className={s["empty"]}>Sorry, item not available.</p>}
          </div>
          <Image alt="image" src={item?.imageUrl} className={s["image-item"]}/>
          <Image alt="image" src={circuleBlur} className={s["circle-blur"]}/>
          <div className={s["right-info"]}>
              <p className={s["price"]}>Price: ${item?.price}</p>
            <p className={s["rated"]}>Rated: 
              {Array.from({ length: Math.floor(item?.rated) }).map((_, idx) => (
                <Image key={idx} src={star} className={s["star-icon"]} alt="star icon" />
              ))}
            </p>
            <p className={s["launched"]}>Release date: {item?.launched}</p>
          </div>
        </div>
        <Button addIcon className={s["button"]}>Add To Cart</Button>
      </div>
    </Bounded>
  );
};

export default DroneDetails;