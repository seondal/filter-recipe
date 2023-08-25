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
      <div className="flex flex-wrap gap-8 justify-center">
        {(data.sort === "인스타" ? instaProperty : iphoneProperty).map(
          (prop) => {
            const value =
              (parseInt(data[prop] ?? "") > 0 ? "+" : "") + data[prop];
            return value !== "" ? (
              <div className="w-20 h-24 bg-blue-300 rounded-xl flex flex-col items-center justify-center">
                <div className="font-bold">{prop}</div>
                <div>{value}</div>
              </div>
            ) : null;
          }
        )}
      </div>
      <div>{data.tags}</div>
      {data.content && <div>"{data.content}"</div>}
    </>
  );
}
