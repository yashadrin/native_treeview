export default class StorageService{
  constructor(){
    this.key = "TREE_VIEW_KEY";
    if (!window.localStorage) { throw('localStorage is not support')}
  }

  save(json){
    window.localStorage.setItem(this.key, JSON.stringify(json));
  }

  load(){
    return JSON.parse(window.localStorage.getItem(this.key));
  }

}