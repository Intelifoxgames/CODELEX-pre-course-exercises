export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 * Find a way to add 1% to all currency conversions (think about the DRY (don't repeat yourself) principle)
 */

const usdRate = 1.4
const brlRate = 6.9
const fee = 1.01

function convertToCurrency(amount: number, conversationRate: number): number {
    return amount * conversationRate
}

function addTransactionFee(amount: number): number {
    return amount * fee
}

// You are allowed to change this function
function convertToUSD(price) {
    const convToUs = addTransactionFee(convertToCurrency(price, usdRate))
    return (Math.round(convToUs * 100) / 100)  // Rounds to two decimal places.

    
}
// You are allowed to change this function
function convertToBRL(price) {
    const convToBr = addTransactionFee(convertToCurrency(price, brlRate))
    return (Math.round(convToBr * 100) / 100) // Rounds to two decimal places.
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/