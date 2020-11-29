export function displayMessage(messageType, message, targetElement) {
  const elementInfo = document.querySelector(targetElement);

  elementInfo.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}

