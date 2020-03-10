  
function grafica(){


 var tipo = document.getElementById("tips").value
        console.log(tipo);
    
           var seleccion= document.getElementById("grafic");

    
    var ctx= document.getElementById("myChart").getContext("2d");
        var myChart= new Chart(ctx,{
            type: tipo,

            data:{
                labels:['u','u+z','u+2z','u+3z','u-z','u-2z'],
                datasets:[{
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
 