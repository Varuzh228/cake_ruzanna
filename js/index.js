

const ofs = 100; // offset если уже проскролено на 100, то кнопка должна проявиться
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashOffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;


 //function #1: updateDashoffset
const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (getTop() * pathLength / height);

    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// function #2: onScroll
window.addEventListener('scroll', () => {
    updateDashoffset();

    if (getTop() > ofs) {
        scrollUp.classList.add('scroll-up-active');
    } else {        scrollUp.classList.remove('scroll-up-active');
    };
});

// function #3: click
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0, // к началу
        behavior: 'smooth' // плавно
    });
});






//Header

$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

});


/*document.querySelectorAll('a.nav__link').forEach(link =>{
 
 link.addEventListener('click', function (e) {

   e.preventDefault()


    const href = this.getAttribute('href').substring(1)


    const scrollTarget = document.getElementById(href)



    const topOffset = 100
    const elementPosition = scrollTarget.getBoundingClientRect().top
    const offsetPosition = elementPosition - topOffset



    window.scrollBy({
      
      top: offsetPosition,

      behavior: 'smooth',



     })
 
   })
 
})*/


document.querySelectorAll('a.nav__link_1').forEach(link =>{
 
 link.addEventListener('click', function (e) {

   e.preventDefault()


    const href = this.getAttribute('href').substring(1)


    const scrollTarget = document.getElementById(href)



    const topOffset = 100
    const elementPosition = scrollTarget.getBoundingClientRect().top
    const offsetPosition = elementPosition - topOffset

    

    window.scrollBy({
      
      top: offsetPosition,

      behavior: 'smooth',



     })
 
   })
 
})


document.querySelectorAll('a.glo').forEach(link =>{
 
 link.addEventListener('click', function (e) {

   e.preventDefault()


    const href = this.getAttribute('href').substring(1)


    const scrollTarget = document.getElementById(href)



    const topOffset = 100
    const elementPosition = scrollTarget.getBoundingClientRect().top
    const offsetPosition = elementPosition - topOffset



    window.scrollBy({
      
      top: offsetPosition,

      behavior: 'smooth',



     })
 
   })
 
})







