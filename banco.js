function procesar (){
  let valorPrestamo = parseInt(document.getElementById('cantidadPrestamo').value)
  let numeroCuotas = parseInt(document.getElementById('cuotas').value)
  let bodega= document.querySelector('input[name="LineaCredito"]:checked').value;
  cuota1 (valorPrestamo,numeroCuotas,bodega)
  cuota2 (valorPrestamo,numeroCuotas,bodega)

}

function cuota1(valorPrestamo,numeroCuotas,bodega){

  let interes1 = valorPrestamo * 0.025;
  let descuentomenos6meses = interes1 * 0.02
  let menos6meses = interes1 - descuentomenos6meses
  let descuento12hasta24 = interes1 * 0.04
  let menos12hasta24 = interes1 - descuento12hasta24
  let descuentomayor24meses = interes1 * 0.07
  let mayor24meses = interes1 - descuentomayor24meses
  let valorTotal1 = valorPrestamo + interes1
  let valorFinal1 = valorTotal1 - menos6meses
  let totalCuota1 = valorFinal1/numeroCuotas
  let valorFinal1_2 = valorTotal1 - menos12hasta24
  let totalCuota1_2 = valorFinal1_2/numeroCuotas
  let valorFinal1_3 = valorTotal1 - mayor24meses
  let totalCuota1_3 = valorFinal1_3/numeroCuotas

  if (numeroCuotas<6 && bodega == 1){
    console.log(`${totalCuota1}`)
  }else if (numeroCuotas>12 && numeroCuotas<24 && bodega == 1){
    console.log(`${totalCuota1_2}`)
  }else if (numeroCuotas>24 && bodega == 1){
    console.log(`${totalCuota1_3}`)
  }
}

function cuota2(valorPrestamo,numeroCuotas,bodega){

  let interes2 = valorPrestamo * 0.029;
  let descuentomenos6meses_2 = interes2 * 0.02
  let menos6meses_2 = interes2 - descuentomenos6meses_2
  let descuento12hasta24_2 = interes2 * 0.04
  let menos12hasta24_2 = interes2 - descuento12hasta24_2
  let descuentomayor24meses_2 = interes2 * 0.07
  let mayor24meses_2 = interes2 - descuentomayor24meses_2
  let valorTotal2 = valorPrestamo + interes2
  let valorFinal2 = valorTotal2 - menos6meses_2
  let totalCuota2 = valorFinal2/numeroCuotas
  let valorFinal2_2 = valorTotal2 - menos12hasta24_2
  let totalCuota2_2 = valorFinal2_2/numeroCuotas
  let valorFinal2_3 = valorTotal2 - mayor24meses_2
  let totalCuota2_3 = valorFinal2_3/numeroCuotas

  if (numeroCuotas<6 && bodega == 2){
    console.log(`${totalCuota2}`)
  }else if (numeroCuotas>12 && numeroCuotas<24 && bodega == 2){
    console.log(`${totalCuota2_2}`)
  }else if (numeroCuotas>24 && bodega == 2){
    console.log(`${totalCuota2_3}`)
  }
    
}