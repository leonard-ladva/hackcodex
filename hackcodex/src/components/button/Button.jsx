import { useRef, useState } from "react";
import useDoubleClick from "use-double-click";
import Say from "react-say";

const Button = ({ buttonData, changePage, goBack }) => {
  const buttonRef = useRef();
  const [isLongPress, setIsLongPress] = useState(false);
  let longPressTimer;

  const handleMouseDown = () => {
    longPressTimer = setTimeout(() => {
      setIsLongPress(true);
      console.log("Long pressed!");
    }, 500); // Adjust the delay as needed
  };

  const handleMouseUp = () => {
    clearTimeout(longPressTimer);
    if (isLongPress) {
      setIsLongPress(false);
      return;
    }

    if (buttonData.action) {
      buttonData.action();
      console.log(buttonData.name);
    } else {
      changePage(buttonData);
    }
  };

  useDoubleClick({
    onDoubleClick: (e) => {
      goBack();
    },
    ref: buttonRef,
    latency: 250,
  });

  return (
    <div
      ref={buttonRef}
      className="Button"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {buttonData.name}
      {isLongPress && (
        <Say pitch={0.3} rate={1.5} volume={0.8} text={buttonData.name} />
      )}
    </div>
  );
};

export default Button;
