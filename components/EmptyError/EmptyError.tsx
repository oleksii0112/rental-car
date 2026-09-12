"use client"

import Image from "next/image";
import css from "./EmptyError.module.css";

export default function EmptyError() {
  return (
    <div className={css.container}>
      <div className={css.imgWrapper}>
        <Image
          src="/error.png"
          alt="A car under a loupe"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={css.contentWrapper}>
        <h2 className={css.title}>No cars found</h2>
        <p className={css.description}>
          We couldn`t find any cars that match your current filters. Try
          changing your search criteria or reset the filters.
        </p>
      </div>
      <button className={css.reset}>Reset filters</button>
    </div>
  );
}
