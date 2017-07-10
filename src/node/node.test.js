import NodeWrapper from './nodeWrapper';
import Node from './node';
import assert from 'assert';

describe('NodeWrapper', () => {
  let nodeWrapper
  before(() => {
    nodeWrapper = new NodeWrapper(document.body);
  });

  it('should have children', () => {
    let node = new Node(nodeWrapper);
    node.addChildren([ { name:'test', children :[] } ]);
    assert.equal(node.children.length, 1);
  });

  it('should set name', () => {
    let node = new Node(nodeWrapper, 'testName');
    assert.equal(node.getName(), 'testName');
  });
});