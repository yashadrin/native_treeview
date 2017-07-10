export default class BaseNode{
  constructor(){
    if (new.target === BaseNode) {
      throw new TypeError("Cannot construct Abstract instances");
    }
    this.children = [];
  }

  getDomElement(){
    return this.element.getElement();
  }

  addChild() {
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
  }
}