import type { Metadata } from "next";
import { Lato, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Lato for headings
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

// JetBrains Mono for monospace sections
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | UNIBEN Journal of Science, Technology and Innovation",
    default: "UNIBEN Journal of Science, Technology and Innovation",
  },
  description:
    "The UNIBEN Journal of Science, Technology and Innovation publishes peer-reviewed scholarship with African and global perspectives in law & society, history, languages, culture, philosophy, arts, and environmental humanities.",
  keywords: [
    "UNIBEN",
    "Science, Technology and Innovation",
    "Academic Journal",
    "Open Access",
    "Peer Review",
    "African Scholarship",
    "Law & Society",
    "History",
    "Languages",
    "Culture",
    "Philosophy",
    "Arts",
    "Environmental Humanities",
  ],
  openGraph: {
    title: "UNIBEN Journal of Science, Technology and Innovation",
    description:
      "Peer-reviewed scholarship with African and global perspectives in Science, Technology and Innovation",
    url: "https://journals.uniben.edu/humanities",
    siteName: "UNIBEN Journal of Science, Technology and Innovation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
