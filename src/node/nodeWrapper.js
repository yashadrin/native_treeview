import UnlinkedList from '../elements/unsortedList';
import Node from './node';

export default class NodeWrapper{
  constructor(){
    this.children = [];
    this.element = new UnlinkedList(document.getElementById('root'));
  }

  getDomElement(){
    return this.element.getElement();
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

  clear() {
    this.element.clear();
    this.children = [];
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