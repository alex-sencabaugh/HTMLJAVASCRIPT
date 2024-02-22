var hourPay = prompt("What is your hourly rate?")
console.log(`hourPay: ${hourPay}`)


var workHours = prompt("How many hours did you work (2 weeks)?")
console.log(`workHours: ${workHours}`)


var grossPay = workHours * hourPay
console.log(`: ${grossPay}`)


var taxes = grossPay * 0.2
console.log(`: ${taxes}`)


var netPay = grossPay - taxes
console.log(`: ${netPay}`)

alert(`Your gross pay is: ${grossPay.toFixed(2)}`)
alert(`You paid: ${taxes.toFixed(2)} in taxes`)
alert(`Your net pay is: ${netPay.toFixed(2)}`)
