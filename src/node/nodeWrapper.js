import UnlinkedList from '../elements/unsortedList';
import BaseNode from './baseNode';
import Node from './node';

export default class NodeWrapper extends BaseNode{
  constructor(domElement) {
    super();
    try{
      this.element = new UnlinkedList(domElement);
    } catch(e) {
      console.log(e);
    }
  }

  addChild() {
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