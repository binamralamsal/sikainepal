import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { Course } from "@/models/course";
import { getUser } from "@/util/getUser";
import { redirect } from "next/navigation";
import path from "path";
import { writeFile } from "fs/promises";
import { Input } from "@/components/ui/input";
import clsx from "clsx";

function slugify(str) {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
}

async function createNewCourse(formData) {
  "use server";

  const user = await getUser();

  const title = formData.get("title");
  const description = formData.get("description");
  const price = formData.get("price");
  const slug = slugify(title);
  const file = formData.get("featuredImage");

  if (!file) {
    throw new Error("No file uploaded");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const urlPath = `/uploads/${Math.random()}-${file.name}`;
  const filePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "..",
    "..",
    "public",
    urlPath
  );
  await writeFile(filePath, buffer);

  const course = await Course.create({
    title,
    description,
    price,
    author: user._id,
    slug,
    featuredImage: urlPath,
  });

  redirect("/dashboard");
}

export default function Page() {
  return (
    <div className="container">
      <h1>New Course</h1>

      <form action={createNewCourse} className={styles.formWrapper}>
        <div className={styles.control}>
          <label htmlFor="featuredImage">Featured Image</label>
          <input type="file" name="featuredImage" id="featuredImage" required />
        </div>

        <div className={clsx("even-columns", styles.inputGroups)}>
          <div className={styles.control}>
            <label htmlFor="title">Title</label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Course Title"
              required
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="price">Price Rs.</label>
            <Input
              type="number"
              name="price"
              id="price"
              placeholder="Price here"
              required
            />
          </div>
        </div>

        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <Input
            textArea
            name="description"
            id="description"
            rows={5}
            cols={100}
            placeholder="Write your description here...."
            required
          />
        </div>

        <Button className={styles.addBtn}>Add Course</Button>
      </form>
    </div>
  );
}
