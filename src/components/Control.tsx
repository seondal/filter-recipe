"use client";

import { basic_url } from "@/constants/url";
import { fetchDelete } from "@/utils/fetch";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const id = useParams().id;
  const router = useRouter();

  function deleteItem() {
    fetchDelete({ url: `${basic_url}/${id}` }).then(() => {
      router.replace("/");
    });
  }

  return (
    <nav className="flex justify-center gap-10">
      {id ? (
        <>
          <Link href={`/update/${id}`}>
            <button>Update</button>
          </Link>
          <button onClick={deleteItem}>Delete</button>
        </>
      ) : (
        <Link href="/create">
          <button>Create</button>
        </Link>
      )}
    </nav>
  );
}
