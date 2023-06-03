import "./App.css";
import ButtonPage from "./components/buttonPage/buttonPage";
import HomePage from "./data";
import { useState } from "react";
function App() {
  const [currentPage, changeState] = useState(HomePage);
  const [history, setHistory] = useState([]);

  const changePage = (nextPage) => {
	if (nextPage.children === null || nextPage.children === undefined || nextPage.children.length === 0) {
		return;
	}

    setHistory((history) => [...history, currentPage]);

    changeState(nextPage);

    console.log([...history, currentPage]);
  };

  const goBack = () => {
    const prevPage = history[history.length - 1];
	if (prevPage === undefined) {
		return;
	}

    setHistory(history.slice(0, history.length - 1));
    changeState(prevPage);
    console.log(currentPage);
  };

  return (
    <div className="App">
      <ButtonPage
        children={currentPage.children}
        changePage={changePage}
        goBack={goBack}
      />
    </div>
  );
}
export default App;
