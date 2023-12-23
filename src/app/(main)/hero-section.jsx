import styles from "./hero-section.module.css";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import heroImage from "@/assets/images/hero-1.png";
import clsx from "clsx";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section aria-labelledby="hero-title" className={styles.heroSection}>
      <div className={clsx(["container even-columns", styles.heroContainer])}>
        <div>
          <header>
            <span className={clsx("color-accent", styles.preTitle)}>
              Better learning future with us
            </span>
            <h1 className={styles.title} id="hero-title">
              Committed To Learn Excellence In Education
            </h1>
          </header>
          <p className={styles.caption}>
            It is long established that a reader will be distracted by the
            readable popular and best content.
          </p>

          <div className={styles.btnGroup}>
            <Button href="/courses">
              <span>Courses</span>
              <IconArrowRight height={18} />
            </Button>
            <Button href="/about" variant="lightSecondary">
              Learn More
            </Button>
          </div>
        </div>

        <div>
          <Image src={heroImage} height={600} />
        </div>
      </div>
    </section>
  );
};
