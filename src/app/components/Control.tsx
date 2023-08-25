"use client";

import { basic_url } from "@/constants/url";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const id = useParams().id;
  const router = useRouter();

  function deleteItem() {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`${basic_url}/${id}`, options)
      .then((response) => response.json())
      .then(() => {
        router.replace("/");
      });
  }

  return (
    <nav className="gap-10">
      <Link href="/create">
        <button>Create</button>
      </Link>
      {id && (
        <>
          <Link href={`/update/${id}`}>
            <button>Update</button>
          </Link>
          <button onClick={deleteItem}>Delete</button>
        </>
      )}
    </nav>
  );
}
