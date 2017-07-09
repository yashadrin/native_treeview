import NodeElement from '../elements/nodeElement';
import NodeWrapper from './nodeWrapper';

export default class Node{
  constructor(parent, name = "child") {
    this.children = [];
    this.parent = parent;
    this.element  = new NodeElement(parent.getDomElement(), name);
    
    this.element.setDeleteButtonAction(this.delete.bind(this));
    this.element.setCreateChildButtonAction(this.addChild.bind(this));
  }

  getDomElement(){
    return this.element.getElement();
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

  deleteChild(child) {
    let index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  getState(){
    let state = [];
    for(let child of this.children) {
      state.push({name: child.getName(), children: child.getState()})
    }
    return state;
  }

  addChildren(children){
    for (let child of children) {
      let node = new Node(this, child.name);
      node.addChildren(child.children);
      this.children.push(node);      
    }
  }

}