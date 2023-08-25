interface Data extends FilterData {
  id: string;
  sort: "아이폰" | "인스타";
  tags: string;
  title: string;
  content: string;
  "Created time": string | Date;
  이미지: string;
}

interface FilterData {
  밝기?: string;
  대비?: string;
  구조?: string;
  온도?: string;
  채도?: string;
  흐리게?: string;
  하이라이트?: string;
  그림자?: string;
  선명하게?: string;
  휘도?: string;
  노출?: string;
  블랙포인트?: string;
  "색 선명도"?: string;
  따뜻함?: string;
  색조?: string;
  선명도?: string;
  명료도?: string;
  "노이즈 감소"?: string;
  비네트?: string;
}

type Property = (keyof FilterData)[];
