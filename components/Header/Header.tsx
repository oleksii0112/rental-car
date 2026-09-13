"use client";

import css from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

  const pathname = usePathname();
  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        Rental<span>Car</span>
      </Link>
      <nav className={css.nav}>
        <ul className={css.navigation}>
          <li>
            <Link
              className={`${css.home} ${pathname === "/" ? css.isActive : ""}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${css.catalog} ${pathname.startsWith("/catalog") ? css.isActive : ""}`}
              href="/catalog"
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
