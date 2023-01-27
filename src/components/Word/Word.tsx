import { useWord } from "../../features/components/Word";
import WordCSS from "./Word.module.scss";

interface Props {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const Word = ({ keyword, setKeyword }: Props) => {
  const { data, firstLoad } = useWord({ keyword });

  return (
    <>
      <article className={WordCSS.container}>
        {data.word != undefined && (
          <>
            <h2>{data.word}</h2>
            {data.phonetics.map((phonetic) => {
              if (phonetic.audio != "") {
                return (
                  <div className={WordCSS.phonetic} key={phonetic.text}>
                    <h3>{phonetic.text}</h3>
                    <button onClick={() => new Audio(phonetic.audio).play()}>
                      <i className="fa-regular fa-circle-play fa-3x" />
                    </button>
                  </div>
                );
              }
            })}
            {data.meanings.map((meaning, index) => (
              <div key={index}>
                <h3>As a {meaning.partOfSpeech}</h3>
                <h4>Meaning</h4>
                <ul>
                  {meaning.definitions.map((info) => (
                    <li key={info.definition}>
                      <span>{info.definition}</span>
                    </li>
                  ))}
                </ul>

                {meaning.synonyms.length > 0 && (
                  <>
                    <h4>Synonyms:</h4>
                    <div className={WordCSS.relevantWords}>
                      {meaning.synonyms.map((synonym) => (
                        <a key={synonym} onClick={() => setKeyword(synonym)}>
                          {synonym}
                        </a>
                      ))}
                    </div>
                  </>
                )}

                {meaning.antonyms.length > 0 && (
                  <>
                    <h4>Antonyms:</h4>
                    <div className={WordCSS.relevantWords}>
                      {meaning.antonyms.map((antonym) => (
                        <a key={antonym} onClick={() => setKeyword(antonym)}>
                          {antonym}
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </>
        )}
      </article>

      {firstLoad && data.word == undefined && (
        <h1>
          OOPS. Seems we can't find the word you are looking for. Word may not
          exist or servers may be down!
        </h1>
      )}
    </>
  );
};

export default Word;
