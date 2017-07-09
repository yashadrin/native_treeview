import ChildWrapper from './childWrapper';
import Button from './button';
import Title from './title';


export default class Node{
  constructor(parent) {
    this.parent = parent;
    this.element = document.createElement('li');
    
    this.deleteButton = new Button(this.element, "delete");
    this.addChildButton = new Button(this.element, "add child");
    this.title = new Title(this.element);
    this.childWrapper = new ChildWrapper(this.element);

    this.deleteButton.addAction(this.deleteNode.bind(this));    
    this.addChildButton.addAction(this.childWrapper.addChild.bind(this.childWrapper));

    this.render();
  }

  deleteNode(){
    this.parent.removeChild(this.element);
  }

  render(){
    this.parent.appendChild(this.element);
  }

}