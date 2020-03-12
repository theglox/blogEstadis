  
function grafica(){
var dosData= [10,5,2.5,1.25,0.5,0]; 
var cincData=[0,5,2.5,1.25,0.5,0];
var dieData =[0,1,2,3,1,0];


 var tipo = document.getElementById("tips").value
 if (tipo=="2") {
    tipo= dosData
 }
  if (tipo=="5") {
    tipo= cincData
 }
   if (tipo=="10") {
    tipo= dieData
 }
        console.log(tipo);
    
           var seleccion= document.getElementById("grafic");

    
    var ctx= document.getElementById("myChart").getContext("2d");
    
        var myChart= new Chart(ctx,{
            type: "line",

            data:{
                labels:['0','1','2','3','4','5'],
                datasets:[{
                        label:'Num datos',
                        data:tipo,
                        backgroundColor:[
                            'rgb(212, 40, 9 ,0.5)',
                            'rgb(74, 135, 72,0.5)',
                            'rgb(229, 89, 50,0.5)',
                            'rgb(11, 215, 240,0.5)',
                            'rgb(74, 135, 72,0.5)',
                            'rgb(229, 89, 50,0.5)'
                            
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




/*[{


con  5 grados de liberdat
data:[0,5,2.5,1.25,0.5,0],



con dos grados de libertad

                        label:'Num datos',
                        data:[10,5,2.5,1.25,0.5,0],
                        backgroundColor:[
                            'rgb(11, 215, 240,0.5)',
                            'rgb(74, 135, 72,0.5)',
                            'rgb(229, 89, 50,0.5)',
                            'rgb(11, 215, 240,0.5)',
                            'rgb(74, 135, 72,0.5)',
                            'rgb(229, 89, 50,0.5)'
                            
                        ]
                }]

/*


/*[{
                        label:'Num datos',
                        data:[0,1,2,3,1,0],
                        backgroundColor:[
                            'rgb(11, 215, 240,0.5)',
                            'rgb(74, 135, 72,0.5)',
                            'rgb(229, 89, 50,0.5)',
                            'rgb(11, 215, 240,0.5)',
                            'rgb(74, 135, 72,0.5)',
                            'rgb(229, 89, 50,0.5)'
                            
                        ]
                }]

*/

    
}
 