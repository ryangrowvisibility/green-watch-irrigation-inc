import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Libre_Baskerville({ subsets: ["latin"], weight: ["700"], variable: "--font-heading" });
const body = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Green Watch Irrigation Inc. | Lawn Sprinkler Installation & Repair in Toronto and the GTA",
  description:
    "Automated lawn sprinkler systems designed, installed and serviced across Toronto and the GTA. Most installs done in one day. 5.0 stars on Google. Call or text (647) 540-6152.",
  openGraph: {
    title: "Green Watch Irrigation Inc. | Toronto & GTA Lawn Sprinklers",
    description: "Sprinkler systems that save water, money and time. Call or text (647) 540-6152.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
