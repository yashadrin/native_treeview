export default class BaseElement{
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
}