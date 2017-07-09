export default class BaseElement{
  constructor(parent, type){
    if (!this.isDomElement(parent)) { throw('parrent is not DomElement')};
    this.parent = parent;
    this.element = document.createElement(type);
  }
  
  delete(){
    try {
      this.parent.removeChild(this.element);
    } catch (e) {
      console.log(e);
    }
  }

  render(){
    try {      
      this.parent.appendChild(this.element);
    } catch (e) {
      console.log(e);
    }
  }  

  isDomElement(element){
    return element.nodeName  ? true : false;
  }

  getElement(){
    return this.element;
  }

  clear() {
    this.element.innerHTML = '';
  }
}