const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');


burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');


    nav.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
        }
    })
});

//Swiper


const swiper = new Swiper('.swiper1', {
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,
    // centeredSlides: true,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    slideToClickedSlide: true,
    breakpoints: {
        768:{
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
        },
        1024:{
            slidesPerView: 3,
            centeredSlides: true,
        }
    }
});

const swiper2= new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 100,
    // loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.btn-next2',
        prevEl: '.btn-prev2',
    },
    slideToClickedSlide: true,
    breakpoints: {
        768:{
            slidesPerView: 2,
            // spaceBetween: 50,
            // centeredSlides: false,
        },        
        1024:{
            slidesPerView: 2,
            // centeredSlides: true,
        }
    }
})


/// Scroll up

const scrollUp = document.getElementById("scroll-up");


let t;
function up() {
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-150);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

window.addEventListener('scroll', ()=>{
    scrollUp.hidden = (pageYOffset < document.documentElement.clientHeight);
});
