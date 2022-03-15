//переменные для popup
const popupOpenButtonElement = document.querySelector('.services__button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const formElement = document.querySelector('.popup__content');
const nameInput = formElement.querySelector('.popup__text_type_name');
const jobInput = formElement.querySelector('.popup__text_type_job');
const nameProfile = document.querySelector('.profile__info-title');
const jobProfile = document.querySelector('.profile__info-subtitle');

//функции открытия и закрытия popup
function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    setPopupEventListener(popup);
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
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    openPopup(popupElement);
    editFormValidator.disableSubmit();
    editFormValidator.removeError();
    
  });
  popupCloseButtonElement.addEventListener('click', () => {
    closePopup(popupElement);
  });