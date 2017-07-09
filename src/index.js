import Button from './elements/button';
import StorageService from './storage/storageService';
import NodeWrapper from './node/nodeWrapper'

import Node from './node/node';

(
  () => {
    try {
      let storageService = new StorageService();
      let buttonWrapper = document.getElementById('buttonWrapper');
      let createButton = new Button(buttonWrapper, "create");
      let saveButton = new Button(buttonWrapper, "save");
      let loadButton = new Button(buttonWrapper, "load");
      let nodeWrapper = new NodeWrapper();
      createButton.addAction(() => { nodeWrapper.addChild() });
      saveButton.addAction(() => { storageService.save(nodeWrapper.getState()) });
      loadButton.addAction(() => {
        let children = storageService.load();
        nodeWrapper.clear();
        nodeWrapper.addChildren(children);
      });
      // saveButton.addAction(() => { storageService.save(nodeWrapper.getJson()) });
      // loadButton.addAction(() => {
      //   root.innerHTML = '';
      //   
      
      //   nodeWrapper = new NodeWrapper(root, children);
      //   createButton.addAction(nodeWrapper.addChild.bind(nodeWrapper));
      //   saveButton.addAction(() => { storageService.save(nodeWrapper.getJson()) });
      // });
    } catch (e) {
      console.log(e);
    }
  }
)();