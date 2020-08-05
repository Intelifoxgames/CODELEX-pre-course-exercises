export {};

/**
 * Note : The Pythagorean Theorem tells us that the relationship in every right triangle is : c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle.
 *
 * https://en.wikipedia.org/wiki/Pythagorean_theorem
 */


const pythagoreanTheorem = (left: number, right: number): number => {

    let leftSide = (left * left)

    let rightSide = (right * right)

    let sumOfSides = leftSide + rightSide

    let sqrt = Math.sqrt(sumOfSides)

    return sqrt
};

console.log(pythagoreanTheorem(2, 4)); // Expected result: 4.47213595499958 // Sqrt of 20.
console.log(pythagoreanTheorem(3, 4)); // Expected result: 5 // Sqrt of 25.
