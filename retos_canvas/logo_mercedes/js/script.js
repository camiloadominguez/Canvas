window.onload = function()
{
        canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");
        hipotenusa = Math.sqrt(Math.pow(200,2) + Math.pow(200,2))/2;

    //Circulo...
    context.fillStyle = "white";
    context.beginPath();
    context.arc(300, 250, 200, 0,Math.PI*2);
    //context.arc(300, 250, 200, 0,-330*Math.PI/180);
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "black";



    //Líneas guía, no se deben mostrar una vez este el logo terminado...

/*
    context.beginPath();
    context.moveTo(300, 50);
    context.lineTo(300, 290);
    context.strokeStyle = "blue";
    context.stroke();

    context.beginPath();
    context.moveTo(338, 229);
    context.lineTo(126, 348);
    context.strokeStyle = "red";
    context.stroke();

    context.beginPath();
    context.moveTo(262, 229);
    context.lineTo(474, 348);
    context.strokeStyle = "green";
    context.stroke();
*/
    context.beginPath();
    context.moveTo(300, 50);
    context.lineTo(338, 229);
    context.lineTo(467, 344);
    context.lineTo(300, 290);
    context.lineTo(134, 344);
    context.lineTo(262, 229);
    context.lineTo(300, 50);
    context.fill();

    context.stroke();


    //Fin de las líneas Guía...

    //Crear el símbolo de Mercedes-Benz,
    //haciendo uso de lineTo();
    //Para establecer el relleno de la figura se hace uso de context.fill(),
    //Para cambiar el color de relleno se ha ce uso de context.fillStyle = "black";
    //Para dar color a una línea se hace uso de context.strokeStyle = color;
    //Para mostrar la línea se hace uso de context.stroke(), si no se establece, no se moestrará línea...

    context.font = "65px times new roman";
    context.fillText("Mercedes-Benz", 100, 530);
};
