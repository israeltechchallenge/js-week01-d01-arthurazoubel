function modulo(number1, number2) {
  if (number1 < number2) {
    console.log(`The number ${number1} is less than ${number2}`)
  } else if (number1 > number2) {
      var modulo = number1 % number2;
      if (modulo > 0) {
        console.log(`The number ${number1} is bigger than ${number2}`)
        console.log(`The modulo of ${number1} % ${number2} is ${modulo}`)
      } else {
        console.log(`The number ${number1} is bigger than ${number2}`)
      }
  } else {
    console.log(`The number ${number1} is equal to ${number2}`)
  }
}

modulo(8,3)
// Do not remove or change this line, or the tests won't work
export { modulo };
