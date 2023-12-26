import Image from "next/image";
import styles from "./courses-card.module.css";
import { clerkClient } from "@clerk/nextjs";
import Link from "next/link";

export async function CourseCard({
  title,
  author,
  price,
  slug,
  featuredImage,
}) {
  author = await clerkClient.users.getUser(author);

  return (
    <Link href={`/courses/${slug}`} className={styles.courseCard}>
      <Image
        src={featuredImage}
        alt={`${title} Cover photo`}
        height={500}
        width={500}
        className={styles.featuredImage}
      />

      <div className={styles.courseDetails}>
        <h3 className={styles.courseTitle}>{title}</h3>
        <p className={styles.authorName}>
          {author.firstName} {author.lastName}
        </p>
        <p className={styles.price}>{price === 0 ? "FREE" : `Rs. ${price}`}</p>
      </div>
    </Link>
  );
}
