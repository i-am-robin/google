"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import local file

export default function Home() {
  const route = useRouter();

  useEffect(() => {
    route.push("/google/singin");
  }, []);
}
