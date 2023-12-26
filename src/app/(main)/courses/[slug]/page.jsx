import { Button } from "@/components/ui/button";
import styles from "./page.module.css";
import { connectToDatabase } from "@/lib/connect-db";
import { Course } from "@/models/course";
import clsx from "clsx";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs";
import { User } from "@/models/user";
import { revalidatePath } from "next/cache";
import { clerkClient } from "@clerk/nextjs";

async function enrollUser(id, slug) {
  "use server";

  await connectToDatabase();

  const user = await currentUser();
  await User.updateOne(
    {
      _id: user.id,
    },
    {
      $addToSet: {
        coursesEnrolled: id,
      },
    }
  );

  revalidatePath(`/courses/${slug}`);
}

export default async function Page(props) {
  await connectToDatabase();
  const user = await currentUser();
  const course = await Course.findOne({ slug: props.params.slug });
  const courseEnrolled = await User.exists({
    _id: user?.id,
    coursesEnrolled: course._id,
  });
  const enrolledUsersCount = await User.countDocuments({
    coursesEnrolled: course._id,
  });

  const authorInfo = await clerkClient.users.getUser(course.author);

  return (
    <div className={styles.singleCoursePageWrapper}>
      <Image
        className={styles.courseImage}
        src={course.featuredImage}
        alt={`${course.title} Cover photo`}
        height={1000}
        width={1000}
      />

      <div className={clsx("container", styles.courseDetailsGrid)}>
        <div className={styles.courseDetails}>
          <h1 className={styles.courseTitle}>{course.title}</h1>
          <pre className={styles.courseDescription}>{course.description}</pre>
        </div>
        <div>
          <p className={styles.coursePrice}>Rs. {course.price}</p>
          <p>
            Prepared by{" "}
            <strong>
              {authorInfo.firstName} {authorInfo.lastName}
            </strong>
          </p>
          <p>{enrolledUsersCount} people have enrolled this course.</p>
          <form action={enrollUser.bind(null, course.id, course.slug)}>
            <Button
              className={styles.enrollBtn}
              href={courseEnrolled ? `/courses/${course.slug}/chapters` : null}
            >
              {courseEnrolled ? "Go to course" : "Enroll"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
