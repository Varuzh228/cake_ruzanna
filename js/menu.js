let menuArrows = document.querySelectorAll('.menu__arrow');
if (menuArrows.length > 0) {

  for (let index = 0; index < menuArrows.length; index++) {

  	const menuArrow = menuArrows[index];
  	menuArrow.addEventListener("click", function(e) {

  		menuArrow.parentElement.classList.toggle('active');
  		
  	});

  }

}
