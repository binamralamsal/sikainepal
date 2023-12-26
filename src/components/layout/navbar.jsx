"use client";

import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navbarOpened, setNavbarOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        return setScrolled(true);
      }

      return setScrolled(false);
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleNavbar = () => setNavbarOpened((prev) => !prev);

  return (
    <header
      className={clsx([styles.navbarWrapper, scrolled && styles.scrolled])}
    >
      <div className={clsx(["container", styles.navbarContainer])}>
        <Link href="/" className={styles.logo}>
          SikaiNepal
        </Link>

        <button
          aria-controls="primary-navigation"
          aria-expanded={navbarOpened}
          aria-label="toggle navigation"
          className={clsx([
            styles.mobileNavToggle,
            navbarOpened && styles.active,
          ])}
          onClick={handleToggleNavbar}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={clsx([
            styles.primaryNavigation,
            navbarOpened && styles.active,
          ])}
        >
          <ul className={styles.navLinks}>
            <li>
              <Link
                className={styles.navLink}
                href="/"
                onClick={handleToggleNavbar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                href="/courses"
                onClick={handleToggleNavbar}
              >
                Courses{" "}
              </Link>
            </li>

            <li>
              <Link
                className={styles.navLink}
                href="/about"
                onClick={handleToggleNavbar}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className={styles.navLink}
                href="/contact"
                onClick={handleToggleNavbar}
              >
                Contact
              </Link>
            </li>
            <SignedIn>
              <li>
                <Link
                  className={styles.navLink}
                  href="/dashboard"
                  onClick={handleToggleNavbar}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <UserButton afterSignOutUrl="/" />
              </li>
            </SignedIn>

            <SignedOut>
              <li>
                <Link
                  className={styles.navLink}
                  href="/sign-in"
                  onClick={handleToggleNavbar}
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navLink}
                  href="/sign-up"
                  onClick={handleToggleNavbar}
                >
                  Sign Up
                </Link>
              </li>
            </SignedOut>
          </ul>
        </nav>
      </div>
    </header>
  );
}
