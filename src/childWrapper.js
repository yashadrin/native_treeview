import Node from './node';

export default class ChildWrapper{
  constructor(parent) {
    this.parent = parent;
    this.childList = [];
    this.element = document.createElement('ul');
    this.render();
  }

  addChild(){
    this.childList.push(new Node(this.element));
  }

  render(){
    this.parent.appendChild(this.element);
  }
}