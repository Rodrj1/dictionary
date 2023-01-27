import { useEffect, useState } from "react";
import { dictionaryApi } from "../../../api/dictionary";
import { Data } from "../../../types";

interface Props {
  keyword: string;
}

export const useWord = ({ keyword }: Props) => {
  const [data, setData] = useState<Data>({} as Data);
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    if (keyword != "") {
      const fetchMediaData = async () => {
        try {
          const response = await fetch(`${dictionaryApi}${keyword}`);
          return response.json();
        } catch (e) {
          console.log(e, "Error fetching data.");
        }
      };
      fetchMediaData().then((word) => {
        setFirstLoad(true);
        setData(word[0]);
      });
    }
  }, [keyword]);
  return { data, firstLoad };
};
