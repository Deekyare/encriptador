
const inputTexto = document.querySelector(".inputTexto")
const contenedorSinMensaje = document.querySelector(".contenedor-sin-mensaje")
const contenedorResultado = document.querySelector(".contenedor-resultado")
const resultado = document.querySelector(".resultado")
const copiar= document.querySelector(".copiar")

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

// Obtener el texto que escribio el usuario
function btnEncriptar () {
    let mensaje = inputTexto.value;
    // Encriptar con las reglas dadas
    let nuevo = mensaje
        .replace(/e/g,'enter')
        .replace(/i/g,'imes')
        .replace(/a/g,'ai')
        .replace(/o/g,'ober')
        .replace(/u/g,'ufat');
    
    // Escribir dentro de resultado el mensaje encriptado
    resultado.innerHTML = nuevo
   
    // Esconder el cactus agregandole la clase escondido
    contenedorSinMensaje.classList.add("escondido")
    // Sacarle la clase escondido al bloque con el texto encriptado
    contenedorResultado.classList.remove("escondido")
}

//DESENCRIPTAR
function btnDesencriptar () {
    let mensaje = inputTexto.value;
    // Encriptar con las reglas dadas
    let nuevo = mensaje
        .replace(/enter/g,'e')
        .replace(/imes/g,'i')
        .replace(/ai/g,'a')
        .replace(/ober/g,'o')
        .replace(/ufat/g,'u');
    
    // Escribir dentro de resultado el mensaje encriptado
    resultado.innerHTML = nuevo
   
    // Esconder el cactus agregandole la clase escondido
    contenedorSinMensaje.classList.add("escondido")
    // Sacarle la clase escondido al bloque con el texto encriptado
    contenedorResultado.classList.remove("escondido")
}
//COPIAR
function btnCopiar () {
    const texto = resultado.innerHTML;

    setClipboard(texto).then(() => {
        alert("El texto se copio correctamente")
    })
    
}

function setClipboard(text) {
    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    return navigator.clipboard.write(data);
}

