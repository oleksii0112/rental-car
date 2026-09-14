"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import css from "./EmptyError.module.css";

export default function EmptyError() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={css.container}>
      <div className={css.imgWrapper}>
        <Image
          src="/error.png"
          alt="A car under a loupe"
          fill
          sizes="413px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={css.contentWrapper}>
        <h2 className={css.title}>No cars found</h2>
        <p className={css.description}>
          We couldn&apos;t find any cars that match your current filters. Try
          changing your search criteria or reset the filters.
        </p>
      </div>
      <button className={css.reset} onClick={() => router.replace(pathname)}>
        Reset filters
      </button>
    </div>
  );
}
