import UnsortedList from './unsortedList';
import Button from './button';
import Title from './title';
import BaseElement from './baseElement';

export default class NodeElement extends BaseElement{
  constructor(parent, name) {
    super(parent, "li");
    this.deleteButton = new Button(this.element, "delete");
    this.createChildButton = new Button(this.element, "add child");
    this.title = new Title(this.element, name);
    this.unsortedList = new UnsortedList(this.element);
    this.render();
  }

  setDeleteButtonAction(action) {
    this.deleteButton.addAction(action);
  }

  setCreateChildButtonAction(action) {
    this.createChildButton.addAction(action);
  }

  getName(){
    return this.title.getText();
  }

  getWrapperElement() {
    return this.unsortedList.getElement();
  }

  getElement(){
    return this.unsortedList.getElement();
  }
}