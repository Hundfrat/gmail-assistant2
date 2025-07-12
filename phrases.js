document.addEventListener("DOMContentLoaded", () => {
    const phraseList = document.getElementById("phraseList");
    const backButton = document.getElementById("backButton");
    const addPhraseButton = document.getElementById("addPhraseButton");
    const phraseInput = document.getElementById("phraseInput");
    const saveButton = document.getElementById("saveButton");

    // Elements for email content and controls
    const emailContent = document.getElementById('emailContent');
    const wordCountDisplay = document.getElementById('wordCount');
    const sendEmailButton = document.getElementById('sendEmail');

    // Загрузка фраз при загрузке страницы
    loadPhrases();

    // Listen for messages to reload phrases
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === "reloadPhrases") {
            loadPhrases(); // Reload phrases when a new phrase is added
        }
    });

    // Back button handler
    if (backButton) {
        backButton.addEventListener("click", () => {
            window.close(); // Close the current tab
        });
    }

    // Add phrase button handler
    if (addPhraseButton && phraseInput) {
        addPhraseButton.addEventListener("click", () => {
            phraseInput.style.display = 'block';
            phraseInput.focus();
        });
    }

    // Save button handler
    if (saveButton && phraseInput) {
        saveButton.addEventListener("click", () => {
            const newPhrase = phraseInput.value.trim();
            if (newPhrase) {
                savePhrase(newPhrase);
                phraseInput.value = '';
                phraseInput.style.display = 'none'; // Hide input field
            }
        });
    }

    // Check user status and set premium flag
    async function checkUserStatus() {
        try {
            const response = await fetch('/api/auth/session');
            if (!response.ok) {
                throw new Error('Сеть ответила с ошибкой: ' + response.status);
            }
            const session = await response.json();
            isPremiumUser = session?.user?.isPremium || false;
        } catch (error) {
            console.error('Ошибка при проверке статуса пользователя:', error);
        }
    }

    // Word count function
    function countWords(text) {
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    }

    // Event listener for email content input
    if (emailContent && wordCountDisplay) {
        // Removed word count input handler as per user request
    }

    // Event listener for send email button
    if (sendEmailButton && emailContent && wordCountDisplay) {
        sendEmailButton.addEventListener('click', () => {
            // Email sending logic
            console.log("Email отправлен:", emailContent.value);
            // Clear input and reset word count
            emailContent.value = '';
            wordCountDisplay.textContent = 'Количество слов: 0';
        });
    }

    // Call checkUserStatus on DOMContentLoaded
    checkUserStatus();
});

// Load phrases function
function loadPhrases() {
    chrome.storage.local.get("phrases", (data) => {
        if (chrome.runtime.lastError) {
            console.error('Ошибка при загрузке фраз:', chrome.runtime.lastError);
            return;
        }
        const phrases = data.phrases || [];
        const phraseList = document.getElementById("phraseList");
        if (!phraseList) {
            console.error('Элемент phraseList не найден');
            return;
        }
        phraseList.innerHTML = ""; // Clear the list before adding new phrases
        phrases.forEach((phrase, index) => {
            const li = document.createElement("li");
            li.textContent = phrase;

            // Create delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                deletePhrase(index);
                li.remove(); // Remove the element from the list
            });

            li.appendChild(deleteButton);
            phraseList.appendChild(li);
        });
    });
}

// Function to save a phrase
function savePhrase(phrase) {
    chrome.storage.local.get("phrases", (data) => {
        if (chrome.runtime.lastError) {
            console.error('Ошибка при получении фраз для сохранения:', chrome.runtime.lastError);
            return;
        }
        const phrases = data.phrases || [];
        phrases.push(phrase);
        chrome.storage.local.set({ phrases }, () => {
            if (chrome.runtime.lastError) {
                console.error('Ошибка при сохранении фраз:', chrome.runtime.lastError);
                return;
            }
            loadPhrases(); // Reload phrases after saving
            chrome.runtime.sendMessage({ action: "reloadPhrases" }); // Notify to reload phrases
        });
    });
}

// Function to delete a phrase
function deletePhrase(index) {
    chrome.storage.local.get("phrases", (data) => {
        if (chrome.runtime.lastError) {
            console.error('Ошибка при получении фраз для удаления:', chrome.runtime.lastError);
            return;
        }
        const phrases = data.phrases || [];
        phrases.splice(index, 1); // Remove the phrase by index
        chrome.storage.local.set({ phrases }, () => {
            if (chrome.runtime.lastError) {
                console.error('Ошибка при сохранении фраз после удаления:', chrome.runtime.lastError);
                return;
            }
            loadPhrases(); // Reload phrases after deletion
            chrome.runtime.sendMessage({ action: "reloadPhrases" }); // Notify to reload phrases
        });
    });
}

const FREE_VERSION_WORD_LIMIT = 5; // Лимит для бесплатной версии
let isPremiumUser  = false; // Изначально предполагаем, что пользователь не премиум

// Removed word count function as per user request
