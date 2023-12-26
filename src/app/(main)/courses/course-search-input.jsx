"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export function CourseSearchInput() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchCourse(event) {
    event.preventDefault();

    router.push(`?search=${searchQuery}`);
    router.refresh();
  }

  return (
    <form onSubmit={handleSearchCourse}>
      <Input
        type="text"
        value={searchQuery}
        placeholder="Search Here..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}
