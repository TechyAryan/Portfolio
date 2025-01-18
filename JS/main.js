/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active')
		}else{
			sectionsClass.classList.remove('active')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

document.querySelectorAll('.nav_link').forEach(link => {
   link.addEventListener('click', function() {
      document.querySelector('.nav_link.active')?.classList.remove('active');
      this.classList.add('active');
   });
});

// Scroll to the "home" section on page load
document.addEventListener('DOMContentLoaded', () => {
   const homeSection = document.querySelector('#home');
   if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
   }
});

// Scroll Reveal Animation

const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2000,
   delay: 100
})
sr.reveal(`.section_pic`,{origin: 'right'});
sr.reveal(`.section_text, .social_container`,{origin: 'left'});



