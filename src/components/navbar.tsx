import Link from "next/link";
import styles from "./navbar.module.css";
import { clsx } from "clsx";

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={clsx([styles.navbarWrapper, "container"])}>
        <Link href="/" className={clsx([styles.navLink, styles.navLogo])}>
          SikaiNepal
        </Link>

        <nav className={styles.mainNavbar}>
          <ul>
            <li>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className={styles.navLink}>
                Courses
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.sideNavbar}></nav>
      </div>
    </header>
  );
}
