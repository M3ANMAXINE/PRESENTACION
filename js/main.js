

//alert("empezo la web");
//console.log("empezo la web");

function saludar(){



    alert("HOLA ");

    
}


function dato(){

  var  dato = document.getElementById("numero1").value;
   

    var dato2 = document.getElementById("numero2").value;

     var sumar = parseInt(dato) + parseInt(dato2) ;

     alert("la suma es "+sumar);


   }

   

   $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
