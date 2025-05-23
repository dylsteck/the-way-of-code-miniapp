"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { sdk } from "@farcaster/frame-sdk";

export default function Demo() {
  const router = useRouter();
  const [isCBW, setIsCBW] = useState<boolean>(false);
  const [isInMiniApp, setIsInMiniApp] = useState<boolean>(false);

  useEffect(() => {
    const init = async() => {
      const inMiniApp = await sdk.isInMiniApp();
      const context = await sdk.context;
      if(inMiniApp && context){
        await sdk.actions.ready();
        setIsCBW(context.client.clientFid === 399519);
      }
      setIsInMiniApp(inMiniApp)
    }
    init();
  }, [isCBW, isInMiniApp]);

  if(isInMiniApp && isCBW){
    return <iframe src="https://www.thewayofcode.com/" className="w-screen h-screen border-0" />
  } else if(isInMiniApp && !isCBW){
    router.push("https://www.thewayofcode.com/");
  }

  return null;
}
