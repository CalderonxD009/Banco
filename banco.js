function procesar (){
  let valorPrestamo = parseInt(document.getElementById('cantidadPrestamo').value)
  let numeroCuotas = parseInt(document.getElementById('cuotas').value)
  let bodega= document.querySelector('input[name="LineaCredito"]:checked').value;
  cuota1 (valorPrestamo,numeroCuotas,bodega)
  cuota2 (valorPrestamo,numeroCuotas,bodega)
}

function cuota1(valorPrestamo,numeroCuotas,bodega){

 const interes1 = 0.025;
 let descuentomenos6meses = interes1 * 0.02
 let menos6meses = interes1 - descuentomenos6meses
 let descuento12hasta24 = interes1 * 0.04
 let menos12hasta24 = interes1 - descuento12hasta24
 let descuentomayor24meses = interes1 * 0.07
 let mayor24meses = interes1 - descuentomayor24meses
 let interes =  valorPrestamo * interes1

 console.log(`${interes} `)

 if (numeroCuotas<6 && bodega == 1){
  numeroCuotas
 }
  console.log(`${descuento02} `)

}

function cuota2(valorPrestamo,numeroCuotas,bodega){

 const interes2 = 0.029;


}