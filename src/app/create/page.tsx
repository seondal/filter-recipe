"use client";

import { basic_url } from "@/constants/url";
import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();

  function onSubmit(e: any) {
    e.preventDefault();
    console.log(e.target.title);
    const requestBody = {
      id: "",
      sort: "인스타",
      tags: "",
      title: e.target.title.value,
      content: "",
      밝기: e.target.밝기.value,
      대비: e.target.대비.value,
      구조: e.target.구조.value,
      온도: e.target.온도.value,
      채도: e.target.채도.value,
      흐리게: e.target.흐리게.value,
      하이라이트: e.target.하이라이트.value,
      그림자: e.target.그림자.value,
      선명하게: e.target.선명하게.value,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    };
    fetch(`${basic_url}`, options)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        router.refresh();
        router.push(`/detail/${result.id}`);
      });
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <p>
        <input required type="text" name="title" placeholder="제목" />
      </p>
      <div>
        <p>
          밝기 : <input name="밝기" type="number" />
        </p>
        <p>
          대비 : <input name="대비" type="number" />
        </p>
        <p>
          구조 : <input name="구조" type="number" />
        </p>
        <p>
          온도 : <input name="온도" type="number" />
        </p>
        <p>
          채도 : <input name="채도" type="number" />
        </p>
        <p>
          흐리게 : <input name="흐리게" type="number" />
        </p>
        <p>
          하이라이트 : <input name="하이라이트" type="number" />
        </p>
        <p>
          그림자 : <input name="그림자" type="number" />
        </p>
        <p>
          선명하게 : <input name="선명하게" type="number" />
        </p>
      </div>
      <button type="submit">완료</button>
    </form>
  );
}
