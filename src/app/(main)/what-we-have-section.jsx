import clsx from "clsx";
import styles from "./what-we-have-section.module.css";
import Image from "next/image";
import nepaliPaintingsPhoto from "@/assets/images/nepali-paintings.jpg";
import { Button } from "@/components/ui/button";

export function WhatWeHave() {
  return (
    <div className={clsx("container even-columns", styles.wrapper)}>
      <div className={styles.imageWrapper}>
        <Image
          src={nepaliPaintingsPhoto}
          alt="Weaving Dhaka"
          height={500}
          className={styles.sectionImage}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.title}>What We Have?</h2>
          <p className={styles.caption}>
            Explore a range of traditional Nepali skills on SikaiNepal
          </p>
        </header>

        <div>
          <dl className={styles.stuffList}>
            <dt>Painting</dt>
            <dd>
              Journey into Nepali painting, a vivid tapestry of various types of
              nepali traditional paintings.
            </dd>

            <dt>Weaving</dt>
            <dd>
              Discover the art of traditional Nepali weaving, from Dhaka
              patterns to basket (doko), handlooms, etc.
            </dd>

            <dt>Pottery</dt>
            <dd>
              Pottery in Nepal is a revered craft, with artisans utilizing
              traditional methods to create both functional and artistic ceramic
              pieces.
            </dd>

            <dt>Traditional Dance</dt>
            <dd>
              Traditional Dance forms in Nepal hold cultural significance, with
              each dance style portraying stories and rituals passed down
              through generations.
            </dd>

            <dt>Sculpture</dt>
            <dd>
              Uncover the essence of Nepali heritage in the craft of statue
              making, where skilled hands mold cultural stories into timeless
              forms.
            </dd>
          </dl>

          <Button href="/about" className={styles.learnBtn}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
