// content.js
setInterval(() => {
  const skipButton = document.querySelector('.ytp-ad-skip-button-container button');
  if (skipButton) {
    skipButton.click();
  }
}, 1000);
