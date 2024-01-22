"use client";

import React from "react";
import styles from "./logout.module.css";

export default function Logout() {
  return (
    <button
      className={`btn ${styles.Logout_btn}`}
      onClick={() => {
        console.log("logout");
      }}
    >
      logout
    </button>
  );
}
