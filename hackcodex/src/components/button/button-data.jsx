// Declaration
class ButtonData {
  constructor(name, description=null, action=null, color, children=null, type=null) {
    this.name = name;
    this.description = description;
    this.action = action;
    this.color = color;
	this.children = children;
	this.type = type;
  }
}

export default ButtonData;