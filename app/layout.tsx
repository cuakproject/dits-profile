import Providers from "@/components/providers";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { geistMono, geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya | Operations & Customer Support",
  description:
    "Operations and customer support with experience in high-volume digital transactions. Passionate about solving problems, improving efficiency, and building practical tools that help teams work better.",
  icons: [{ rel: "icon", url: "/hello.svg" }],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
