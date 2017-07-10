import NodeElement from '../elements/nodeElement';
import BaseNode from './baseNode';

export default class Node extends BaseNode{
  constructor(parent, name) {
    super();
    if (!parent) throw('parent element is undefined');
    this.parent = parent;
    this.element  = new NodeElement(parent.getDomElement(), name);
    
    this.element.setDeleteButtonAction(this.delete.bind(this));
    this.element.setCreateChildButtonAction(this.addChild.bind(this));
  }

  delete(){
    this.element.delete();
    if (this.parent) {
      this.parent.deleteChild(this);
    }
  }

  getName(){
    return this.element.getName();
  }

  addChild(){
    this.children.push(new Node(this));
  }

  addChildren(children){
    if (Array.isArray(children)){
      for (let child of children) {
        let node = new Node(this, child.name);
        node.addChildren(child.children);
        this.children.push(node);
      }
    }
  }

}