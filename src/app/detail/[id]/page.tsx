import { instaProperty, iphoneProperty } from "@/constants/filterData";
import { basic_url } from "@/constants/url";

export default async function Detail(props: any) {
  const response = await fetch(`${basic_url}/${props.params.id}`, {
    cache: "no-store",
  });
  const data: Data = await response.json();

  return (
    <>
      <h2>{data.title}</h2>
      <div>{data.tags}</div>
      <ul>
        {(data.sort === "인스타" ? instaProperty : iphoneProperty).map(
          (prop) => {
            const value = (parseInt(data[prop]) > 0 ? "+" : "") + data[prop];
            return value !== "" ? (
              <li>
                {prop} : {value}
              </li>
            ) : null;
          }
        )}
      </ul>
    </>
  );
}
