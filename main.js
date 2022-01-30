simplyCountdown('.cuenta', {
    year: 2022, // require
    month: 1, // require
    day: 30, // require
    hours:16, // Default is 0 [0-23] integer
    minutes:04, // Default is 0 [0-59] integer
    seconds: 00, // Default is 0 [0-59] integer
    words: { //words 
        days: { singular: 'dia', plural: 'dias' },
        hours: { singular: 'hora', plural: 'horas' },
        minutes: { singular: 'minuto', plural: 'minutos' },
        seconds: { singular: 'segundo', plural: 'segundos' }
    },
    plural: true, //uso plurales
    inline: false, //en linea o en bloque: 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', 
    enableUtc: false, //Uso UTC o no - default : false
    onEnd: function(){
        document.getElementById('portada').classList.add('oculta');
       //aca se puede agregar peticion al servidor
         return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // refresh  1segundo
    sectionClass: 'simply-section', //section para estilos
    amountClass: 'simply-amount', // cuenta css estilos
    wordClass: 'simply-word', // palabras css estilos
    zeroPad: false,
    countUp: false//para contar desde arriba una vez llegado a 0
});  
