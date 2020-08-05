export {};

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 * 
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */



 



const fahrenheitToCelsius = (fahrenheit) => Math.round((((fahrenheit - 32) * (5/9)) * 10)) / 10       
// C = (F - 32) * 1.8 
// fahrenheitToCelsius * 10)) / 10  rounds to one decimal place.
    
    
const celsiusToFahrenheit = (celsius) => Math.round(((celsius * 1.8) + 32) * 10) / 10   // F = (C * 1.8) + 32
    

console.log(fahrenheitToCelsius(69)); // Expected result: 0
console.log(celsiusToFahrenheit(17)); // Expected result: 32
