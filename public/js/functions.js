function openMenu(){
    let menu = document.getElementById('sideMenu')
    menu.style.display = "flex"
}

function buscar(){
    let buscar = document.getElementById('searchContent')
    buscar.style.display = 'block'
}

function closedMenu(){
    let closed = document.getElementById('sideMenu')
    let searchclosed = document.getElementById('searchContent')
    searchclosed.style.display = "none"
    closed.style.display = "none"
}