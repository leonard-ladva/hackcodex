// import ButtonData from "./button-data";

// const myButton = new ButtonData("Task", "", nextPage(this));

function Button({buttonData, changePage}) {
	function action() {
		if (buttonData.action) {
			buttonData.action();
		} else {
			changePage(buttonData);
		}
	}
  return (
    <div className="Button" onClick={()=>action()}>
        {buttonData.name}
    </div>
  );
}

// function nextPage(buttonData){
// }

export default Button;
