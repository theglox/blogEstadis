function genera_tabla() {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];
  var div = document.getElementById("sonatabla");

 
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

  var numero = document.getElementById("numero").value
  console.log(numero);
  // Crea las celdas

//creo la fla madre
var hilera = document.createElement("tr");
  
  for (var i = 0; i <2; i++) {
        celda = document.createElement("td");
            input = document.createElement("input");     
            input.style.height = "30px";
            input.style.width = "200px";
            input.type = "text";
            input.name ="0;"+i;
            input.id ="0;"+i;    
            celda.appendChild(input);
            hilera.appendChild(celda);
          
          tblBody.appendChild(hilera);
        }
          hilera.setAttribute("class","w3-lime");

   for (var i = 0; i <numero; i++) {
          var hilera = document.createElement("tr");
          for (var j = 0; j <2 ; j++) {
            celda = document.createElement("td");
            input = document.createElement("input");     
            input.style.height = "30px";
            input.style.width = "50px";
            input.type = "text";
            input.name =i+1+";"+ j;
            input.id =i+";"+ j;    
            celda.appendChild(input);
            hilera.appendChild(celda);
          }
          tblBody.appendChild(hilera);
      }
        tabla.appendChild(tblBody);
        div.appendChild(tabla);
       
        tabla.setAttribute("class","w3-table-all w3-xlarge");

    input = document.createElement("hr");
        
 }

  function printDiv(nombreDiv) {
     var contenido= document.getElementById(nombreDiv).innerHTML;
     var contenidoOriginal= document.body.innerHTML;

     document.body.innerHTML = contenido;

     genera_tabla()

     document.body.innerHTML = contenidoOriginal;
    
}

 function graficador(){
  var grado =parseInt(document.getElementById("numero").value);
  var matrizfn = new Array(grado);
// se define com matirz
for (var i = 0; i < grado; i++) {
   matrizfn[i] = Array(2);
 }
//se toman los valores de la matriz 
    for (var i = 0; i < grado; i++) {
      for (var j = 0; j < 2; j++) {
    id = ((i+1)*10)+(j+1); 
     console.log(id);
     matrizfn[i][j] = document.getElementById(i+";"+j).value; 
    
    }
  }
  //imprimo la matriz por consola
  console.log(matrizfn);
    
    var ctx= document.getElementById("myChart").getContext("2d");
        var myChart= new Chart(ctx,{
            type:"doughnut",
            data:{
                labels:['u','u+z','u+2z','u+3z','u-z','u-2z'],
                datasets:[{
                        label:'Num datos',
                        data:[0,1,2,3,1,0],
                        backgroundColor:[
                            'rgb(205, 92, 92,0.5)',
                            'rgb(185, 155, 211,0.5)',
                            'rgb(133, 193, 233,0.5)',
                            'rgb(118, 215, 196,0.5)',
                            'rgb(247, 220, 111,0.5)',
                            'rgb(93,109,126,0.5)'
                            
                        ]
                }]
            },
            options:{
                scales:{
                    yAxes:[{
                            ticks:{
                                beginAtZero:true
                            }
                    }]
                }
            }
        });




 }