import css from "./not-found.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "This page is shown when a user tries to visit a nonexistent page",
};

const NotFound = () => {
  return (
    <section className={css.wrapper}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.text}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className={css.link}>
        Go back home
      </Link>
    </section>
  );
};

export default NotFound;
