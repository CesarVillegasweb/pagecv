let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}
 
const sr = ScrollReveal ({
    distance:'65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.text-ini',{delay:200, origin:'top'});
sr.reveal('.newalbum',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll',{delay:500, origin:'rigth'});
sr.reveal('.contenedor',{delay:450, origin:'top'});
sr.reveal('h1',{delay:200, origin:'top'});