import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  const data = await getData();
  const products = data.products;

  return (
    <div className={`${styles.mainContainer}`}>
      {products.map((item) => (
        <Link
          href={`/blog/${item.id}`}
          className={`${styles.post}`}
          key={item.id}
        >
          <div className={`${styles.imgContainer}`}>
            <Image
              src={item.thumbnail}
              width={300}
              height={300}
              alt="post image"
              className={`${styles.image}`}
            />
          </div>
          <div className={`${styles.content}`}>
            <h1 className={`${styles.title}`}>{item.title}</h1>
            <p className={`${styles.des}`}>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
