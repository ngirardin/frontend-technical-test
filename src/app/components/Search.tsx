"use client";

import { useRouter } from "next/navigation";
import { Input } from "./Input";

export default function Search() {
  const router = useRouter();

  return (
    <Input
      type="search"
      placeholder="Search"
      onChange={(e) => router.push(`/?search=${e.target.value}`)}
    />
  );
}
