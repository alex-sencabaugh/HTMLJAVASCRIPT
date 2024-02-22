



//Regular string.
var name = "Alex";
var lastname = "Sencabaugh";
//literal string example. 
var message = `Hello welcome to the Javacript Lesson ${name}`;
outputToConsole(message);
//alert(message)
var message2 = "hello" + " " + name + " " + lastname + " welcome to the javascript lesson";
outputToConsole(message2)
var addProblem = 12 + 4;
outputToConsole(addProblem);



function outputToConsole(data) {
    console.log(data)
}

//document.getElementById("#Header").innerHTML = message2;
document.querySelector('body').style.backgroundColor = "#ffff33";

var yourName = prompt("What is your name");
document.querySelector('h1').innerHTML = `Hello ${yourName} thanks for clicking and entering your name!`;


var dataPromptButton = document.getElementById("promptButton");
dataPromptButton.addEventListener("click",dataPrompt)


function dataPrompt() {
    alert(`my name is ${name}`);
    var yourName = prompt("Please tell me your name.");
    alert(`Hello${yourName}, Nice to meet you.`);

    var yourLastName = prompt("Please tell me your last name.");
    alert(`Great your full name is ${yourName} ${yourLastName}!`);

    var firstNumber = prompt("Enter A number:")
    var secondNumber = prompt("Enter another number:")

    var result = Number(firstNumber) + Number(secondNumber);
    alert(`the result is${result}`);

    var documentBody = document.querySelector('body');

    var outputData = document.createElement('p')

    outputData.innerHTML = `your name is ${yourName} ${yourLastName}\n The result of your numbers is ${result} \n Thanks from ${name} ${lastname}`;
    documentBody.appendChild(outputData);

}
