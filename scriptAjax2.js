//executa a função anônima depois que toda a página for carregada
window.onload=function(){
    var url="https://api.openweathermap.org/data/2.5/weather?";
    var minhaAPI="a6f408216a6da04f50d1910b6b7b8c62";
    var resultado;
    var cidade;
    var info = document.getElementById('info');
    

    cidades.onchange=function(){
        //criando o objeto ajax dependendo do navegador
        var ajax= null;
        //se o navegador existir o XMLHttpRequest(),ele cria por essa por essa metodologia
        if(window.XMLHttpRequest){
            ajax = new XMLHttpRequest();
            
        }else if(window.ActiveXObject){
            ajax = new ActiveXObject("Msxml2.XMLHTTP");
        }
        cidade = cidades.value
                                                                                                                   
        if(cidade !=0){
            //abre a pagina txt via GET
            ajax.open("GET", url + 'appid=' + minhaAPI + '&q=' + cidade + '&units=metric&lang=pt', true);
            //nao envia nada 
            ajax.send(null);
            //tenta identificar o estado do carregamennto do conteudo 
            ajax.onreadystatechange = function(){
                if(ajax.readyState== 4){
                    if(ajax.status == 200){
                      resultado = JSON.parse(ajax.responseText);
                      console.log(resultado);
                      
                      var nome_cidade = document.getElementById("nome_cidade");
                      nome_cidade.innerHTML = resultado.name;
                
                      var temp_min = document.getElementById("temp_min");
                      temp_min.innerHTML = resultado.main.temp_min + "°C";
                
                      var temp_max = document.getElementById("temp_max");
                      temp_max.innerHTML = resultado.main.temp_max + "°C";
                
                      var descricao = document.getElementById("descricao");
                      descricao.innerHTML = resultado.weather[0].description;
                    }
                  }
                }
            }
        }
    }

