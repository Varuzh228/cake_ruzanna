const popupLinks = document.querySelectorAll('.popup_link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;


if (popupLinks.length > 0) {
 for (let index = 0; index < popupLinks.length; index++) {
   const popupLink = popupLinks[index];
   popupLink.addEventListener("click", function (e) {    	
   const popupName = popupLink.getAttribute('href').replace('#', '');
   const curentPopup = document.getElementById('popupName');
   popupOpen(curentPopup);
   e.preventDefault();

    });

  }
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
 for (let index = 0; index < popupCloseIcon.length; index++) {
   const el = popupCloseIcon[index];
   el.addEventListener('click', function (e) {
    popupClose(el.closest('.popup'));
    e.preventDefault();
   });
 }

}


function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
     const popupActive = document.querySelector('.popup.open');
     if (popupActive) {
         popupClose(popupActive, false);
     } else {
       bodyLock();
     }       
    
   curentPopup.ClassList.add('open');
   curentPopup.addEventListener("click", function (e) {
     if (!e.target.closest('.poup__content')) {
         popupClose(e.target.closest('.popup'));
       
       }
   });

  }

}

function popupClose(popupActive, doUnlock = true){

if (unlock) {
  popupActive.ClassList.remove('open');
  if (doUnlock) {
    bodyUnLock();

  }

 }

}




function bodyLock(){

const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
for (let  index = 0; index < lockPadding.length; index++) {

  const el = lockPadding[index];
  el.style.paddingRight = lockPaddingValue;
}
body.style.paddingRight = lockPaddingValue;
body.ClassList.add('lock');

unlock = false;
setTimeout(function () {
    unlock = true;
 }, timeout);

}



















