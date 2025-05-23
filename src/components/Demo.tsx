"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Demo() {
  const router = useRouter();
  useEffect(() => {
    router.push("https://www.thewayofcode.com/");
  }, [router]);
  return null;
}
