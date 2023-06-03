// import ButtonData from "./button-data";

import { useRef } from "react";
import useDoubleClick from "use-double-click";

// const myButton = new ButtonData("Task", "", nextPage(this));

function Button({ buttonData, changePage }) {
  const buttonRef = useRef();

  useDoubleClick({
    onSingleClick: (e) => {
      console.log(e, "single click");
      if (buttonData.action) {
        buttonData.action();
		return;
      } 
        changePage(buttonData);
    },
    onDoubleClick: (e) => {
      console.log(e, "double click");
    },
    ref: buttonRef,
    latency: 250,
  });

  return (
    <div ref={buttonRef} className="Button">
      {buttonData.name}
    </div>
  );
}

// function nextPage(buttonData){
// }

export default Button;
