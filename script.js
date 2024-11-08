document.addEventListener('scroll', () => {
  const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  const angle = scrollPercent * Math.PI * 2; // Full circle in radians
  
  document.querySelectorAll('.item').forEach((item, index) => {
    const baseAngle = (index * (Math.PI * 2) / 5) + angle;
    const y = Math.sin(baseAngle) * 200;
    const z = Math.cos(baseAngle) * 200;
    item.style.transform = `translateY(${y}px) translateZ(${z}px)`;
  });
});
