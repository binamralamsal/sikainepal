import styles from "./page.module.css";
import { CourseCard } from "@/components/cards/courses-card";
import { connectToDatabase } from "@/lib/connect-db";
import { Course } from "@/models/course";
import clsx from "clsx";
import { CourseSearchInput } from "./course-search-input";

export default async function Page(props) {
  await connectToDatabase();

  let searchQuery = {};

  if (props.searchParams.search) {
    searchQuery.title = new RegExp(props.searchParams.search, "i");
  }
  const courses = await Course.find(searchQuery).sort("-createdAt");

  return (
    <div className={clsx("container", styles.coursePageWrapper)}>
      <div className="even-columns">
        <h1 className={styles.pageTitle}>All Courses</h1>
        <CourseSearchInput />
      </div>

      <div className="courseGrid">
        {courses.map((course) => (
          <CourseCard
            author={course.author}
            price={course.price}
            title={course.title}
            key={course._id}
            slug={course.slug}
            featuredImage={course.featuredImage}
          />
        ))}
      </div>
    </div>
  );
}
