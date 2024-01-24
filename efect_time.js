// CADA LINHA ACOMPANHA UMA EXPLICAÇÃO DO CÓDIGO NA LATERAL...  
const time_work = document.querySelector("#horarios");                // id do elemento no 'index.html' que vai receber o texto, optei por escrever usando javascript em vez de ler e reexibir...
const text_time_work = "Horário de funcionamento: 10:00 ás 17:00";   // o texto que vai ser escrito
const interval = 70;                                                 // intervalo de tempo entre cada letra, em milisegundos

function show_text_time_work(time_work, text_time_work, interval) {  // função que escreve o texto
    time_work.innerHTML = " ";                                       // limpa o texto que já está escrito
    const charArray = text_time_work.split("");                      // transforma o texto em um array de caracteres
    for (let i = 0; i < charArray.length; i++) {                     // loop que escreve cada letra do array(vetor) de caracteres
        setTimeout(() => {                                           // função que escreve cada letra do array de caracteres
            time_work.innerHTML += charArray[i];                     // escreve a letra
        }, interval * i);                                            // intervalo vezes a quantidade de letras no array(vetor) i
    }
}

function Loop_show_text_time_work(time_work, text_time_work, interval, repeatInterval) {   // função que repete a função 'show_text_time_work' a cada 'repeatInterval'
    function run() {
        show_text_time_work(time_work, text_time_work, interval);                          // chama a função 'show_text_time_work'
        setTimeout(() => {                                                                 // função que chama a função 'show_text_time_work' a cada 'repeatInterval'
            run();
        }, repeatInterval);
    }
    run();
}

Loop_show_text_time_work(time_work, text_time_work, interval, 6000);                       // chama a função 'Loop_show_text_time_work' com os parâmetros necessários - o ultimo parâmetro é o tempo que a função vai repetir