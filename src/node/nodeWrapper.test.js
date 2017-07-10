import NodeWrapper from './nodeWrapper';
import assert from 'assert';

describe('NodeWrapper', () => {
  it('should have children', () => {
    let nodeWrapper = new NodeWrapper(document.body);
    nodeWrapper.addChildren([ { name:'test', children :[] } ]);
    assert.equal(nodeWrapper.children.length, 1);
  });
});