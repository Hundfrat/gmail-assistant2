


// Кэш для хранения элементов DOM
const cache = {};

// Пример использования document.querySelector
const textBox = document.querySelector('div[aria-label="Message Body"]');
if (textBox) {
    initTextBox(textBox);
}

// Общие фразы
const commonPhrases = [
     
           "Sir",    "Madam",    "Sir/Madam,",    "Mr.",    "Ms.",    "partners",        "everyone",
     "All of us at (event name) hope that you enjoyed your visit and found it valuable.",
     "All of us at (company name) can't wait to start working with you.","To whom it may concern,",
     "Congratulations on",  "Dear Sir", "Dear Madam", "Dear Sir/Madam, ", "Dear Mr.", "Dear Ms.",
    "Dear partners", "Dear all", "Hi everyone", "Hello","Many thanks for your email informing us that",  
     "Thank you for your job offer, please take this email as a formal acceptance.",
      "Thank you for your understanding.", "Thank you for your recent update on ()", 
      "Thank you for accepting our recent job offer, and welcome to the team!", 
      "Thanks for your feedback from all of us at (company name).", "Thank you for meeting me today at",
       "Thank you for reaching out regarding our recent discussion.", 
       "Thank you once again for your time and consideration.",
        "Thank you for investing your time and energy into this.",
         "Thank you for your patience and understanding.", 
         "Thank you for the valuable feedback you provided.", 
         "Thank you for always being there for me.","Thanks again", 
         "since", "would be", "would be much appreciated",
    "would be highly appreciated", "Could you",
     "Could you please send me the report this week?","Would you mind",
       "I hope you are doing well", "I hope that ",
         "I wonder if","I am writing to inform you that", 
         "I was really interested to learn about",
         "I am unable to provide the information you requested at this moment.", 
         "I wish you well with the rest of your day.",
         "I just wanted to reach out and say thank you for everything that you have done for me.", 
          "I have enjoyed every minute and learned a tremendous amount from all of you about working in an exciting and successful organization.", 
          "However, I can provide any documents, references, or information you need as soon as possible.", 
          "I have received your email and have read it with interest.",
          "I am available on", "I am looking forward to", "I would really appreciate",
    "Thank you for your email,", "Due to unforeseen circumstances,",
     "Don't hesitate to contact me via email or give me a call if you would like to.",
     "Thank you for", "for contacting me about", "for attending", "asking us about", "informing us",
     "I have included my contact details here (insert details).", 

     "I wanted to say thank you for taking the time to meet me.", 
     "I would like to request a meeting with you to discuss", "I hope you're as happy with the outcome as we are.", 
     "I have attached the report to this email.", "I am honored to be applying to the",
     "I would be grateful if you could", "I will be available later the same week, if rescheduling the meeting is an option.",
      "I apologise for not answering sooner.", "I believe my skills and experience make me a strong candidate for this role.",
       "I just wanted to send a quick message thanking you for choosing [Your Company] for your recent project.",
        "I appreciate the time you took to review my application.", "I can’t thank you enough for your help.", 
        "I’m grateful for your assistance with this matter.", "I appreciate your detailed explanation.",
         "I truly appreciate your willingness to help.", 
         "I appreciate the opportunity to learn more about the company and the role, and I am excited about the possibility of joining your team.",
         "I am writing to express my gratitude for the opportunity to interview for the [position] at [Company Name].", 
         "I wanted to take a moment to thank you for taking the time to speak with me about the [Job Title] position at [Company Name].",
          "I remain very interested in the opportunity to work with your team, and I’m confident that my skills and experience would make me a valuable asset to your organization." ,   
           "giving us feedback on", "inviting me to", "If you have further questions, " ,
           "if you need any further assistance,please let me know. ", 
           "if you need to","Once again, thank you for all your efforts in making this happen.",
           "Here is the information you requested",
           "If you need any more information,","It was great to meet you recently and learn about what you do.", 
           "If you require any additional information, please don't hesitate to contact me at any point.",
            "If you have further comments, please feel free to message me on (insert contact details).",
             "If I have any questions or require further clarification, I'll be in touch.", 
             "If any details change, please let me know.", "If I can ever help you out, don't hesitate to ask.",
              "If you need any help, please let us know.",
               "If you would like to discuss this further, please feel free to reach out.",
               "Your feedback would be highly appreciated.",   
                "More information on this is available at", "please do not hesitate to contact me",  
                  "please contact me", "You make difficult tasks feel so much simpler.",
                  "Your kind words and encouragement mean a lot to me.","please feel free to contact me",
                  "Please feel free to email me here,",
                   "Please feel free to message me back if you want to stay in touch.",
                    "Please let me know your availability.", "Please let us know if you need any help.",
                     "Please get in touch if you have any questions.", "Please get in touch so that we know if",
                      "Please fill out and return the form to me by", "Please let me know which day and time work for you.",
                       "Please get back to us no later than.", "Please let me know if you require any additional information from me.", 
                       "Sorry for",
    "Sorry for my late reply", "We are sorry to", "We appreciate your feedback.", 
    "We look forward to collaborating with you.", "We are committed to providing the best service.",
     "We would like to schedule a meeting to discuss further.",
      "We believe this partnership will be mutually beneficial.",
      "We would like to send you" , "We regret to inform you that due to" , 
      "We apologize on behalf of" ,
      "We will need your response by",
      "Would it be possible to set up a meeting next week?",
      "Welcome to our team!",
      "While discussions such as this are always a challenge, it was a lot of fun, and I hope you're as happy with the outcome as we are.",
      "You can consider this email a formal acceptance. Please outline the next steps in the process. I can provide any documents, references, or information you need.",
       "You will soon receive an email confirming that your order has been dispatched and including a tracking number.",
        "Your kind words mean a lot to me.", 
        "Your help made a significant difference in my project.", 
        "Your valuable experience has been a great resource for me.", 
        "Your clear and concise feedback was beneficial.",
         "Your wisdom and guidance were greatly appreciated.",
          "Your assistance has been invaluable, and I am grateful for your help.",
          "I am looking forward to your response.",
           "I am grateful for your assistance.",
            "I am happy to provide any further information you may need.", 
            "I am excited about the opportunity.",
             "I am writing to express my interest in the position.",
              "I am available for a meeting at your convenience.", 
              "I am looking forward to hearing from you soon.", 
              "I am thankful for your willingness to consider my request.",
               "I am grateful for your unwavering dedication.",
    "See you", "Best wishes,", "Best regards,", "Sincerely yours", "Yours faithfully, ",
    "Best wishes for the future", 
    "of us at (event name) hope that you enjoyed your visit and found it valuable.",  
      "of us at (company name) can't wait to start working with you.",  
        "whom it may concern,",  
                        "thanks for your email informing us that",    
              "Unfortunately,",    "you for your hard work!",   
               "you for your job offer, please take this email as a formal acceptance.",    
                "you for your recent update on ()",   "for the valuable feedback you provided.",   
                 "for accepting our recent job offer, and welcome to the team!",    "for your feedback from all of us at (company name).",   
                   "for meeting me today at",    "for reaching out regarding our recent discussion.",    "once again for your time and consideration.",  
                     "for investing your time and energy into this.",    "for your patience and understanding.",   
                        "would be",   "you please send me the report this week?",    "you mind," ,"that",    "wonder if",  
                          "really interested to learn about",    "wish you well with the rest of your day.",   
                           "unable to provide the information you requested at this moment.",  
                             "just wanted to reach out and say thank you for everything that you have done for me.",   "can provide any documents, references, or information you need.",    "received your email and have read it with interest.",    "available on",    "looking forward to",    "would really appreciate",    "for your email,",    "to unforeseen circumstances,",    "hesitate to contact me via email or give me a call if you would like to.",
"contacting me about",    "attending",    "asking us about",       "included my contact details here (insert details).",  
  "wanted to say thank you for taking the time to meet me.", 
     "like to request a meeting with you to discuss",  
       "you're as happy with the outcome as we are.",  
         "attached the report to this email.",    "honored to be applying to the", 
            "would be grateful if you could",    "will be available later the same week, if rescheduling the meeting is an option.",  
             "apologise for not answering sooner.",    "believe my skills and experience make me a strong candidate for this role.",   
              "just wanted to send a quick message thanking you for choosing [Your Company] for your recent project.",  
                "appreciate the time you took to review my application.",    "can’t thank you enough for your help ",  
                 "appreciate your detailed explanation.",    "truly appreciate your willingness to help.",  
                   "appreciate the opportunity to learn more about the company and the role, and I am excited about the possibility of joining your team.",    "wanted to take a moment to thank you for taking the time to speak with me about the [Job Title] position at [Company Name].",    "remain very interested in the opportunity to work with your team, and I’m confident that my skills and experience would make me a valuable asset to your organization.", "inviting me to", "let you know",
    "let me know",    "you have further questions,", "have further questions,", "need any further assistance,",
     "inform you", "need to", "require any additional information, please don't hesitate to contact me at any point.",
      "would like to discuss this further, please feel free to reach out.", "appreciate your feedback.", "look forward to collaborating with you.", 
      "are committed to providing the best service.", "would like to schedule a meeting to discuss further.", 
      "believe this partnership will be mutually beneficial.", 
      "would like to send you", "regret to inform you that due to", 
      "apologize on behalf of", "will need your response by",
       "assistance has been invaluable, and I am grateful for your help.",
        "am looking forward to your response.", "grateful for your assistance.", 
        "happy to provide any further information you may need.", "excited about the opportunity.", 
        "writing to express my interest in the position.", "available for a meeting at your convenience.",
         "looking forward to hearing from you soon.", 
         "writing to express my gratitude for the opportunity to interview for the [position] at [Company Name].",
          "possible to set up a meeting next week?",  
            "you can consider this email a formal acceptance. ",
             "Please outline the next steps in the process.",   
              "will soon receive an email confirming that your order has been dispatched and including a tracking number.",  
                "kind words mean a lot to me.",    "help made a significant difference in my project.", 
                   "valuable experience has been a great resource for me.",    "clear and concise feedback was beneficial.",  
                     "wisdom and guidance were greatly appreciated.",    "thankful for your willingness to consider my request.", 
                       "grateful for your unwavering dedication.",
    

"In accordance with your request of ",
"we are pleased to inform you that",
"We would greatly appreciate your answer. ",
"We would like you to send us ",
"Please take notice that ",
"Please send us",
"Please accept our apologies for ",
"I must apologise that ",
"Would you please ",
"We would be happy if you could ",
"We would like to note that ",
"Здравствуйте, ",
"Добрый день, ",
"Привет",   
"Уважаемый ",
"Уважаемая ",
"Что касается вопроса о ",
 "Исходя из вышесказанного",
"В заключение хотим напомнить Вам о ",
"Позвольте напомнить вам о ",
"В связи с неполучением счета-фактуры ",
"Обращаюсь к вам по поводу ",
"Ссылаясь на Вашe письмо от ",

 "Мы внимательно рассмотрели ваше предложение и хотели бы отметить ",
"В ответ на Ваше письмо ",
"На основании нашего телефонного разговора ",
"Согласно постановлению правительства ",
"В целяx скорейшего решения вопроса ",
"В целях безопасности прохождения груза ",
"Во избежание конфликтных ситуаций ",
"желаем успехов ",
"приносим извинения ",
"мы не сможем этого сделать ",
"Спешим сообщить Вам о том, что ",
"Довожу до Вашего сведения, что ",
"Считаю необходимым обсудить с Вами ",
"Мы хотели бы обсудить ",
"Хочу обсудить с вами ",
"Хотелось бы обсудить с вами ",
"Спасибо за помощь! ",
"Обращаюсь к Вам в связи с ",
"В связи с вашим интересом к [продукту/услуге], мы готовы предложить ",
"Предоставляю (Вам) информацию (сведения) о ",
"Вынуждены сообщить ",
"Руководствуясь интересами предприятия, обращаю Ваше внимание на ",
"Рады сообщить о возможности ",
"Мы рады сообщить вам о",
"Напоминаем вам о ",
"Рады предложить Вам ",
"Хотим привлечь Ваше внимание ",
"Мы ценим ваше сотрудничество и хотели бы предложить ",
"Мы ценим ваше сотрудничество и хотели бы обсудить возможности для дальнейшего взаимодействия. ",
"В рамках нашего партнерства, мы предлагаем вам рассмотреть ",
"Просим принять решительные меры по ",
"Просим направить вашего представителя ",
"Ждем Вашего решения, чтобы оперативно подготовить документы ",
"Будем рады видеть Вас в числе наших клиентов ",
"Мы уверены, что наше сотрудничество принесет взаимную выгоду и успех. ",
"Мы готовы предоставить вам дополнительную информацию по запросу. ",
"Надеемся на скорейшее рассмотрение нашего запроса ",
"Рассчитываем на Вашу заинтересованность ",
"Благодарим за содействие и надеемся на дальнейшее плодотворное сотрудничество.",
"Будем рады продолжить наше сотрудничество и развивать его в будущем. ",
"Мы уверены, что совместными усилиями мы сможем достичь отличных результатов. ",
"Благодарим вас за внимание к нашему предложению и надеемся на скорый ответ. ",
"Обращаем ваше внимание на то, что",
"C готовностью ответим на Ваши вопросы",
"Дорогие друзья! ",
"Уважаемые коллеги! ",
"Уважаемые партнеры! ",
"Благодарим за интерес, проявленный Вами к ",
"Благодарим вас за внимание к нашему предложению ",
"Ожидаем вашего ответа ",
"Если у вас возникнут вопросы, не стесняйтесь обращаться. ",
"Если у вас возникнут вопросы или потребуется дополнительная информация, пожалуйста, не стесняйтесь обращаться. ",


"В ответ на полученный нами запрос о ",
"Подтверждаем получение Вашего заказа от ",
"Выражаем благодарность ",
"Мы будем вынуждены ",
"обратиться в судебные органы ",
"инициировать судебное разбирательство ",
"отказаться от дальнейшего сотрудничества ",
 "пересмотреть условия сотрудничества ",
 "поднять вопрос о штрафных санкциях ",
 "поставить вопрос о целесообразности дальнейшего сотрудничества ",
"прибегнуть к предусмотренным в договоре санкциям ",
 "заявить о нашем намерении добиваться ",
"Мы не хотели бы отказываться от сотрудничества и надеемся ",
"С радостью сообщаем Вам о том, что",
"По причине задержки оплаты",
"Ввиду несоответствия Ваших действий ранее принятым договоренностям",
"В соответствии с достигнутой ранее договоренностью",
"Ввиду задержки получения груза",
"С уважением, ",
"С наилучшими пожеланиями, ",
"Искренне ваш, ",
"Искренне ваша, ",



    
];


let userPhrases = [];

// Загрузка сохраненных фраз
function loadPhrases() {
    chrome.storage.local.get("phrases", (data) => {
        userPhrases = data.phrases || [];
        console.log("Загруженные фразы:", userPhrases); // Debugging line to check loaded phrases
    });
}

// Создание блока предложений
function createSuggestionBox(input, textBox) {
    if (!input) {
        return; // Если ввод пустой, ничего не делаем
    }

    const existingBox = document.querySelector('.suggestion-box');
    if (existingBox) {
        existingBox.remove();
    }

    const suggestionBox = document.createElement("div");
    suggestionBox.className = 'suggestion-box';
    suggestionBox.style.position = "absolute";
    suggestionBox.style.backgroundColor = "white";
    suggestionBox.style.border = "1px solid #ccc";
    suggestionBox.style.zIndex = 1000;
    
    // Create a scrollable container for the suggestions
    const scrollableContainer = document.createElement("div");
    scrollableContainer.style.maxHeight = "200px";
    scrollableContainer.style.overflowY = "auto";
    scrollableContainer.style.padding = "5px 0";
    suggestionBox.appendChild(scrollableContainer);

    const allPhrases = [...userPhrases, ...commonPhrases];

    // Фильтруем фразы по одному слову
    allPhrases.forEach((phrase) => {
        if (phrase.toLowerCase().startsWith(input.toLowerCase())) {
            const suggestionItem = document.createElement("div");
            suggestionItem.textContent = phrase;
            suggestionItem.style.padding = "5px 10px";
            suggestionItem.style.cursor = "pointer";
            suggestionItem.style.transition = "background-color 0.2s ease";
            suggestionItem.onmouseover = () => {
                suggestionItem.style.backgroundColor = "#f0f0f0";
            };
            suggestionItem.onmouseout = () => {
                suggestionItem.style.backgroundColor = "transparent";
            };
            suggestionItem.onclick = async () => {
                // Check if user is premium or free
                let isPremiumUser = false;
                try {
                    const session = await new Promise((resolve, reject) => {
                        chrome.storage.local.get(['userSession'], (result) => {
                            if (chrome.runtime.lastError) {
                                reject(chrome.runtime.lastError);
                            } else {
                                resolve(result.userSession);
                            }
                        });
                    });
                    isPremiumUser = session?.user?.isPremium || false;
                } catch (error) {
                    console.error('Error getting user session:', error);
                }

                // Function to get today's date string YYYY-MM-DD
                function getTodayDateString() {
                    const today = new Date();
                    return today.toISOString().split('T')[0];
                }

                // Function to get today's count from storage
                async function getTodayCount() {
                    const dateKey = getTodayDateString();
                    return new Promise((resolve, reject) => {
                        chrome.storage.local.get([dateKey], (result) => {
                            if (chrome.runtime.lastError) {
                                reject(chrome.runtime.lastError);
                            } else {
                                resolve(result[dateKey] || 0);
                            }
                        });
                    });
                }

                // Function to increment today's count in storage
                async function incrementTodayCount() {
                    const dateKey = getTodayDateString();
                    const count = await getTodayCount();
                    return new Promise((resolve, reject) => {
                        chrome.storage.local.set({ [dateKey]: count + 1 }, () => {
                            if (chrome.runtime.lastError) {
                                reject(chrome.runtime.lastError);
                            } else {
                                resolve();
                            }
                        });
                    });
                }

                const FREE_VERSION_DAILY_LIMIT = 20;

                if (!isPremiumUser) {
                    try {
                        const count = await getTodayCount();
                        if (count >= FREE_VERSION_DAILY_LIMIT) {
                            alert(`You have reached the limit of ${FREE_VERSION_DAILY_LIMIT} prompts for today in the free version!`);
                            return; // Do not insert suggestion
                        }
                    } catch (error) {
                        console.error('Error getting today count:', error);
                    }
                }

                // Insert the selected phrase
                const currentText = textBox.innerText;
                const newText = currentText.slice(0, -input.length) + phrase + " ";
                textBox.innerText = newText;

                // Set cursor to end
                const range = document.createRange();
                const selection = window.getSelection();
                range.selectNodeContents(textBox);
                range.collapse(false);
                selection.removeAllRanges();
                selection.addRange(range);

                // Remove suggestion box after selection
                suggestionBox.remove();

                // Increment count if free user
                if (!isPremiumUser) {
                    try {
                        await incrementTodayCount();
                    } catch (error) {
                        console.error('Error incrementing today count:', error);
                    }
                }
            };
            scrollableContainer.appendChild(suggestionItem);
        }
    });

    if (scrollableContainer.childNodes.length > 0) {
        document.body.appendChild(suggestionBox);

        // Получаем позицию курсора
        const range = window.getSelection().getRangeAt(0);
        const rect = range.getClientRects()[0];

        // Устанавливаем позицию suggestionBox под курсором
        suggestionBox.style.top = `${rect.bottom + window.scrollY}px`;
        suggestionBox.style.left = `${rect.left + window.scrollX}px`;
    }
}

// Инициализация текстового поля и наблюдателя
const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const textBox = document.querySelector('div[aria-label="Текст письма"][role="textbox"]');
            if (textBox) {
                console.log('textBox найден:', textBox);
                initTextBox(textBox); // Инициализация обработчиков событий
                observer.disconnect(); // Отключаем наблюдатель, как только текстовое поле найдено
            }
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });

// Инициализация обработчиков событий
function initTextBox(textBox) {
    if (textBox) {
        // Debounce function to limit input processing
        const debounce = (func, delay) => {
            let timeout;
            return function(...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), delay);
            };
        };
// Обработчик события input
const handleInput = debounce((event) => {
    const inputText = event.target.innerText;
    const words = inputText.trim().split(/\s+/);
    const lastWord = words[words.length - 1];

    // Проверяем, является ли последнее слово пустым или состоит только из пробелов
    if (!lastWord || lastWord.trim() === "") {
        removeSuggestionBox();
        return;
    }

    if (inputText.endsWith(" ") || (event.inputType === "insertText" && event.data === " ")) {
        removeSuggestionBox();
        return;
    }

    // Удаляем предыдущий suggestionBox независимо от того, совпадает ли слово
    removeSuggestionBox();
    setTimeout(() => {
        // Создаем строку из последнего слова
        createSuggestionBox(lastWord, textBox);
    }, 50);
}, 200); // Настройка задержки дебаунса

textBox.addEventListener('input', handleInput);

// Функция для удаления блока предложений
function removeSuggestionBox() {
    const existingBox = document.querySelector('.suggestion-box');
    if (existingBox) {
        existingBox.remove();
    }
}

// Обработчик события keydown (можно добавить логику для сброса флага видимости предложений, если это необходимо)
textBox.addEventListener('keydown', (event) => {
    // Например, можно сбросить видимость предложений при нажатии клавиши Escape
    if (event.key === "Escape") {
        removeSuggestionBox();
    }
});
} else {
console.warn("textBox не найден");
}
}

// Инициализация загрузки фраз
loadPhrases();