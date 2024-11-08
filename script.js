document.addEventListener('scroll', () => {
  const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  const angle = scrollPercent * Math.PI * 2; // Full circle in radians
  
  document.querySelectorAll('.item').forEach((item, index) => {
    const baseAngle = (index * (Math.PI * 2) / 3) + angle;
    const normalizedAngle = baseAngle % (Math.PI * 2);
    
    // Add pause when card is at front (around 0 radians)
    let y, z;
    if (normalizedAngle > -0.2 && normalizedAngle < 0.2) {
      y = 0;
      z = 200;
    } else {
      y = Math.sin(baseAngle) * 200;
      z = Math.cos(baseAngle) * 200;
    }
    
    // Adjust z-index based on position
    const zIndex = Math.round(z);
    item.style.zIndex = zIndex;
    
    item.style.transform = `translateY(${y}px) translateZ(${z}px)`;
  });
});
