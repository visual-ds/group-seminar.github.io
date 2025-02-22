import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/app/_components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visual Data Science Lab - Weekly Seminar",
  description: "Visual Data Science Lab - Weekly Seminar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen w-full`}
      >
        <SidebarProvider>
          <div>
            <AppSidebar />
            <SidebarTrigger />
          </div>
          <main className="flex-1 w-full">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>

  );
}