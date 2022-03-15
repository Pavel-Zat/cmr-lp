//переменные для popup
const popupOpenButtonElement = document.querySelector('.services__button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');

//функции открытия и закрытия popup
function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    setPopupEventListener(popup);
}
function closePopup(popup) {
    popup.classList.remove('popup_is-opened')
    removePopupEventListener(popup);
}

function setPopupEventListener(popup) {
    popup.addEventListener('click', closePopupByClickOnOverlay);
    document.addEventListener('keydown', closePopupByEscape);
}


//функция закрытия popup по клику на оверлей
function closePopupByClickOnOverlay(event) {
    const popups = event.target;
    if (event.target !== event.currentTarget) {
        return
    }
    closePopup(popups);
}

//функция закрытия popup по нажатию на кнопку Esc
function closePopupByEscape(event) {
    const esc = 'Escape';
    if (event.key === esc) {
        const openPopup = document.querySelector('.popup_is-opened');
        closePopup(openPopup);
    }
}
//слушатели событий popup
popupOpenButtonElement.addEventListener('click', () => {
    openPopup(popupElement);


});
popupCloseButtonElement.addEventListener('click', () => {
    closePopup(popupElement);
});