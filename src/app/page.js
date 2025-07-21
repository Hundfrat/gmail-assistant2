import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  // Состояния для меню и селекта (пример)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectOpen, setSelectOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState('en')

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  function toggleSelect() {
    setSelectOpen(!selectOpen)
  }

  function selectOption(option) {
    setSelectedLang(option)
    setSelectOpen(false)
  }

  return (
    <>
      <Head>
        <title>Assistant</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/style.css" />
        {/* Скрипты лучше перенести в React, поэтому script.js не подключаем */}
      </Head>

      <div className="background">
        <div className="container">
          <header>
            <div className="header-wrapper">
              <a href="#" className="header-logo">
                <img src="/images/gmain.png" alt="Gmail icon" className="header-logo__img" />
                <span
                  className="translate-transition"
                  data-en="Gmail Assistant"
                  data-ru="Gmail Ассистент"
                >
                  Gmail Assistant
                </span>
              </a>

              <div className="hamburger" onClick={toggleMenu} role="button" tabIndex={0}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>

              <ul className={`header-list__lists ${menuOpen ? 'open' : ''}`}>
                <div className="custom-select">
                  <div
                    className="select-header"
                    onClick={toggleSelect}
                    role="button"
                    tabIndex={0}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"></path>
                    </svg>
                    <span className="selected-option">
                      {selectedLang === 'en' ? 'English' : 'Русский'}
                    </span>
                  </div>

                  {selectOpen && (
                    <div className="select-options">
                      <div
                        className={`option ${selectedLang === 'en' ? 'selected' : ''}`}
                        data-value="en"
                        onClick={() => selectOption('en')}
                        role="button"
                        tabIndex={0}
                      >
                        <input
                          className="select-radio"
                          type="radio"
                          checked={selectedLang === 'en'}
                          readOnly
                        />
                        <span data-en="English" data-ru="English">
                          English
                        </span>
                      </div>
                      <div
                        className={`option ${selectedLang === 'ru' ? 'selected' : ''}`}
                        data-value="ru"
                        onClick={() => selectOption('ru')}
                        role="button"
                        tabIndex={0}
                      >
                        <input
                          className="select-radio"
                          type="radio"
                          checked={selectedLang === 'ru'}
                          readOnly
                        />
                        <span data-en="Русский" data-ru="Русский">
                          Русский
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <li>
                  <a
                    href="#work"
                    className="header-list__list translate-transition"
                    data-en="How it works"
                    data-ru="Как это работает"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#feat"
                    className="header-list__list translate-transition"
                    data-en="Features"
                    data-ru="Ключевые особенности"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#price"
                    className="header-list__list translate-transition"
                    data-en="Pricing"
                    data-ru="Цены"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="https://gmail-assistant-gq45.onrender.com/api/auth/signin/google?callbackUrl=https://gmail-assistant-gq45.onrender.com"
                    className="header-list__list translate-transition"
                    data-en="Sign in with Google"
                    data-ru="Войти через Google"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign in with Google
                  </a>
                </li>
                <li>
                  <a href="#" className="header-btn">
                    <img src="/images/google.png" alt="Google icon" className="header-btn__img" />
                    <span
                      className="translate-transition"
                      data-en="Add to Chrome — It's free"
                      data-ru="Установить в Chrome — бесплатно"
                    >
                      Add to Chrome — It's free
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </header>

          <main>
            <section>
              <h1
                className="main-title translate-transition"
                data-en="Increase Productivity. <br> Write faster. Write better."
                data-ru="Достигайте лучших результатов с меньшими усилиями. <br> Пишите быстрее. Пишите лучше."
                // Чтобы <br> работал, лучше разбить на элементы:
              >
                Increase Productivity. <br /> Write faster. Write better.
              </h1>
              <p
                className="main-text translate-transition"
                data-en="Make your Gmail experience more efficient and enjoyable"
                data-ru="Сделайте работу с Gmail более эффективной и приятной"
              >
                Make your Gmail experience more efficient and enjoyable
              </p>
              <a href="" className="main-btn">
                <img src="/images/google.png" alt="" className="header-btn__img" />
                <span
                  className="translate-transition"
                  data-en="Add to Chrome — It's free"
                  data-ru="Установить в Chrome — бесплатно"
                >
                  Add to Chrome — It's free
                </span>
              </a>
            </section>

            {/* Остальные секции — аналогично, с заменой class → className и обработчиками */}
            {/* Для краткости не вставляю весь код, но принцип тот же */}

          </main>

          <footer>
            <ul className="footer-btns">
              <li>
                <a
                  href="TermsOfService.html"
                  className="footer-btn translate-transition"
                  data-en="Terms of service"
                  data-ru="Условия использования"
                >
                  Terms of service
                </a>
              </li>
              <li>
                <a
                  href="PrivacyPolicy.html"
                  className="footer-btn translate-transition"
                  data-en="Privacy policy"
                  data-ru="Политика конфиденциальности"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="footer-btn translate-transition"
                  data-en="Contact us"
                  data-ru="Связаться с нами"
                >
                  Contact us
                </a>
              </li>
            </ul>

            <div className="modal">
              <div className="modal-content">
                <span className="close-modal">&times;</span>
                <h2
                  className="modal-title translate-transition"
                  data-en="Contact Us"
                  data-ru="Связаться с нами"
                >
                  Contact Us
                </h2>
                <form>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="translate-transition"
                    data-en-placeholder="Your Name"
                    data-ru-placeholder="Ваше имя"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="translate-transition"
                    data-en-placeholder="Your Email"
                    data-ru-placeholder="Ваш Email"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="translate-transition"
                    data-en-placeholder="Your Message"
                    data-ru-placeholder="Ваше сообщение"
                  ></textarea>
                  <button type="submit" className="translate-transition" data-en="Send" data-ru="Отправить">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
