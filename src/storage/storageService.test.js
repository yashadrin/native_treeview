import StorageService from './storageService';
import assert from 'assert';

describe('StorageService', () => {
  it('should store value', () => {
    let storageService = new StorageService();
    storageService.save({test:"test"});
    assert.equal(window.localStorage.getItem(storageService.key), '{"test":"test"}');
  });

  it('should return object', () => {
    let storageService = new StorageService();
    window.localStorage.setItem(storageService.key, '{"test2":"test2"}');
    assert.equal(typeof(storageService.load()) , "object");
  });
});