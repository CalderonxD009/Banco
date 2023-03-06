function procesar (){
  let valorPrestamo = parseInt(document.getElementById('cantidadPrestamo').value)
  let numeroCuotas = parseInt(document.getElementById('cuotas').value)
  let bodega= document.querySelector('input[name="LineaCredito"]:checked').value;
  cuota1 (valorPrestamo,numeroCuotas,bodega)
  cuota2 (valorPrestamo,numeroCuotas,bodega)
}

function cuota1(valorPrestamo,numeroCuotas,bodega){

 const interes1 = 0.025;
 let interes =  valorPrestamo * interes1
 console.log(`${interes} `)


}

function cuota2(valorPrestamo,numeroCuotas,bodega){

 const interes2 = 0.029;


}