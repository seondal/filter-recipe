import "./globals.css";
import type { Metadata } from "next";
import { Control } from "./components/Control";
import Link from "next/link";

export const metadata: Metadata = {
  title: "필터레시피",
  description: "당신을 위한 아이폰/인스타그램 사진 보정 레시피 모음",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kor">
      <body className="flex flex-col items-center p-10">
        <Link href="/">
          <h1>Filter Recipe</h1>
        </Link>
        {children}
        <Control />
      </body>
    </html>
  );
}
