import BaseElement from './baseElement';

export default class Button extends BaseElement{
  constructor(parent, text) {
    super(parent, "button");
    this.element.innerText = text;
    this.render();
  }

  addAction(action){
    this.element.addEventListener("click", action);
  }
}
