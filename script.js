document.addEventListener('scroll', () => {
  const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  const angle = scrollPercent * Math.PI * 2; // Full circle in radians
  const pauseRange = 0.3; // Wider pause range for smoother transitions
  const items = document.querySelectorAll('.item');
  const totalItems = items.length;
  
  items.forEach((item, index) => {
    const baseAngle = (index * (Math.PI * 2) / 3) + angle;
    const normalizedAngle = baseAngle % (Math.PI * 2);
    const currentIndex = Math.floor(scrollPercent * totalItems) % totalItems;
    const isVisible = (index >= currentIndex && index < currentIndex + 3) || 
                     (index < (currentIndex + 3) % totalItems);
    
    if (!isVisible) {
      item.style.opacity = '0';
      item.style.pointerEvents = 'none';
      return;
    }
    
    item.style.opacity = '1';
    item.style.pointerEvents = 'auto';
    
    // Add pause when card is at front
    let y, z;
    if (normalizedAngle > -pauseRange && normalizedAngle < pauseRange) {
      y = 0;
      z = 200;
    } else {
      y = Math.sin(baseAngle) * 200;
      z = Math.cos(baseAngle) * 200;
    }
    
    // Ensure proper z-index ordering
    const zIndex = 1000 + Math.round(z);
    item.style.zIndex = zIndex;
    
    item.style.transform = `translateY(${y}px) translateZ(${z}px)`;
  });
});
