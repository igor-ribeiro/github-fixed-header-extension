window.addEventListener('message', message => {
  if (message.data.type !== 'update-dom') {
    return;
  }

  handleUpdate(message.data.isFixed);
});

getSavedConfig(isFixed => {
  handleUpdate(isFixed);
});

function handleUpdate(isFixed) {
  const action = isFixed ? 'fix' : 'unfix';

  updates[action]();
}

const updates = {
  fix: function() {
    const githubHeader = document.querySelector('.Header');
    let headerPlaceholder = document.querySelector('.Header-placeholder');

    if (!headerPlaceholder) {
      headerPlaceholder = document.createElement('div');
      headerPlaceholder.classList.add('Header-placeholder');

      githubHeader.parentNode.insertBefore(headerPlaceholder, githubHeader);
    }

    githubHeader.style.position = 'fixed';
    githubHeader.style.top = 0;
    githubHeader.style.left = 0;
    githubHeader.style.right = 0;
    githubHeader.style.zIndex = 100;
    githubHeader.style.boxShadow = '0 2px 6px 0 rgba(0, 0, 0, .4)';

    headerPlaceholder.style.height = githubHeader.clientHeight + 'px';
  },

  unfix: function() {
    const githubHeader = document.querySelector('.Header');
    const headerPlaceholder = document.querySelector('.Header-placeholder');

    if (!headerPlaceholder) {
      return;
    }

    headerPlaceholder.style.height = '';

    githubHeader.style.position = '';
    githubHeader.style.top = '';
    githubHeader.style.left = '';
    githubHeader.style.right = '';
    githubHeader.style.zIndex = '';
    githubHeader.style.boxShadow = '';
  },
};
