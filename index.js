

function operate(num1, num2, op) {
    if (op === '+') {
        return num1 + num2;
    } else if (op === '-') {
        return num1 - num2;
    } else if (op === '*') {
        return num1 * num2
    } else if (op === '/') {
        if (num2 === 0) {
            return 'stop it. get some help.';
        } else {
            return num1 / num2;
        }
    }
}


