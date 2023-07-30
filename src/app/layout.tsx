import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "Git Card",
  description: "GitHub Card Generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
