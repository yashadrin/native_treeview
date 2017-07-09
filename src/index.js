import Node from './elements/node';
import Button from './elements/button';
import NodeWrapper from './elements/nodeWrapper';
import StorageService from './storage/storageService';

(
  () => {
    try {
      let root = document.getElementById('root');
      let nodeWrapper = new NodeWrapper(root);
      let storageService = new StorageService();
      let buttonWrapper = document.getElementById('buttonWrapper');
      let createButton = new Button(buttonWrapper, "create");
      let saveButton = new Button(buttonWrapper, "save");
      let loadButton = new Button(buttonWrapper, "load");
    
      createButton.addAction(nodeWrapper.addChild.bind(nodeWrapper));
      saveButton.addAction(() => { storageService.save(nodeWrapper.getJson()) });
      loadButton.addAction(() => {
        root.innerHTML = '';
        let children = storageService.load();
        nodeWrapper = new NodeWrapper(root, children);
        createButton.addAction(nodeWrapper.addChild.bind(nodeWrapper));
        saveButton.addAction(() => { storageService.save(nodeWrapper.getJson()) });
      });
    } catch (e) {
      console.log(e);
    }
  }
)();