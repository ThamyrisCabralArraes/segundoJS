let vel = 70
console.log(`A velocidade do seu carro é ${vel}Km/hr`)
if (vel > 60) {
  console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
} else if (vel < 20){
  console.log(`Você estava abaixo da velocidade mínima. MULTADO`)
} else {
  console.log(`Dirija com segurança!`)
}