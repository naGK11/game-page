// Obtén la referencia del elemento img con la clase 'menu'
const menuImg = document.querySelector('.menu');

// Obtén la referencia del elemento con la clase 'sidebar__container'
const sidebarContainer = document.querySelector('.sidebar__container');

// Agrega un controlador de eventos de clic al elemento img
menuImg.addEventListener('click', function() {
    // Si el display del sidebar es 'none', cambia a 'flex'
    if (sidebarContainer.style.display === 'none') {
        sidebarContainer.style.display = 'flex';
    } 
    // Si el display del sidebar es 'flex', cambia a 'none'
    else {
        sidebarContainer.style.display = 'none';
    }
});

//lo mismo que arriba pero para el menu de cuenta de arriba a la derecha
document.querySelector('.user__btn').addEventListener('click', function(){
    var dropMenu = document.querySelector('.drop__menu');
    if(dropMenu.style.display === 'none'){
        dropMenu.style.display = 'flex';
    } else {
        dropMenu.style.display = 'none';
    }
});









