import "./App.css";
import ButtonPage from "./components/buttonPage/buttonPage";
import HomePage from "./data";
import { useState } from "react";
function App() {
  const [currentPage, changeState] = useState(HomePage);
  const [history, setHistory] = useState([]);

  const changePage = (nextPage) => {
    setHistory(history =>[...history, currentPage]);

    changeState(nextPage);

    console.log([...history, currentPage]);
  };

  return (
    <div className="App">
      <ButtonPage children={currentPage.children} changePage={changePage} />
    </div>
  );
}
export default App;
