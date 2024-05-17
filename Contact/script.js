function copyToClipboard(id) {
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text).then(() => {
      const icon = document.getElementById(id + '-icon');
      icon.className = 'fas fa-check'; // Change icon to validation checkmark
      setTimeout(() => {
        icon.className = 'fas fa-copy'; // Change icon back to copy icon after 2 seconds
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }