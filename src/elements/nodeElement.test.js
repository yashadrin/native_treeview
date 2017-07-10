import NodeElement from './nodeElement';
import assert from 'assert';

describe('NodeElement', () => {
  it('should return name', () => {
    let element = new NodeElement(document.body, 'test');
    assert.equal(element.getName(), 'test');
  });
});