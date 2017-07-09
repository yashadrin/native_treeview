import BaseElement from './baseElement';

export default class Button extends BaseElement{
  constructor(parent, text) {
    super();
    if (!this.isDomElement(parent)) { throw('parrent is not DomElement')};
    this.parent = parent;
    this.element = document.createElement("button");
    this.element.innerText = text;
    this.render();
  }

  addAction(action){
    this.element.addEventListener("click", action);
  }
}
