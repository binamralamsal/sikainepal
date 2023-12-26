import styles from "./hero-section.module.css";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import heroImage from "@/assets/images/hero-1.jpg";
import clsx from "clsx";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section aria-labelledby="hero-title" className={styles.heroSection}>
      <div className={clsx(["container even-columns", styles.heroContainer])}>
        <div>
          <header>
            <span className={clsx("color-accent", styles.preTitle)}>
              Crafting Dreams, Nepali Streams
            </span>
            <h1 className={styles.title} id="hero-title">
              Empower through Skills, Enrich through Art
            </h1>
          </header>
          <p className={styles.caption}>
            Your gateway to unlocking hidden talents and embracing the rich
            tapestry of Nepali handicrafts. Explore, learn, and empower through
            skillful artistry.
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
          <Image
            src={heroImage}
            height={600}
            alt="A person making a painting"
          />
        </div>
      </div>
    </section>
  );
};
