import { basic_url } from "@/constants/url";

export default async function Home() {
  const response = await fetch(basic_url, {
    cache: "no-store",
  });
  const data: Data[] = await response.json();

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.sort === "아이폰" ? "🍎" : "📷"}{" "}
          <a href={`detail/${item.id}`}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
