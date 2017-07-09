import NodeWrapper from './nodeWrapper';
import Button from './button';
import Title from './title';
import BaseElement from './baseElement';

export default class Node extends BaseElement{
  constructor(parent, name, children) {
    super();
    if (!this.isDomElement(parent)) { throw('parrent is not DomElement')};
    this.parent = parent;
    this.element = document.createElement('li');
    
    this.deleteButton = new Button(this.element, "delete");
    this.addChildButton = new Button(this.element, "add child");
    this.title = new Title(this.element, name);
    this.nodeWrapper = new NodeWrapper(this.element, children);

    this.deleteButton.addAction(this.delete.bind(this));    
    this.addChildButton.addAction(this.addChild.bind(this));

    this.render();
  }

  addChild(){
    this.nodeWrapper.addChild();
  }

  getJson(){
    return {
      name: this.title.getText(),
      children: this.nodeWrapper.getJson(),
    }
  }
}