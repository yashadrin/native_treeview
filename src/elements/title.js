import BaseElement from './baseElement';

export default class Title extends BaseElement{
  constructor(parent, text ="child"){
    super();
    if (!this.isDomElement(parent)) { throw('parrent is not DomElement')};
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