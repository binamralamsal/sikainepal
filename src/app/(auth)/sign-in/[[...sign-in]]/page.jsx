import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      className="container"
      style={{
        display: "grid",
        placeItems: "center",
        height: "calc(100vh - 88px)",
      }}
    >
      <SignIn />
    </div>
  );
}
