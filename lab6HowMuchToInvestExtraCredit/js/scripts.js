//GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

//COLLECT VALUES FROM THE USER
do {
    investment = parseFloat(prompt('Enter investment amount xxxx.xx'));    
} while (isNaN(investment));


do {
    rate = parseFloat(prompt('Enter interest rate as amount xx.x, please enter a rate between 0 and 6%'));
} while (isNaN(rate) || rate <0 || rate > 6);


do {
    years = parseFloat(prompt('Enter the number of years you plan on investing this money.  Please select 1-30 years'));
} while (isNaN(years) || years< 1 || years >30);


//CALCULATE THE FUTURE VALUE
futureValue = investment
for (let i = 0; i < years; i ++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

//DISPLAY RESULTS'
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future Value: $${futureValue.toFixed(2)}<br>`);

