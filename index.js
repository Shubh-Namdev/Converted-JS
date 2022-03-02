
reverseString = (str) => {
    let newStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i];
    }
    return newStr;
}

function fromValueTo() {
    const inputConvertingFrom = document.getElementById('inputFrom');
    const valueConvertingFrom = inputConvertingFrom.value;

    const inputConvertingTo = document.getElementById('inputTo');
    const valueConvertingTo = inputConvertingTo.value;

    const inputElem = document.getElementById('userInput');
    const userInput = inputElem.value;


    function decimalToBinary(val) {
        let convertedVal = '';

        while (val > 0) {
            convertedVal += val % 2;
            val = parseInt(val / 2);
        }

        const decimalVal = reverseString(convertedVal);

        return decimalVal;
    }

    function decimalToOctal(val) {
        let convertedVal = '';

        while (val > 0) {
            convertedVal += val % 8;
            val = parseInt(val / 8);
        }

        const octalVal = reverseString(convertedVal);

        return octalVal;
    }

    function decimalToHexaDecimal(val) {
        let convertedVal = '';

        function checkValue(val) {
            switch (val) {
                case 0: return 0;
                case 1: return 1;
                case 2: return 2;
                case 3: return 3;
                case 4: return 4;
                case 5: return 5;
                case 6: return 6;
                case 7: return 7;
                case 8: return 8;
                case 9: return 9;
                case 10: return 'A';
                case 11: return 'B';
                case 12: return 'C';
                case 13: return 'D';
                case 14: return 'E';
                case 15: return 'F';
            }
        }

        while (val > 0) {
            convertedVal += checkValue(val % 16);
            val = parseInt(val / 16);
        }

        const hexadecimalVal = reverseString(convertedVal);

        return hexadecimalVal;
    }

    function hexaDecimalToDecimal(val) {
        let decimalVal = 0;

        function checkValue(val) {
            switch (val) {
                case '0': return 0;
                case '1': return 1;
                case '2': return 2;
                case '3': return 3;
                case '4': return 4;
                case '5': return 5;
                case '6': return 6;
                case '7': return 7;
                case '8': return 8;
                case '9': return 9;
                case 'A': return 10;
                case 'a': return 10;
                case 'B': return 11;
                case 'b': return 11;
                case 'C': return 12;
                case 'c': return 12;
                case 'D': return 13;
                case 'd': return 13;
                case 'E': return 14;
                case 'e': return 14;
                case 'F': return 15;
                case 'f': return 15;
            }
        }

        let j = val.length - 1;
        for (let i = 0; i < val.length; i++) {
            decimalVal += checkValue(val[i]) * Math.pow(16, j);

            j--;
        }

        return decimalVal;

    }

    function binaryToDecimal(val) {
        let decimalVal = 0;

        let j = val.length - 1;
        for (let i = 0; i < val.length; i++) {
            decimalVal += val[i] * Math.pow(2, j)

            j--;
        }

        return decimalVal;
    }

    function octalToDecimal(val) {
        let decimalVal = 0;

        let j = val.length - 1;
        for (let i = 0; i < val.length; i++) {
            decimalVal += val[i] * Math.pow(8, j)

            j--;
        }

        return decimalVal;
    }
    

    if (!valueConvertingFrom || !valueConvertingTo) {   
        alert('Both feilds to be selected')
    } else if (!userInput) {
        alert('Input is required')
    } else {
        if (valueConvertingTo === 'binary') {
            switch (valueConvertingFrom) {
                case 'decimal':
                    return decimalToBinary(userInput);
                case 'hexadecimal':
                    return decimalToBinary(hexaDecimalToDecimal(userInput));
                case 'octal':
                    return decimalToBinary(octalToDecimal(userInput));
                default:
                    return userInput;
            }

        } else if (valueConvertingTo === 'octal') {
            switch (valueConvertingFrom) {
                case 'decimal':
                    return decimalToOctal(userInput);
                case 'hexadecimal':
                    return decimalToOctal(hexaDecimalToDecimal(userInput));
                case 'binary':
                    return decimalToOctal(binaryToDecimal(userInput));
                default:
                    return userInput;
            }

        } else if (valueConvertingTo === 'decimal') {
            switch (valueConvertingFrom) {
                case 'binary':
                    return binaryToDecimal(userInput);
                case 'hexadecimal':
                    return hexaDecimalToDecimal(userInput);
                case 'octal':
                    return octalToDecimal(userInput)
                default:
                    return userInput;
            }

        } else {
            switch (valueConvertingFrom) {
                case 'decimal':
                    return decimalToHexaDecimal(userInput);
                case 'binary':
                    return decimalToHexaDecimal(binaryToDecimal(userInput));
                case 'octal':
                    return decimalToHexaDecimal(octalToDecimal(userInput));
                default:
                    return userInput;
            }

        }
    }

}

function swapValues() {
    const inputElemOne = document.getElementById('inputFrom');
    const inputElemTwo = document.getElementById('inputTo');
    const userInput = document.getElementById('userInput');

    userInput.value = fromValueTo();

    let temp = '', valFrom = inputElemOne.value, valTo = inputElemTwo.value;
    temp = valFrom;
    valFrom = valTo;
    valTo = temp;

    inputElemOne.value = valFrom;
    inputElemTwo.value = valTo;
}

const convertButton = document.getElementById('convert');
convertButton.addEventListener('click', () => {
    const convertedVal = fromValueTo()
    const outputElem = document.getElementById('result');
    outputElem.textContent = convertedVal;
});

const swapButton = document.getElementById('swap');
swapButton.addEventListener('click', () => {
    swapValues();
});

