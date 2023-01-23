const nav = document.getElementById('nav')
const menu = document.getElementById('infor')
const left_part = document.getElementById('lp')
nav.onclick = function(){
    nav.classList.toggle('active')
    menu.classList.toggle('active')
    left_part.classList.toggle('active')
}

document.onclick = function(clickEvent){
    if (clickEvent.target.id !== "menu" && clickEvent.target.id !== "nav"){
        nav.classList.toggle('active')
        menu.classList.toggle('active')
        left_part.classList.toggle('active')
    }

}