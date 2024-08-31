import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoodiFy - Chatbot that judges people's current behavior and tells their mood",
  description: "Chatbot that judges people's current behavior and tells their mood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
