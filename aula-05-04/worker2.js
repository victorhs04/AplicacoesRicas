addEventListener('message', function(event){
  const  inputNumber1 = event.data;
  let fatorial = 1;
  for(let i = 1; i <= inputNumber1; i++){
    fatorial *= i;
  }


  postMessage(fatorial);

  
  
})
