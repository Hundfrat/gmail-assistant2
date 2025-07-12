let isActive = false;

// Function to update the status text
function updateStatusText(isActive) {
    const statusText = document.getElementById('statusText');
    if (statusText) {
        statusText.textContent = isActive ? 'Расширение включено' : 'Расширение выключено';
    }
}

// Handle click on the "Show all my phrases" button
document.getElementById('showPhrases').addEventListener('click', () => {
    chrome.tabs.create({ url: 'phrases.html' }, (tab) => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            alert('Ошибка при открытии страницы фраз.'); // Notify user of the error
        } else {
            // Optionally provide feedback to the user
            console.log('Opening phrases page...');
        }
    });
});
