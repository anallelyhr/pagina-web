
const body=document.querySelector('body')

const nieve=() => {
let copo = document.createElement('i')
let x= innerWidth * Math.random()
let size= (Math.random() * 8) + 2
let z= Math.round(Math.random()) * 100
let delay = Math.random() * 5
let anima= (Math.random() * 10) + 5

copo.style.left=x + 'px'
copo.style.width= size + 'px'
copo.style.height= size + 'px'
copo.style.zIndex= z
copo.style.animationDelay= delay + '5'
copo.style.animationDuration= anima + '5'


    body.appendChild(copo)
setTimeout (() => {
 copo.remove()
}, anima * 1000)

}
setInterval(nieve, 90) //para aumentar el numero de copos disminuir el 100


//RELOJ
const $tiempo = document.querySelector('.tiempo'),
$fecha = document.querySelector('.fecha');

function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    anio = f.getFullYear(),
    diaSemana = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    let semana = ['DOMINGO','LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO'];
    let showSemana = (semana[diaSemana]);

    $fecha.innerHTML = `${dia}-${mes}-${anio} ${showSemana}`
}
setInterval(() => {
    digitalClock()
}, 1000);

//







