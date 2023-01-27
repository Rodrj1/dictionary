import { useApp } from "./features/components/App";
import Navbar from "./components/Navbar/Navbar";
import Searcher from "./components/Searcher/Searcher";
import Word from "./components/Word/Word";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ReactSwitch from "react-switch";
import "./App.css";

function App() {
  const { keyword, setKeyword, font, setFont, theme, handleTheme } = useApp();

  return (
    <div className="App" style={{ fontFamily: font }}>
      <Navbar setFont={setFont} />

      <div className="switchContainer">
        <ReactSwitch
          onChange={handleTheme}
          checked={theme == "dark" ? true : false}
          offColor={"#eeecec"}
          offHandleColor={"#fff"}
          onColor={"#444444"}
          onHandleColor={"#000"}
          checkedHandleIcon={undefined}
          uncheckedHandleIcon={undefined}
          uncheckedIcon={
            <div className="sun">
              <i className="fa-solid fa-sun fa-xl" />
            </div>
          }
          checkedIcon={
            <div className="moon">
              <i className="fa-solid fa-moon fa-xl" />
            </div>
          }
          height={30}
          width={90}
          className={"switch"}
        />
      </div>

      <Searcher setKeyword={setKeyword} />

      <ErrorBoundary>
        <Word keyword={keyword} setKeyword={setKeyword} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
