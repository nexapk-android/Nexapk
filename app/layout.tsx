import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexAPK — Fast APK Downloads",
  description: "Discover and download APK apps from NexAPK.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
