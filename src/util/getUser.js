import { connectToDatabase } from "@/lib/connect-db";
import { Course } from "@/models/course";
import { User } from "@/models/user";
import { currentUser } from "@clerk/nextjs";

export async function getUser() {
  const clerkUser = await currentUser();

  if (!clerkUser) return null;

  await connectToDatabase();

  let user = await User.findById(clerkUser.id).populate("coursesEnrolled");
  if (!user) {
    user = await User.create({ _id: clerkUser.id });
  }

  return { clerk: clerkUser, ...user._doc };
}
