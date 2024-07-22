import { Open_Sans } from "next/font/google";
import "react-phone-number-input/style.css";
import type { Metadata } from "next";
import { OpenSans } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "USAID",
  description:
    "How USAID's Orphanage Outreach Program is Touching Lives with Love and Support.",
  keywords: [
    "USAID",
    "Orphanage",
    "Outreach",
    "Program",
    "Touching",
    "Lives",
    "Love",
    "Support",
  ],
  publisher: "USAID",
  twitter: {
    creator: "@USAID",
    title: "USAID",
    description: "",
    images: "",
    site: "@usaid",
    card: "summary_large_image",
  },
  openGraph: {
    title: "usaid",
    description:
      "How USAID's Orphanage Outreach Program is Touching Lives with Love and Support.",
    images:
      "https://vn.usembassy.gov/wp-content/uploads/sites/124/2023/06/Untitled-design-6.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>
        {children}
        <div id="modal-root" />
      </body>
    </html>
  );
}
