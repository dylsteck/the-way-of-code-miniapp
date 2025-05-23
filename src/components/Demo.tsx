"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { sdk } from "@farcaster/frame-sdk";

export default function Demo() {
  const router = useRouter();
  useEffect(() => {
    const init = async() => {
      const isInMiniApp = await sdk.isInMiniApp();
      if(isInMiniApp){
        await sdk.actions.ready();
        router.push("https://www.thewayofcode.com/");
      }
    }
    init();
  }, [router]);
  return null;
}
