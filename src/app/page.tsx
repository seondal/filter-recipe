import { basic_url } from "@/constants/url";
import Link from "next/link";

export default async function Home() {
  const response = await fetch(basic_url, {
    cache: "no-store",
  });
  const data: Data[] = await response.json();

  return (
    <div className="flex flex-wrap gap-8">
      {data.map((item) => (
        <Link href={`detail/${item.id}`}>
          <div
            key={item.id}
            className={`relative p-5 rounded-lg flex flex-col items-center justify-center ${
              item.sort === "아이폰" ? "bg-blue-100" : "bg-pink-200"
            }`}>
            <div className="absolute top-1 left-2">
              {item.sort === "아이폰" ? "🍎" : "📷"}
            </div>
            <div>{item.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
