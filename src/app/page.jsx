import Image from "next/image";
import styles from "./page.module.css";
import shopping from "../../public/images/shopping.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className={` row align-items-center`}>
      <div className={`col-lg-6 col-12 px-3`}>
        <Image
          src={shopping}
          alt="shopping photo "
          className=" w-75 m-auto d-block"
        />
      </div>
      <div className={`col-lg-6 col-12 px-5 mb-4`}>
        <h1 className={styles.title}>
          your best <br /> online shop <br /> destination
        </h1>
        <p className={styles.des}>
          descover the world of endless shopping possibilities at our online
          shop store . browser , choose and order your favorite products from
          the comfort of your home
        </p>
        <Link href="/blog">
          <button className={`${styles.shop_btn} btn`}>Shop Now</button>
        </Link>
      </div>
    </div>
  );
}
