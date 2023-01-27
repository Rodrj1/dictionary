import { useSearcher } from "../../features/components/Searcher";
import SearcherCSS from "./Searcher.module.scss";

interface Props {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const Searcher = ({ setKeyword }: Props) => {
  const { tempKeyword, handleOnChange, handleOnClick } = useSearcher({
    setKeyword,
  });

  return (
    <section className={SearcherCSS.container}>
      <div className={SearcherCSS.inputContainer}>
        <input
          id="searcher"
          type="search"
          name="searcher"
          value={tempKeyword}
          onChange={(e) => handleOnChange(e)}
        />
        <button onClick={handleOnClick}>
          <i className="fa-sharp fa-solid fa-magnifying-glass fa-2xl" />
        </button>
      </div>
    </section>
  );
};

export default Searcher;
