//GLOBAL VARIABLES
let miles;
let gallons;
let mpg;
let again = 'y';

//PROCESS USER FEEDBACK
do {
    //calculate how many miles the user has driven
    miles = parseFloat(prompt('Enter miles driven'));
    gallons = parseFloat(prompt('How many gallons does your tank hold?'));
    if (!isNaN(miles) && miles > 0 &&  !isNaN(gallons) &&  gallons > 0) {
        mpg = miles / gallons
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);

    } else {
        alert('One or both of your values is either not a number or not greater than 0');
    }
    //EXTRA CREDIT
    do {
        again = prompt('Do you want to run the application again? (y/n)');
     } while (again !== 'y' && again !== 'n');

} while (again === 'y');

console.log('Application has exited.');