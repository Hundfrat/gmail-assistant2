let userPhrases = [];

// Загрузка фраз при запуске
chrome.storage.local.get(["phrases"], (data) => {
    userPhrases = data.phrases || []; // Загружаем фразы
});

// Событие установки расширения
chrome.runtime.onInstalled.addListener(() => {
    // Инициализация фраз
    chrome.storage.local.set({ phrases: [] }, () => {
        console.log('Фразы инициализированы.');
    });
});

// Обработка сообщений от popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "savePhrase") {
        userPhrases.push(request.phrase);
        chrome.storage.local.set({ phrases: userPhrases }, () => {
            console.log('Фраза сохранена:', request.phrase);
        });
    }
});


