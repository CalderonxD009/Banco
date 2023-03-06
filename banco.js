function procesar (){
  let valorPrestamo = parseInt(document.getElementById('cantidadPrestamo').value)
  let numeroCuotas = parseInt(document.getElementById('cuotas').value)
  let lineaCredito = document.querySelector('input[name="LineaCredito"]:checked').value;
  let nombre =document.getElementById('nombre').value;
  primero (valorPrestamo,numeroCuotas,lineaCredito , nombre)
}

function primero (valorPrestamo,numeroCuotas,lineaCredito, nombre){
    alert(`Hola ${nombre} su prestamo fue aprovado`)
  if (lineaCredito == 1) {
    if (numeroCuotas<6 ){
      const interes1 = 0.023
      let valorTotal = valorPrestamo + (valorPrestamo * interes1)
      let valorxCuota1 = valorTotal/numeroCuotas
      alert(`el valor de cada cuota es ${valorxCuota1}`)
      console.log(`${valorxCuota1}`)
    }else if (numeroCuotas>12 && numeroCuotas<24 ){
      const interes2 = 0.021
      let valorTotal = valorPrestamo + (valorPrestamo * interes2)
      let valorxCuota2 = valorTotal/numeroCuotas
      alert(`el valor de cada cuota es ${valorxCuota2}`)
      console.log(`${valorxCuota2}`)
    }else if(numeroCuotas>24){
    const interes3 = 0.018
    let valorTotal = valorPrestamo + (valorPrestamo * interes3)
    let valorxCuota3 = valorTotal/numeroCuotas
    alert(`el valor de cada cuota es ${valorxCuota3}`)
    console.log(`${valorxCuota3}`)
    }
  }else{
    if(numeroCuotas<6){
       const interes1 = 0.027
        let valorTotal = valorPrestamo + (valorPrestamo * interes1)
        let valorxCuota1 = valorTotal/numeroCuotas
        alert(`el valor de cada cuota es ${valorxCuota1}`)
        console.log(`${valorxCuota1}`)
      }else if (numeroCuotas>12 && numeroCuotas<24 ){
        const interes2 = 0.025
        let valorTotal = valorPrestamo + (valorPrestamo * interes2)
        let valorxCuota2 = valorTotal/numeroCuotas
        alert(`el valor de cada cuota es ${valorxCuota2}`)
        console.log(`${valorxCuota2}`)
      }else if(numeroCuotas>24){
      const interes3 = 0.021
      let valorTotal = valorPrestamo + (valorPrestamo * interes3)
      let valorxCuota3 = valorTotal/numeroCuotas
      alert(`el valor de cada cuota es ${valorxCuota3}`)
      console.log(`${valorxCuota3}`)
      }

    }
  }
