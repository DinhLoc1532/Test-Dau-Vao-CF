let n, inputNumber;

function findOppositeNumber(n, inputNumber) {
    for (let i = 0; i < n; i++) {
        if (i - (inputNumber + parseInt(n / 2)) == 0) {
            return inputNumber + parseInt(n / 2);
        }
    }
    if (inputNumber + parseInt(n / 2) > n) {
        let d = inputNumber + parseInt(n / 2) - n;
        return d;
    }
}
console.log(findOppositeNumber(10, 2));
