
// Después de la cuenta atrás se comparán los números
// Si coinciden se muestra un mensaje de "¡Has salvado el mundo!", de lo contrario,
// se muestra "La bomba ha estallado"
//  En ambos casos tendrá que salir el núemro elegido 
//y junto con el número correcto (el generado aleatoriamente).

// Cuenta atrás de 5 sec.. No se sabrá que número 
//es hasta que pasen 5 segundos.

// Reiniciar juego


const numRandom = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
const result = document.getElementById('result')
const userInput = document.getElementById('userInput')
const restart = document.getElementById('restart')
const countDown = document.getElementById('countdown')
let numPc = numRandom(1, 3);
//let resultados;
//let num5 = 5;

  
//Crear función que capture el número que selecciona el usuario
// Y obtenemos un número generado por la pc

document.createElement('div')


function results() {
    return new Promise((resolve) => {
         setTimeout(() => {
            let numUsuario = parseInt(userInput.value);
             if (numUsuario === numPc) {
       result.innerHTML = `<p class="green"> ¡Has salvado el mundo! 🌍 </p> Tú elegiste el número ${numUsuario} y la PC el ${numPc} también 🥳`;
             } else {
       result.innerHTML = `<p class="red">💣 La bomba ha estallado 🔥 </p> Tú elegiste el número ${numUsuario} y la PC el ${numPc} 😓`
             }
    resolve()
        }, 1000);
   });
 }

function conteo() {
    let num5 = 5;
 let conteo2 = setInterval(() => {
    countDown.textContent = `${num5}`;
                 num5--;
                 if (num5 < 0) {
                     clearInterval(conteo2);
                     results()
                     }
             }, 1000)
                
         }
        

// CORRECTÍSIMO FUNCIONA

// userInput.addEventListener('keydown', (event) => {
//        if (event.key === 'Enter') {
//         let conteo = setInterval(() => {
//             countDown.textContent = `${num5}`;
//             num5--;
//             if (num5 < 0) {
//                     clearInterval(conteo);
            
//                 }
//             }, 1000)
//             results()
//      }
//      } )  





//Evento de tecla 'Enter' para obtener el número seleccionado 
userInput.addEventListener('keydown', (event) => {
 if (event.key === 'Enter') {
     conteo()
}
 } )  

// Reiniciar juego, reiniciando la página
restart.addEventListener('click', () => {
    location.reload()
})
