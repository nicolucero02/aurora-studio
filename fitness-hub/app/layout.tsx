import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/components/app-provider";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Fitness Hub",
  description: "Modern fitness and gym platform built with Next.js, TypeScript and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProvider>
          <SiteShell>{children}</SiteShell>
        </AppProvider>
      </body>
    </html>
  );
}
