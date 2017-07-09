export default class Title{
  constructor(parent, text ="element"){
    this.parent = parent;
    this.element = document.createElement('input');
    this.element.value = text;
    this.render();
  }

  getText() {
    return this.element.value;
  }

  render(){
    this.parent.appendChild(this.element);
  }
}