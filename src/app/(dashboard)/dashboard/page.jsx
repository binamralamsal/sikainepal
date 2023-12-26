import { Button } from "@/components/ui/button";
import { Course } from "@/models/course";
import styles from "./page.module.css";
import { User } from "@/models/user";
import { getUser } from "@/util/getUser";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { CourseCard } from "@/components/cards/courses-card";
import clsx from "clsx";

function EnrolledCourses({ courses }) {
  if (courses.length === 0) {
    return <p>No courses enrolled</p>;
  }

  return (
    <div className="courseGrid">
      {courses.map((course) => (
        <CourseCard
          key={course._id}
          author={course.author}
          featuredImage={course.featuredImage}
          price={course.price}
          slug={course.slug}
          title={course.title}
        />
      ))}
    </div>
  );
}

export default async function Page() {
  const user = await getUser();

  return (
    <div className={clsx("container", styles.mainWrapper)}>
      <div className={styles.section}>
        <h1 className={styles.sectionTitle}>Enrolled Courses</h1>
        <EnrolledCourses courses={user.coursesEnrolled} />
      </div>

      <AuthorDetails user={user} />
    </div>
  );
}

async function AuthorDetails({ user }) {
  const courses = await Course.find({ author: user._id }).sort("-createdAt");

  async function handleBecomeAnAuthor(id) {
    "use server";

    await User.updateOne({ _id: id }, { author: true });
    revalidatePath("/dashboard/new");
  }

  return (
    <div className={clsx(styles.section, styles.authorSection)}>
      <h2 className={styles.sectionTitle}>Your Courses</h2>
      {user.author ? (
        <Button className={styles.sideBtn} size="small" href="/dashboard/new">
          Add Course
        </Button>
      ) : (
        <form action={handleBecomeAnAuthor.bind(null, user._id)}>
          <Button className={styles.sideBtn} size="small">
            Become An Author
          </Button>
        </form>
      )}

      <ul className={styles.authorCourses}>
        {courses.map((course) => (
          <li key={course._id}>
            <Link href={`/courses/${course.slug}`}>
              {course.title} - Rs. {course.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
