import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Travel Booking",
  description:
    "Explore curated tours effortlessly with our travel app. Your gateway to unforgettable adventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}