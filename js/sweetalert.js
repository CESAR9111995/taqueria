
function bienvenida(){

swal.fire({

html: `<h1 class="title-bienvenida">Bienvenido a FLAMING TACO</h1>
<img src="imagenes/logo3.png" class="icono-alert">`,
background: '#000',
confirmButtonText: 'Cerrar'
});

}

setTimeout(bienvenida, 3000);


function menuTacos(){

    swal.fire({
        html: `<h1 class="title-menu-comida">Menú Tacos</h1>
        <ul class="menu-alert">
        <li>taco de Bisteck -------------- $12</li>
        <li>taco de Longaniza -------------- $12</li>
        <li>taco de Carne enchilada -------------- $12</li>
        <li>taco de Chorizo con papas -------------- $12</li>
        <li>taco de Suadero -------------- $12</li>
        <li>taco de Pastor -------------- $12</li>
        <li>taco de Carnitas -------------- $18</li>
        </ul>
        `,
        background: '#FFF',
        confirmButtonText: 'Cerrar'
        });  

}

function menuBurritos(){

    swal.fire({
        html: `<h1 class="title-menu-comida">Menú Burritos</h1>
        <ul class="menu-alert">
        <li>Burrito de Bisteck -------------- $25</li>
        <li>Burrito de Suadero -------------- $25</li>
        <li>Burrito de Choriqueso -------------- $25</li>
        <li>Burrito de Pastor -------------- $25</li>
        <li>Burrito de Pollo -------------- $25</li>
        </ul>
        `,
        background: '#FFF',
        confirmButtonText: 'Cerrar'
        });  

}

function menuQuesadillas(){

    swal.fire({
        html: `<h1 class="title-menu-comida">Menú Quesadillas</h1>
        <ul class="menu-alert">
        <li> Tinga -------------- $20</li>
        <li> Champiñones con queso -------------- $20</li>
        <li> Queso -------------- $20</li>
        <li> Carne -------------- $20</li>
        <li> Flor de calabaza -------------- $20</li>
        </ul>
        `,
        background: '#FFF',
        confirmButtonText: 'Cerrar'
        });  

}

function menuGorditas(){

    swal.fire({
        html: `<h1 class="title-menu-comida">Menú Gorditas</h1>
        <ul class="menu-alert">
        <li>Gordita de Chicharron -------------- $15</li>
        <li>Gordita de Suadero -------------- $15</li>
        <li>Gordita de Carnitas -------------- $15</li>
        </ul>
        `,
        background: '#FFF',
        confirmButtonText: 'Cerrar'
        });  

}

function menuHuaraches(){

    swal.fire({
        html: `<h1 class="title-menu-comida">Menú Huaraches</h1>
        <ul class="menu-alert">
        <li>Huarache sencillo -------------- $15</li>
        <li>Huarache c/ bisteck -------------- $25</li>
        <li>Huarache c/ huevo -------------- $25</li>
        <li>Huarache c/ quesillo -------------- $25</li>
        <li>Huarache de longaniza -------------- $25</li>
        </ul>
        `,
        background: '#FFF',
        confirmButtonText: 'Cerrar'
        });  

}

function menuBebidas(){

    swal.fire({
        html: `<h1 class="title-menu-comida">Menú Bebidas</h1>
        <ul class="menu-alert">
        <li>Agua de horchata -------------- $15</li>
        <li>Agua de Jamaica -------------- $15</li>
        <li>Agua de Limón -------------- $15</li>
        <li>Coca cola -------------- $15</li>
        <li>Mirinda -------------- $15</li>
        <li>Sprite -------------- $15</li>
        </ul>
        `,
        background: '#FFF',
        confirmButtonText: 'Cerrar'
        });  

}

document.getElementById('btn-tacos').addEventListener('click', menuTacos);
document.getElementById('btn-burritos').addEventListener('click', menuBurritos);
document.getElementById('btn-quesadillas').addEventListener('click', menuQuesadillas);
document.getElementById('btn-gorditas').addEventListener('click', menuGorditas);
document.getElementById('btn-huaraches').addEventListener('click', menuHuaraches);
document.getElementById('btn-bebidas').addEventListener('click', menuBebidas);