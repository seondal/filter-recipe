import "./globals.css";
import type { Metadata } from "next";
import { Control } from "@/components/Control";
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
      <body className="">
        <div className="fixed top-0 inset-x-0 bg-inherit h-24 flex justify-center items-center z-10">
          <Link href="/">
            <h1 className="m-0">Filter Recipe</h1>
          </Link>
        </div>
        <div className="flex flex-col items-center py-24 px-8 z-0">
          {children}
        </div>
        <div className="fixed bottom-0 inset-x-0 bg-inherit justify-center h-24 z-10">
          <Control />
        </div>
      </body>
    </html>
  );
}
