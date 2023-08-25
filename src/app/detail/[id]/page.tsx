import { basic_url } from "@/constants/url";

export default async function Detail(props: any) {
  const response = await fetch(`${basic_url}/${props.params.id}`, {
    cache: "no-store",
  });
  const data: FilterData = await response.json();

  return (
    <>
      <h2>{data.title}</h2>
      <h5>{data.tags}</h5>
      {data.sort === "인스타" ? (
        <ul>
          <li>밝기: {data.밝기}</li>
          <li>대비: {data.대비}</li>
          <li>구조: {data.구조}</li>
          <li>온도: {data.온도}</li>
          <li>채도: {data.채도}</li>
          <li>흐리게: {data.흐리게}</li>
          <li>하이라이트: {data.하이라이트}</li>
          <li>그림자: {data.그림자}</li>
          <li>선명하게: {data.선명하게}</li>
        </ul>
      ) : (
        <div>아이폰은 준비중!</div>
      )}
    </>
  );
}
