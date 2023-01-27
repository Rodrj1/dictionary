import { useState } from "react";

interface Props {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export const useSearcher = ({ setKeyword }: Props) => {
  const [tempKeyword, setTempKeyword] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempKeyword(e.target.value);
  };

  const handleOnClick = () => {
    setKeyword(tempKeyword);
    setTempKeyword("");
  };
  return { tempKeyword, handleOnChange, handleOnClick };
};
