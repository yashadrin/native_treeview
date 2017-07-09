export default class Button{
  constructor(parent, text) {
    this.parent = parent;
    this.element = document.createElement("button");
    this.element.innerText = text;
    this.render();
  }

  addAction(action){
    this.element.addEventListener("click", action);
  }

  render(){
    this.parent.appendChild(this.element);
  }
}
