let numbersToAdd = [], numbersToSubract = [], numbersToMultiply = [], numbersToDivide = [];

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

const subtract = (numOne, numTwo) => {
    return numOne - numTwo;
};

const multiply = (numOne, numTwo) => {
    return numOne * numTwo;
};

const divide = (numOne, numTwo) => {
    return numOne / numTwo;
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
        for (let i = 0; i < array.indexOf("+"); i++) {
            number.push(array[i]);
        }
    } else {
        for (let i = 0; i < array.indexOf("="); i++) {
            number.push(array[i]);
        }
    }
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

    if (screenArray.includes("=")) {
        if (lastOperator == "+") {
            addToAddArray(screenArray);
            screenArray.length = 0;
            screenArray.push(add(numbersToAdd));
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




