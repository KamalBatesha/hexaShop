import React from "react";
import styles from "./logo.module.css";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const logoFont = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

export default function Logo() {
  return (
    <Link href="/" className={`${styles.logo} ${logoFont.className}`}>
      HexaShop
    </Link>
  );
}
