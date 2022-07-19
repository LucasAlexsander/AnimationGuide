const fadeLeft = document.querySelectorAll('.fade-left');
const fadeRight = document.querySelectorAll('.fade-right');
const fadeUp = document.querySelectorAll('.fade-up');
const fadeDown = document.querySelectorAll('.fade-down');

const allFade = [fadeLeft, fadeRight, fadeUp, fadeDown];

const handleScroll = () => {
    windowScroll = window.scrollY + (window.innerHeight - 240);

    allFade.forEach(fades => {
        fades.forEach(fade => {
            if(fade.offsetTop <= windowScroll) {
                fade.classList.add('append');
            }
        });         
    });

}
window.addEventListener('scroll', handleScroll);
