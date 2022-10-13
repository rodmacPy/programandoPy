arrastrarElemento(document.getElementById('componente1'));
arrastrarElemento(document.getElementById('componente2'));
arrastrarElemento(document.getElementById('componente3'));
arrastrarElemento(document.getElementById('componente4'));
arrastrarElemento(document.getElementById('componente5'));
arrastrarElemento(document.getElementById('componente6'));
arrastrarElemento(document.getElementById('componente7'));
arrastrarElemento(document.getElementById('componente8'));
arrastrarElemento(document.getElementById('componente9'));
arrastrarElemento(document.getElementById('componente10'));
arrastrarElemento(document.getElementById('componente11'));
arrastrarElemento(document.getElementById('componente12'));
arrastrarElemento(document.getElementById('componente13'));
arrastrarElemento(document.getElementById('componente14'));
arrastrarElemento(document.getElementById('componente15'));
arrastrarElemento(document.getElementById('componente16'));
arrastrarElemento(document.getElementById('producto1'));
arrastrarElemento(document.getElementById('producto2'));
arrastrarElemento(document.getElementById('producto3'));
arrastrarElemento(document.getElementById('producto4')); // recibe como argumento el id del elemento 'componente o producto'
function arrastrarElemento(element) { // arrastrarElemento  recibe el objeto element
    //Declaramos 4 variables para manejar la posición de cada elemento en la pantalla.
    let pos1 = 0, // establece posiciones locales 0
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    element.onpointerdown = arrastrarPuntero

    function arrastrarPuntero(e) { // evita los eventos predeterminados al precionar con el puntero
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = iniciarArrastreElemento; // Indica que el elemento se arraste conto al puntero cuuando se mueve 
        document.onpointerup = pararArrastreElemento;
    }
    

    function iniciarArrastreElemento(e) { // edita las posiciones iniciales
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        element.style.top = element.offsetTop - pos2 + 'px';
        element.style.left = element.offsetLeft - pos1 + 'px';
    }

    function pararArrastreElemento() { // restablece los eventos onpointerup y onpointermove
        document.onpointerup = null;
        document.onpointermove = null;
    }
}


function cambiarFondo(){ //cambia el fondo al hacer clic en la pantalla
        
    let hex = "0123456789ABCDEF"; // almacena las combinaciones en hex
 
    let color = '#'; // el color debe comenzar con #

    for (i = 0; i < 6; i++)
        color += hex[(Math.floor(Math.random() * 16))]; // combina los digitos y guarda en color

    document.getElementById('fondo').style.background=color; // al hacer clic cambia automaticamente el fondo
}
window.alert("Dar doble clic a la pantalla")

