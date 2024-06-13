// carne - 400 gramas por pessoa      + de 6 horas => 650 gramas
// cerveja - 1200ml por pessoa        + de 6 horas => 2000ml
// refrigerante - - 1000ml por pessoa + de 6 horas => 1500ml

// crianças valem por 0,5

function calc() {
  let adultos = parseInt(document.getElementById("input1").value)
  let criancas = parseInt(document.getElementById("input2").value)
  let duracao = parseInt(document.getElementById("input3").value)
  let resultado = document.getElementById("resultado")
  let quantPessoas = adultos + criancas / 2

  // Confirmação dos dados
  console.log(
    "Adultos:",
    adultos,
    "\nCrianças:",
    criancas,
    "\nDuração (h):",
    duracao
  )

  let quantCarne
  let quantCerveja
  let quantRefrigerante

  if (duracao < 6) {
    quantCarne = parseFloat((quantPessoas * 0.4).toFixed(1))
    quantCerveja = Math.ceil((adultos * 1200) / 355)
    quantRefrigerante = Math.ceil((quantPessoas * 1) / 2)
  } else {
    quantCarne = parseFloat(quantPessoas * 0.65)
    quantCerveja = Math.ceil((adultos * 2000) / 355)
    quantRefrigerante = Math.ceil((quantPessoas * 1) / 2)
  }

  resultado.innerHTML = "<p>" + quantCarne + "Kg de Carne</p>"
  resultado.innerHTML += "<p>" + quantCerveja + " Latas de Cerveja</p>"
  resultado.innerHTML +=
    "<p>" + quantRefrigerante + " Garrafas de 2L de Bebida</p>"
}
