"use client";

import { defaultFilterData } from "@/constants/filterData";
import { basic_url } from "@/constants/url";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function Update() {
  const router = useRouter();
  const id = useParams().id;

  const [content, setContent] = useState<FilterData>(defaultFilterData);

  useEffect(() => {
    fetch(`${basic_url}/${id}`)
      .then((response) => response.json())
      .then((result) => setContent(result));
  }, [id]);

  function onSubmit(e: any) {
    e.preventDefault();
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
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    };
    fetch(`http://localhost:9999/data/${id}`, options)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        router.refresh();
        router.push(`/detail/${result.id}`);
      });
  }

  return content ? (
    <form onSubmit={(e) => onSubmit(e)}>
      <p>
        <input
          required
          type="text"
          name="title"
          placeholder="제목"
          value={content?.title}
          onChange={(e) =>
            setContent((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
        />
      </p>
      <div>
        <p>
          밝기 :{" "}
          <input
            name="밝기"
            type="number"
            value={content?.밝기}
            onChange={(e) =>
              setContent((prev) => {
                return { ...prev, 밝기: e.target.value };
              })
            }
          />
        </p>
        <p>
          대비 :{" "}
          <input
            name="대비"
            type="number"
            value={content?.대비}
            onChange={(e) =>
              setContent((prev) => {
                return { ...prev, 대비: e.target.value };
              })
            }
          />
        </p>
        <p>
          구조 :{" "}
          <input
            name="구조"
            type="number"
            value={content?.구조}
            onChange={(e) =>
              setContent((prev) => {
                return { ...prev, 구조: e.target.value };
              })
            }
          />
        </p>
        <p>
          온도 :{" "}
          <input
            name="온도"
            type="number"
            value={content?.온도}
            onChange={(e) =>
              setContent((prev) => {
                return { ...prev, 온도: e.target.value };
              })
            }
          />
        </p>
        <p>
          채도 :{" "}
          <input
            name="채도"
            type="number"
            value={content?.채도}
            onChange={(e) =>
              setContent((prev) => {
                return { ...prev, 채도: e.target.value };
              })
            }
          />
        </p>
        <p>
          흐리게 :{" "}
          <input
            name="흐리게"
            type="number"
            value={content?.흐리게}
            onChange={(e) =>
              setContent((prev) => {
                return { ...prev, 흐리게: e.target.value };
              })
            }
          />
        </p>
        <p>
          하이라이트 :{" "}
          <input
            name="하이라이트"
            type="number"
            value={content?.하이라이트}
            onChange={(e) =>
              setContent((prev) => {
                return { ...prev, 하이라이트: e.target.value };
              })
            }
          />
        </p>
        <p>
          그림자 :{" "}
          <input
            name="그림자"
            type="number"
            value={content?.그림자}
            onChange={(e) =>
              setContent((prev) => {
                return { ...prev, 그림자: e.target.value };
              })
            }
          />
        </p>
        <p>
          선명하게 :{" "}
          <input
            name="선명하게"
            type="number"
            value={content?.선명하게}
            onChange={(e) =>
              setContent((prev) => {
                return { ...prev, 선명하게: e.target.value };
              })
            }
          />
        </p>
      </div>
      <button type="submit">완료</button>
    </form>
  ) : (
    <div>Loading...</div>
  );
}
