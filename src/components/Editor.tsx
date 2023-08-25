"use client";

import { instaProperty, iphoneProperty } from "@/constants/filterData";
import { basic_url } from "@/constants/url";
import { fetchPost, fetchPut } from "@/utils/fetch";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Editor {
  data?: Data;
  setData?: React.Dispatch<React.SetStateAction<Data>>;
}

export default function Editor({ data, setData }: Editor) {
  const router = useRouter();
  const [type, setType] = useState(data ? data.sort : "아이폰");
  const property = type === "아이폰" ? iphoneProperty : instaProperty;

  function afterSubmit(result: any) {
    console.log(result);
    router.refresh();
    router.push(`/detail/${result.id}`);
  }

  function onSubmit(e: any) {
    e.preventDefault();
    const requestBody: Data = {
      id: "",
      sort: type,
      tags: "",
      title: e.target.title.value,
      content: e.target.content.value,
      "Created time": new Date(),
      이미지: "No",
    };
    for (const prop of property) {
      requestBody[prop] = e.target[prop].value;
    }
    data
      ? fetchPut<Data>({ url: `${basic_url}/${data.id}`, requestBody }).then(
          (result) => afterSubmit(result)
        )
      : fetchPost<Data>({ url: `${basic_url}`, requestBody }).then((result) =>
          afterSubmit(result)
        );
  }

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          required
          type="text"
          name="title"
          placeholder="제목"
          value={data?.title}
          onChange={(e) =>
            setData?.((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
        />
        <textarea
          name="content"
          placeholder="설명"
          value={data?.content}
          onChange={(e) =>
            setData?.((prev) => {
              return { ...prev, content: e.target.value };
            })
          }
        />
        <div className="flex gap-10">
          <label>
            <input
              type="radio"
              name="아이폰"
              value="아이폰"
              checked={type === "아이폰"}
              onChange={() => setType("아이폰")}
            />
            아이폰
          </label>
          <label>
            <input
              type="radio"
              name="인스타"
              value="인스타"
              checked={type === "인스타"}
              onChange={() => setType("인스타")}
            />
            인스타
          </label>
        </div>
        <div className="flex flex-wrap gap-10 my-5">
          {property.map((prop) => (
            <label key={prop}>
              {prop}
              {data && setData ? (
                <input
                  name={prop}
                  type="number"
                  className="w-10"
                  value={data[prop]}
                  onChange={(e) =>
                    setData((prev) => {
                      const newData = { ...prev };
                      newData[prop] = e.target.value;
                      return newData;
                    })
                  }
                />
              ) : (
                <input name={prop} type="number" className="w-10" />
              )}
            </label>
          ))}
        </div>
        <button type="submit">완료</button>
      </form>
    </>
  );
}
