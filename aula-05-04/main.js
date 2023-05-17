
worker1 = new Worker('worker1.js');



function calcularQuadrado(){
        worker1.postMessage(document.getElementById('input-number1').value);
}

worker1.addEventListener('message', function(event){
    const quadrado = event.data;
        document.getElementById('resultado').textContent='O quadrado do numero digitado é:' + quadrado;
})

worker2 = new Worker('worker2.js');



function calcularFatorial(){
        worker2.postMessage(document.getElementById('input-number2').value);
}

worker2.addEventListener('message', function(event){
    const fatorial = event.data;
        document.getElementById('resultado2').textContent='O quadrado do numero digitado é:' + fatorial;
})

