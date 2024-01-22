import Image from "next/image";
import { social } from "./data";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div
      className={`d-flex justify-content-between align-items-center  container-flud p-4`}
    >
      <p>© 2023 HexaShop. all rights reserved. </p>
      <div className={`d-flex`}>
        {social.map((media) => (
          <a className={`mx-2 ${styles.icon}`} href={media.url} key={media.id}>
            <Image
              width={25}
              height={25}
              src={`/images/${media.name}.png`}
              className={`rounded-circle`}
              alt={`HexaShop ${media.name} link`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
