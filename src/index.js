import Button from './elements/button';
import StorageService from './storage/storageService';
import NodeWrapper from './node/nodeWrapper';

(
  () => {
    try {
      let storageService = new StorageService();
      let buttonWrapper = document.getElementById('buttonWrapper');
      let createButton = new Button(buttonWrapper, "create");
      let saveButton = new Button(buttonWrapper, "save");
      let loadButton = new Button(buttonWrapper, "load");
      let nodeWrapper = new NodeWrapper(document.getElementById('root'));
      createButton.addAction(() => { nodeWrapper.addChild() });
      saveButton.addAction(() => { storageService.save(nodeWrapper.getState()) });
      loadButton.addAction(() => {
        let children = storageService.load();
        nodeWrapper.clear();
        nodeWrapper.addChildren(children);
      });
    } catch (e) {
      console.log(e);
    }
  }
)();