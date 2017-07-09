import Title from './title';
import assert from 'assert';

describe('Title', () => {
  it('should return title text', () => {
    let parent = document.body;
    let title = new Title(parent, 'Test title');
    assert.equal(title.getText(), 'Test title');
  });
});