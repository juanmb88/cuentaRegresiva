let  horas = 24;
let minutos = 0;
let segundos = 0;
cargarSegundos();
//ejecucion de cada segundo
setInterval(cargarSegundos, 1000);


//Definir y ejecutar segundos
function cargarSegundos(){
    let textoSegundos;
     if(segundos < 0){
        segundos = 59;
     }
//mostrar en pantalla
    segundos < 10 ?  textoSegundos = `0${segundos}` : textoSegundos = segundos;
    document.getElementById('Segundos').innerHTML = textoSegundos;
    segundos --;
    cargarMinutos(segundos);
};

//Definir y ejecutar minutos
function cargarMinutos(segundos){
    let textoMinutos;
     if(segundos == -1 && minutos !== 0){
        setTimeout(()=>{
            minutos --; 
        },500)
     }else if(segundos == -1 && minutos == 0){
        setTimeout(()=>{
            minutos = 59; 
        },500)
     }
//mostrar en pantalla
    minutos < 10 ? textoMinutos = `0${minutos}` : textoMinutos = minutos;
    document.getElementById('Minutos').innerHTML = textoMinutos;
    cargarHoras(segundos,minutos);
};

//Definir y ejecutar Horas
function cargarHoras(segundos,minutos){
    let textoHoras;

    if ( segundos == -1 && minutos == 0 && horas !==0 ) {
        setTimeout( () => {
        horas --; 
        }, 500)
    } else if ( segundos == -1 && minutos == 0 && horas ==0 ) {
        setTimeout( ()=> {
        horas = 2; 
        }, 500)
    }
    //mostrar en pantalla
    horas < 10 ?  textoHoras = `0${horas}` :textoHoras = horas;
    document.getElementById('Hora').innerHTML = textoHoras;
};


