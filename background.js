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

// Функция запуска OAuth
function startOAuth(sendResponse) {
  const authUrl = 'https://gmail-assistant-gq45.onrender.com/api/auth/signin/google';

  chrome.identity.launchWebAuthFlow(
    {
      url: authUrl,
      interactive: true,
    },
    (redirectUrl) => {
      if (chrome.runtime.lastError || !redirectUrl) {
        console.error('Ошибка авторизации:', chrome.runtime.lastError);
        sendResponse({ success: false, error: chrome.runtime.lastError.message });
        return;
      }
      console.log('Авторизация успешна, redirect URL:', redirectUrl);
      // Если нужно, можно извлечь токен или код из redirectUrl здесь
      sendResponse({ success: true, redirectUrl });
    }
  );
}

// Обработка сообщений от popup.js или других частей расширения
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "savePhrase") {
    userPhrases.push(request.phrase);
    chrome.storage.local.set({ phrases: userPhrases }, () => {
      console.log('Фраза сохранена:', request.phrase);
    });
  }
  else if (request.action === "startOAuth") {
    // Запускаем OAuth и сообщаем результат асинхронно
    startOAuth(sendResponse);
    // Возвращаем true, чтобы указать, что ответ будет асинхронным
    return true;
  }
});
