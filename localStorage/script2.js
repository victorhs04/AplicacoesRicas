var vcorfundo, vcorfonte, vnome;


function defineCor(op,cor){
    if(op==1){
        document.body.style.backgroundColor = cor;
        //armazenoa cor de fundo na variavel vcorfundo 
        vcorfundo = cor;
    }else{
        document.body.style.color = cor;
        //armazeno a cor da fonte na variavel vcorfonte
        vcorfonte = cor;
    }
}

function gravar(){
    var form = document.getElementById("fconf");
    //armazenamos o nome entrado no formulario na variavel vnome 
    vnome = document.getElementById("fnome").value;
    //armazenando as informações no localStorage
    localStorage.corfundo=vcorfundo;
    localStorage.cortexto=vcorfonte;
    localStorage.nome=vnome;
    form.style.display = "none";
}

function mostrarOpcoes(){
    var form = document.getElementById("fconf");
    form.style.display = "block";

}

function inicia(){
    if(localStorage.nome){
        vcorfundo = localStorage.corfundo;
        vcorfonte = localStorage.corfonte;
        vnome = localStorage.nome;
        //chamamos a funcao defineCor(op,cor)
        defineCor(1, vcorfundo);
        defineCor(2, vcorfonte);
        document.getElementById("painel").innerHTML= "Bem Vindo" + vnome + "<hr>";
       
    }
    window.addEventListener("load", inicia);
}





//para finalizar, vai no formulario, no input do botao e no onclick chama a função gravar()