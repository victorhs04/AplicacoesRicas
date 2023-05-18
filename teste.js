<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #div1{
            width: 350px;
            height: 70px;
            padding: 10px;
            border: 7px solid black;
        }
    </style>
    <script>
        function allowDrop(ev){
            ev.preventDefault()
        };
        function drag(ev){
            ev.dataTransfer.setData("text",ev.target.id);
        };
        function drop(ev){
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        };
    </script>
</head>
<body>
    <p>Arraste a imagem para dentro do retangulo que voce quiser:</p>
    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
    </div>
    <br>
    <br>
    <img id="drag1" src="paisagem.jpg" draggable="true" ondragstart="drag(event)"
    width="336" height="69">
</body>
</html>

//substituir imagem por caixa de texto 20 colunas 4 linhas