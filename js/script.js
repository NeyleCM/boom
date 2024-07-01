

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
       result.innerHTML = `<p class="green"> ¡Has salvado el mundo! 🌍 </p> 
       <img src="./superman3.jpg" alt="Superman" class="imgsuperman"/>
       <p>Tú elegiste el número ${numUsuario} y la PC el ${numPc} también 🥳</p>`;
             } else {
       result.innerHTML = `<p class="red"> ¡La bomba ha estallado! </p>
       <img src="./bomb.jpg" alt="Bomba" class="imgbomba"/>
       <p>Tú elegiste el número ${numUsuario} y la PC el ${numPc} 😓</p>`
             }
    resolve()
        }, 1000);
   });
 }

function conteo() {
    let num5 = 5;
 let conteo2 = setInterval(() => {
    countDown.textContent = `Sabrás el resultado en ${num5} segundos`;
                 num5--;
                 if (num5 < 0) {
                     clearInterval(conteo2);
                     results()
                     }
             }, 1000)
                
         }
        

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
   

// FUNCIONA

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




