// import ButtonData from "./button-data";

import { useRef, useEffect,useCallback } from "react";
import useDoubleClick from "use-double-click";
import Say from "react-say";

// const myButton = new ButtonData("Task", "", nextPage(this));
const Button = ({ buttonData, changePage, goBack }) => {
  const buttonRef = useRef();

  useDoubleClick({
    onSingleClick: (e) => {
      if (buttonData.action) {
        buttonData.action();
        return;
      }
      changePage(buttonData);
    },
    onDoubleClick: (e) => {
      goBack();
    },
    ref: buttonRef,
    latency: 250,
  });

  // const selector = useCallback(voices => [...voices].find(v => v.lang === 'zh-HK'), []);
  useEffect(() => {
    <Say
      pitch={1.1}
      rate={1.5}
      speak="A quick brown fox jumped over the lazy dogs."
      volume={0.8}
      // voice={ selector }
    />;
    
  },[]);

  return (
    <div ref={buttonRef} className="Button">
      {buttonData.name}
    </div>
  );
};

// function nextPage(buttonData){
// }

export default Button;
