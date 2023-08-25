interface Fetch {
  url: string;
  cache?: boolean;
}

interface FetchPost<T> extends Fetch {
  requestBody: T;
  onSuccess?: () => void;
}

export const fetchGet = ({ url, cache }: Fetch) =>
  fetch(`${url}`, {
    cache: cache ? "default" : "no-store",
  }).then((response) => response.json());

export const fetchDelete = ({ url }: Fetch) =>
  fetch(`${url}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());

export const fetchPut = <T>({ url, requestBody }: FetchPost<T>) =>
  fetch(`${url}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  }).then((response) => response.json());

export const fetchPost = <T>({ url, requestBody, onSuccess }: FetchPost<T>) =>
  fetch(`${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  }).then((response) => response.json());
