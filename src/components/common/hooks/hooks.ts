import { useEffect, useState } from "react";

export const useGetAttr = (
  obj: { [key: string]: any },
  keyWord: string
): string => {
  const [state, setState] = useState<string>("");
  useEffect(() => {
    setState(obj[keyWord] || "");
  }, [keyWord, obj]);

  return state;
};


