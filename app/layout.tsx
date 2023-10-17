import { ThemeProvider } from "@/components/client";

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JS Mastery",
  description:
    "Master Modern Web Development With a Project Based Approach. Gain real-world experience and land that dev job you've always imagined.",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image": "https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg", // CHANGE THIS
    "twitter:card": "summary_large_image",
    "og:url": "jsmastery.por",
    "og:image": "https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg", // CHANGE THIS
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white dark:bg-black-100 font-poppins">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
