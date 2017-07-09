import Node from './node';
import BaseElement from './baseElement';

export default class NodeWrapper extends BaseElement{
  constructor(parent, children) {
    super();
    if (!this.isDomElement(parent)) { throw('parrent is not DomElement')};
    this.parent = parent;
    this.children = [];    
    this.element = document.createElement('ul');
    if (children) {
      if (Array.isArray(children)) {
        children.map(c => {
          this.children.push(new Node(this.element, c.name, c.children))
        });
      }
    }
    this.render();
  }

  addChild(){
    this.children.push(new Node(this.element));
  }

  getJson(){
    let childJson =[]
    for (var child of this.children){
      childJson.push(child.getJson());
    }
    return childJson;
  }
}