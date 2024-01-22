import styles from "./navbar.module.css";
import { links } from "./data";
import Link from "next/link";
import Logo from "@/elements/logo/Logo";
import Logout from "@/elements/button/logout";
import ModeToogle from "../modeToogle/modeToogle";
// import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {
  return (
    <div className={`${styles.container} container-fluid`}>
      <Logo />

      <div className={styles.links}>
        <ModeToogle />
        {links.map((link) => (
          <Link href={link.URL} key={link.id}>
            {link.title}
          </Link>
        ))}
        <Logout />
      </div>
    </div>
  );
}
