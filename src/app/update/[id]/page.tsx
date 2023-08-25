"use client";

import Editor from "@/components/Editor";
import { defaultFilterData } from "@/constants/filterData";
import { basic_url } from "@/constants/url";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
  const id = useParams().id;

  const [content, setContent] = useState<Data>(defaultFilterData);

  useEffect(() => {
    fetch(`${basic_url}/${id}`)
      .then((response) => response.json())
      .then((result) => setContent(result));
  }, [id]);

  return content !== defaultFilterData ? (
    <Editor data={content} setData={setContent} />
  ) : (
    <div>Loading...</div>
  );
}
