//переменные для popup
const popupOpenButtonElement = document.querySelector('.services__button');
const popupOpenButtonRemoval = document.querySelector('.services__button-removal');
const popupOpenButtonDemolition = document.querySelector('.services__button-demolition');

const popupElement = document.querySelector('.popup');
const popupElementRemoval = document.querySelector('.popup-removal');
const popupElementDemolition = document.querySelector('.popup-demolition');

const popupElements = document.querySelectorAll('.popup');


const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupCloseButtonRemoval = popupElement.querySelector('.popup__close-removal');
const popupCloseButtonDemolition = popupElement.querySelector('.popup__close-demolition');


console.log(popupElements);

//функции открытия и закрытия popup
function openPopup(popup) {
    //popupElements.forEach((el) => {
        popup.classList.add('popup_is-opened');
    //});
    
    setPopupEventListener(popup);
}
function closePopup(popup) {
    popup.classList.remove('popup_is-opened')
    //removePopupEventListener(popup);
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

// function renderOpenPopupImg(event) {
//   popupImage.src = event.target.src;
//   popupImage.alt = event.target.alt;
//   popupImgText.textContent = event.target.alt;
//   openPopup(popupImgElement);
// }

//слушатели событий popup
popupOpenButtonElement.addEventListener('click', () => {
    openPopup(popupElement);
});

popupOpenButtonRemoval.addEventListener('click', () => {
    openPopup(popupElementRemoval);
});

popupOpenButtonDemolition.addEventListener('click', () => {
    openPopup(popupElementDemolition);
});

popupCloseButtonElement.addEventListener('click', () => {
    closePopup(popupElement);
});