'Use strict'
let salaries = {
    John: 100,
    Ann: 160,
    Pate: 130
}
let sum
function salarySum() {
    sum = salaries.John + salaries.Ann + salaries.Pate;
    return console.log(sum);
}

salarySum();