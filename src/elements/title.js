import BaseElement from './baseElement';

export default class Title extends BaseElement{
  constructor(parent, text ="child"){
    super(parent, "input");
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