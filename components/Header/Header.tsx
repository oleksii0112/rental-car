import css from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        Rental<span>Car</span>
      </Link>
      <nav className={css.nav}>
        <ul className={css.navigation}>
          <li>
            <Link className={css.home} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={css.catalog} href="/catalog">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
