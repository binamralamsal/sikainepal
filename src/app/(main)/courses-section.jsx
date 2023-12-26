import { CourseCard } from "@/components/cards/courses-card";
import styles from "./courses-section.module.css";
import { Course } from "@/models/course";
import { User } from "@/models/user";
import { connectToDatabase } from "@/lib/connect-db";
import clsx from "clsx";

export async function CoursesSection() {
  await connectToDatabase();
  const courses = await Course.find().limit(4).sort("-createdAt");

  return (
    <div className={clsx("container", styles.coursesSectionWrapper)}>
      <header className={styles.courseHeader}>
        <h2 className={styles.courseTitle}>Courses</h2>
        <p className={styles.caption}>
          Explore the learning of new path with our courses
        </p>
      </header>

      <div className="courseGrid">
        {courses.map((course) => (
          <CourseCard
            author={course.author}
            price={course.price}
            title={course.title}
            key={course._id}
            featuredImage={course.featuredImage}
            slug={course.slug}
          />
        ))}
      </div>
    </div>
  );
}
