import css from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className={css.hero}>
      <Image
        src="/maserati.jpg"
        alt="White Maserati GranTurismo under sunlight"
        fill
        priority
        sizes="(max-aspect-ratio: 1/1) 207vh, 100vw"
        className={css.image}
      />
      <div className={css.overlay} />
      <div className={css.content}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <div className={css.descriptionWrapper}>
          <p className={css.description}>
            Reliable and <span className={css.nowrap}>budget-friendly</span>{" "}
            rentals <span className={css.nowrap}>for any journey</span>
          </p>
          <Link className={css.button} href="/catalog">
            View Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
