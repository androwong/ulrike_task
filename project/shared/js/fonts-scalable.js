function renderText() {
  const preciseFontSize = FONT_SIZE * zoom;  // Desired font size
  const roundedSize = Math.floor(preciseFontSize);
  const s = preciseFontSize / roundedSize; // Remaining scale
  
  textElement.style.fontSize = `${roundedSize}px`;
  const translate = `translate(${pos.x}px, ${pos.y}px)`;
  const scale = `translate(-50%, -50%)
                 scale(${s})
                 translate(50%, 50%)`;
  textElement.style.transform = translate + scale;
}