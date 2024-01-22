import Image from "next/image";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Post({ params }) {
  const product = await getData(params.id);
  return (
    <div className={styles.mainContainer}>
      <header>
        <div>
          <h1 className={`${styles.title}`}>{product.title}</h1>
          <p className={`${styles.des}`}>{product.description}</p>
        </div>
        <div className={`${styles.imageContainer}`}>
          <Image
            src={product.thumbnail}
            fill={true}
            alt="post image"
            className={`${styles.imagePost}`}
          />
          <span className={styles.auther}>{product.category}</span>
        </div>
        <div>
          <div className={styles.gallery}>
            {product.images.map((img) => (
              <img key={product.id} src={img} alt={product.title} />
            ))}
          </div>
          <p className={`${styles.text}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            consequatur necessitatibus nam id ipsa, ducimus a dicta, cumque
            suscipit, est repellat et at excepturi quidem voluptatem vel. Sit
            quam maxime placeat necessitatibus veniam, atque ullam fugiat, vel
            sequi reiciendis quo velit. Provident necessitatibus dolore sunt ab,
            maiores aut voluptatibus omnis!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Omnis consequatur necessitatibus nam
            id ipsa, ducimus a dicta, cumque suscipit, est repellat et at
            excepturi quidem voluptatem vel. Sit quam maxime placeat
            necessitatibus veniam, atque ullam fugiat, vel sequi reiciendis quo
            velit. Provident necessitatibus dolore sunt ab, maiores aut
            voluptatibus omnis!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis consequatur necessitatibus nam id ipsa,
            ducimus a dicta, cumque suscipit, est repellat et at excepturi
            quidem voluptatem vel. Sit quam maxime placeat necessitatibus
            veniam, atque ullam fugiat, vel sequi reiciendis quo velit.
            Provident necessitatibus dolore sunt ab, maiores aut voluptatibus
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            consequatur necessitatibus nam id ipsa, ducimus a dicta, cumque
            suscipit, est repellat et at excepturi quidem voluptatem vel. Sit
            quam maxime placeat necessitatibus veniam, atque ullam fugiat, vel
            sequi reiciendis quo velit. Provident necessitatibus dolore sunt ab,
            maiores aut voluptatibus omnis!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Omnis consequatur necessitatibus nam
            id ipsa, ducimus a dicta, cumque suscipit, est repellat et at
            excepturi quidem voluptatem vel. Sit quam maxime placeat
            necessitatibus veniam, atque ullam fugiat, vel sequi reiciendis quo
            velit. Provident necessitatibus dolore sunt ab, maiores aut
            voluptatibus omnis!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis consequatur necessitatibus nam id ipsa,
            ducimus a dicta, cumque suscipit, est repellat et at excepturi
            quidem voluptatem vel. Sit quam maxime placeat necessitatibus
            veniam, atque ullam fugiat, vel sequi reiciendis quo velit.
            Provident necessitatibus dolore sunt ab, maiores aut voluptatibus
            omnis!
          </p>
        </div>
      </header>
    </div>
  );
}
