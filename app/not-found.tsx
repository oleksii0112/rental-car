import css from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "This page is shown when a user tries to visit a nonexistent page",
  openGraph: {
    title: "404 - Page Not Found",
    description:
      "This page is shown when a user tries to visit a nonexistent page",
    url: `/`,
    siteName: "RentalCar",
    images: [
      {
        url: "/maserati.jpg",
        width: 1200,
        height: 630,
        alt: "404 - Page not found",
      },
    ],
    type: "website",
  },
};

const NotFound = () => {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className={css.link}>
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
