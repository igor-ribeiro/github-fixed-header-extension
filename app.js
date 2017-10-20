function sendMessage(isFixed) {
  code = `
    window.postMessage({
      type: 'update-dom',
      isFixed: ${isFixed},
    }, '*')
  `;

  chrome.tabs.executeScript({ code });
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.field-input');

  getSavedConfig(isFixed => {
    input.checked = isFixed || false;

    sendMessage(isFixed);
  });

  input.addEventListener('change', event => {
    const isFixed = event.target.checked;

    saveConfig(isFixed);
    sendMessage(isFixed);
  });
});
