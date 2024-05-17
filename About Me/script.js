document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector('.card');
    const photo = document.querySelector('.profile-photo');
  
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 15; // Increase the rotation value
      const rotateY = ((x - centerX) / centerX) * -15; // Increase the rotation value
  
      photo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  
    card.addEventListener('mouseleave', () => {
      photo.style.transform = 'rotateX(0) rotateY(0)'; // Reset the transformation
    });
  });