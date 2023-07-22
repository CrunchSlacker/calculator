let numbersToAdd = [], numbersToSubtract = [], numbersToMultiply = [], numbersToDivide = [];

let lastOperator = "";

const add = (numberArray) => {
    let sum = 0;
    let intArray = [];
    for (let j = 0; j < numberArray.length; j++) {
        intArray.push(parseInt(numberArray[j]))
    }

    for (let i = 0; i < intArray.length; i++) {
        sum += intArray[i];
    }
    numbersToAdd.length = 0;
    return sum;
};

const subtract = (numberArray) => {
    let answer = 0;
    let intArray = [];
    for (let j = 0; j < numberArray.length; j++) {
        intArray.push(parseInt(numberArray[j]))
    }

    answer = intArray[0]
    console.log(answer);

    for (let i = 1; i < intArray.length; i++) {
        answer -= intArray[i];
    }
    numbersToSubtract.length = 0;
    return answer;
};

const multiply = (numberArray) => {
    let answer = 1;
    let intArray = [];
    for (let j = 0; j < numberArray.length; j++) {
        intArray.push(parseInt(numberArray[j]))
    }

    for (let i = 0; i < intArray.length; i++) {
        answer *= intArray[i];
    }
    numbersToMultiply.length = 0;
    return answer;
};

const divide = (numberArray) => {

    let intArray = [];
    for (let j = 0; j < numberArray.length; j++) {
        intArray.push(parseInt(numberArray[j]))
    }

    let answer = numberArray[0];
    console.log(intArray[0] + " " + intArray[1]);

    for (let i = 1; i < intArray.length; i++) {
        answer /= intArray[i];
    }
    numbersToDivide.length = 0;
    return answer;
};

const operate = (numOne, numTwo, operator) => {
    if (operator == "+") {
        return add(numOne, numTwo);
    } else if (operator == "-") {
        return subtract(numOne, numTwo);
    } else if (operator == "*") {
        return multiply(numOne, numTwo);
    } else if (operator == "/") {
        return divide(numOne, numTwo);
    } else {
        return "Invalid Operator";
    }
};

const addToAddArray = (array) => {
    const number = [];
    if (array.includes("+")) {
        for (let i = 0; i < array.indexOf("+"); i++) {
            number.push(array[i]);
        }
    } else {
        for (let i = 0; i < array.indexOf("="); i++) {
            number.push(array[i]);
        }
    }
    
    numbersToAdd.push(number.join(''));
    array.length = 0;
}

const addToMultiplyArray = (array) => {
    const number = [];
    if (array.includes("*")) {
        for (let i = 0; i < array.indexOf("*"); i++) {
            number.push(array[i]);
        }
    } else {
        for (let i = 0; i < array.indexOf("="); i++) {
            number.push(array[i]);
        }
    }
    
    numbersToMultiply.push(number.join(''));
    array.length = 0;
}

const addToSubtractArray = (array) => {
    const number = [];
    if (array.includes("-")) {
        for (let i = 0; i < array.indexOf("-"); i++) {
            number.push(array[i]);
        }
    } else {
        for (let i = 0; i < array.indexOf("="); i++) {
            number.push(array[i]);
        }
    }
    
    numbersToSubtract.push(number.join(''));
    array.length = 0;
}

const addToDivideArray = (array) => {
    const number = [];
    if (array.includes("/")) {
        for (let i = 0; i < array.indexOf("/"); i++) {
            number.push(array[i]);
        }
    } else {
        for (let i = 0; i < array.indexOf("="); i++) {
            number.push(array[i]);
        }
    }
    
    numbersToDivide.push(number.join(''));
    array.length = 0;
}

const updateScreen = (elementVal, screenArray, screenText) => {
    screenArray.push(elementVal);

    if (screenArray.includes("Clear")) {
        screenArray.length = 0;
    }

    if (screenArray.includes("+")) {
        addToAddArray(screenArray);
        lastOperator = "+";
    }

    if (screenArray.includes("*")) {
        addToMultiplyArray(screenArray);
        lastOperator = "*";
    }

    if (screenArray.includes("-")) {
        addToSubtractArray(screenArray);
        lastOperator = "-";
    }

    if (screenArray.includes("/")) {
        addToDivideArray(screenArray);
        lastOperator = "/";
    }

    if (screenArray.includes("=")) {
        if (lastOperator == "+") {
            addToAddArray(screenArray);
            screenArray.length = 0;
            screenArray.push(add(numbersToAdd));
        } else if (lastOperator == "*") {
            addToMultiplyArray(screenArray);
            screenArray.length = 0;
            screenArray.push(multiply(numbersToMultiply));
        } else if (lastOperator == "-") {
            addToSubtractArray(screenArray);
            screenArray.length = 0;
            screenArray.push(subtract(numbersToSubtract));
        } else {
            addToDivideArray(screenArray);
            screenArray.length = 0;
            screenArray.push(divide(numbersToDivide));
        }
    }
    screenText.innerText = screenArray.join('');
}

const init = () => {
    const btnArray = document.querySelectorAll('.btn');
    const screen = document.querySelector('.screen');
    const screenText = document.createElement('p');
    const screenArray = [];
    screen.appendChild(screenText);
    btnArray.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            updateScreen(e.target.innerHTML, screenArray, screenText);
        });
    })
}

init();




