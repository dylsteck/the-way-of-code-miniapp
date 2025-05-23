import { Metadata } from "next";
import App from "./app";

const appUrl = process.env.NEXT_PUBLIC_URL || 'https://the-way-of-code-miniapp.vercel.app';

const frame = {
  version: "next",
  imageUrl: `${appUrl}/vibecoding.jpeg`,
  button: {
    title: "Launch Frame",
    action: {
      type: "launch_frame",
      name: "The Way of Code",
      url: appUrl,
      splashImageUrl: `${appUrl}/icon.png`,
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
