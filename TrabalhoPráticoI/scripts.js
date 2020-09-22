let calculations = [
    {
        id: 1,
        description: 'Soma (A + B)',
        calculationFunction: function sum(a, b){
            return a + b;
        },
        type: 'a_b',
    },
    {
        id: 2,
        description: 'Subtração (A - B)',
        calculationFunction: function subtraction(a, b){
            return a - b;
        },
        type: 'a_b',
    },
    {
        id: 3,
        description: 'Subtração (B - A)',
        calculationFunction: function subtraction(b, a){
            return b - a;
        },
        type: 'b_a',
    },
    {
        id: 4,
        description: 'Multiplicação (A . B)',
        calculationFunction: function multiply(a, b){
            return formatNumber(a * b);
        },
        type: 'a_b',
    },
    {
        id: 5,
        description: 'Divisão (A / B)',
        calculationFunction: function division(a, b){
            return getDivision(a, b);
        },
        type: 'a_b',
    },
    {
        id: 6,
        description: 'Divisão (B / A)',
        calculationFunction: function division(b, a){
            return getDivision(b, a);
        },
        type: 'b_a',
    },
    {
        id: 7,
        description: 'Quadrado de A ( A² )',
        calculationFunction: function square(a){
            return formatNumber(a ** 2);
        },
        type: 'a',
    },
    {
        id: 8,
        description: 'Quadrado de B ( B² )',
        calculationFunction: function square(b){
            return formatNumber(b ** 2);
        },
        type: 'b',
    },
    {
        id: 9,
        description: 'Divisores Inteiros de A',
        calculationFunction: function divisors(a){
            return getDivisors(a);
        },
        type: 'a',
    },
    {
        id: 10,
        description: 'Divisores Inteiros de B',
        calculationFunction: function divisors(b){
            return getDivisors(b);
        },
        type: 'b',
    },
    {
        id: 11,
        description: 'Fatorial de A ( A! )',
        calculationFunction: function factorial(a){
            return getFactorial(a);
        },
        type: 'a',
    },
    {
        id: 12,
        description: 'Fatorial de B ( B! )',
        calculationFunction: function factorial(b){
            return getFactorial(b);
        },
        type: 'b',
    }

];

let globalInputA = null;
let globalInputB = null;

const start = () => {

    globalInputA = document.querySelector('#userInputA');
    globalInputB = document.querySelector('#userInputB');

    globalInputA.addEventListener('input', handleChangesInA);
    globalInputB.addEventListener('input', handleChangesInB);

    calculate();
}

const handleChangesInA = () => {
    calculate();
}

const handleChangesInB = () => {
    calculate();
}

const calculate = () => {

    let calculationBox = document.querySelector('#calculations');
    let innerCalculations = document.querySelector('div');
    innerCalculations.classList.add('row');

    let a = parseInt(globalInputA.value, 10);
    let b = parseInt(globalInputB.value, 10);

    for (let i = 0; i < calculations.length; i++){
        let currentCalculation = calculations[i];
        let type = currentCalculation.type;
        let calculationFunction = currentCalculation.calculationFunction;

        let id = 'input_' + currentCalculation.id;
        let value = getCalculationFrom(type, calculationFunction, a, b);

        let div = getMaterializeDiv();
        let input = getMaterializeInput(id, value);
        let label = getMaterializeLabel(id, currentCalculation.description);

        div.appendChild(input);
        div.appendChild(label);
        innerCalculations.appendChild(div);
    }

    calculationBox.innerHTML = '';
    calculationBox.appendChild(innerCalculations);
}

const getMaterializeDiv = () => {
    let div = document.createElement('div');
    div.classList.add('input-field', 'col', 's12', 'm6', 'l4');

    return div;
}

const getMaterializeInput = (id, value) => {
    let input = document.createElement('input');

    input.readOnly = true;
    input.type = 'text';
    input.id = id;
    input.value = value;

    return input;
}

const getMaterializeLabel = (id, description) => {
    let label = document.createElement('label');

    label.for = id;
    label.textContent = description;
    label.classList.add('active');

    return label;
}

const getCalculationFrom = (type, calculationFunction, numberA, numberB) => {

    let value = '';

    switch (type) {
        case 'a':
            value = calculationFunction(numberA);
            break;
        case 'b':
            value = calculationFunction(numberB);
            break;
        case 'a_b':
            value = calculationFunction(numberA, numberB);
            break;
        case 'b_a':
            value = calculationFunction(numberB, numberA);
            break;
        default:
            value = 'Number undefined.';
    }

    return value;
}

const getDivision = (numberA, numberB) => {
    if(numberA === 0){
        return 'Division by 0';
    }

    return formatNumber((numberA / numberB).toFixed(2));
}

const formatNumber = (number) => {
    return new Intl.NumberFormat('pt-BR').format(number);
}

const getDivisors = (number) => {
    let divisors = [];

    for (let i = 1; i <= number; i++){
        if(number % i === 0) {
            divisors.push(i);
        }
    }

    return divisors.join(', ') + ' (' + divisors.length + ')';
}

const getFactorial = (number) => {
    if(number > 21){
        return 'High number, try another one.';
    }

    let factorial = 1;

    for(let i = number; i > 1; i--){
        factorial *= i;
    }

    return formatNumber(factorial);
}

start();