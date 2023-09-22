// Get browser information
const browserName = navigator.appName;
const browserVersion = navigator.appVersion;

// Create message
const message = `You are using ${browserName} version ${browserVersion}`;

// Display message
document.getElementById('browser-info').textContent = message;