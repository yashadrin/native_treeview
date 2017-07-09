import NodeElement from './nodeElement';
import BaseElement from './baseElement';

export default class UnsortedList extends BaseElement{
  constructor(parent, children) {
    super(parent, "ul");
    this.render();
  }
}