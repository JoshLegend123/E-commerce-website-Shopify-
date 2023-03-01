var bar = document.getElementById('bar');
var nav = document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}
var closeTab = document.getElementById('close');
if (closeTab) {
    closeTab.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}