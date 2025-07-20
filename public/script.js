document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 102;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

let currentLanguage = 'en';
const selectHeader = document.querySelector('.select-header');
const selectOptions = document.querySelector('.select-options');
const selectedOptionText = document.querySelector('.selected-option');

function toggleSelect() {
    selectHeader.classList.toggle('open');
    selectOptions.classList.toggle('open');
}

function selectOption(option) {
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
        opt.querySelector('.select-radio').checked = false;
    });

    option.classList.add('selected');
    option.querySelector('.select-radio').checked = true;

    selectedOptionText.textContent = option.querySelector('span').textContent;

    selectHeader.classList.remove('open');
    selectOptions.classList.remove('open');

    currentLanguage = option.getAttribute('data-value');
    translatePage();
}

function translatePage() {
    document.querySelectorAll('[data-en], [data-ru]').forEach(element => {
        if (element.hasAttribute(`data-${currentLanguage}`)) {
            const newText = element.getAttribute(`data-${currentLanguage}`);

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                const placeholderAttr = `data-${currentLanguage}-placeholder`;
                if (element.hasAttribute(placeholderAttr)) {
                    element.placeholder = element.getAttribute(placeholderAttr);
                }
            } else {
                if (element.innerHTML !== newText) {
                    element.innerHTML = newText;
                }
            }
        }
    });
}

document.addEventListener('click', function (event) {
    if (!event.target.closest('.custom-select')) {
        selectHeader.classList.remove('open');
        selectOptions.classList.remove('open');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    translatePage();
});

const contactBtn = document.querySelector('.footer-btn[href="#contact"]');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
if (contactBtn) {
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
});
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

function toggleMenu() {
    const menu = document.querySelector('.header-list__lists');
    const hamburger = document.querySelector('.hamburger');

    menu.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}
document.querySelectorAll('.header-list__list').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 1150) {
            toggleMenu();
        }
    });
});