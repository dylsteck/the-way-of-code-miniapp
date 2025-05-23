import type { Metadata } from "next";

import "~/app/globals.css";

export const metadata: Metadata = {
  title: "The Way of Code",
  description: "A The Way of Code app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
