import { useState } from "react";

interface Props {
  setFont: React.Dispatch<React.SetStateAction<string>>;
}

export const useNavbar = ({ setFont }: Props) => {
  const [open, setOpen] = useState(false);
  const [currentFont, setCurrentFont] = useState("Libre Baskerville");

  const handleFont = (updateFont: string) => {
    setFont(updateFont);
    if (updateFont == "'Libre Baskerville', serif")
      setCurrentFont("Libre Baskerville");
    if (updateFont == "courier") setCurrentFont("Courier");
    if (updateFont == "Arial, Helvetica, sans-serif") setCurrentFont("Arial");
  };
  return { open, setOpen, currentFont, handleFont };
};
