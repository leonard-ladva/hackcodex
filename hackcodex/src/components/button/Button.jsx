import { useRef } from "react";
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

  return (
    <div ref={buttonRef} className="Button">
      {buttonData.name}
      <Say pitch={1.1} rate={1.5} volume={0.8} text={buttonData.name}/>
    </div>
  );
};

// function nextPage(buttonData){
// }

export default Button;
