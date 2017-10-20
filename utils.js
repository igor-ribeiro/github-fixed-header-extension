function saveConfig(isFixed) {
  chrome.storage.sync.set({
    isFixed,
  });
}

function getSavedConfig(callback) {
  chrome.storage.sync.get('isFixed', value => {
    callback(chrome.runtime.lastError ? 'error' : value.isFixed);
  });
}
