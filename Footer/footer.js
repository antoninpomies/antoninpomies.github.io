document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById('footer');
    const footerHeight = footer.offsetHeight;
  
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.style.bottom = '0';
      } else {
        footer.style.bottom = `-${footerHeight}px`;
      }
    });
  
    // Initial check
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      footer.style.bottom = '0';
    }
  });