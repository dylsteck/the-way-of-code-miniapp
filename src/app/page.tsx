import { Metadata } from "next";
import App from "./app";
import { APP_URL } from "~/lib/utils";

const frame = {
  version: "next",
  imageUrl: `${APP_URL}/vibecoding.jpeg`,
  button: {
    title: "Start Vibing",
    action: {
      type: "launch_frame",
      name: "The Way of Code",
      url: APP_URL,
      splashImageUrl: `${APP_URL}/icon.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "The Way of Code",
    openGraph: {
      title: "The Way of Code",
      description: "A The Way of Code app.",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return (
    <App />
  );
}
