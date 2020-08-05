export {};

function Circle(radius) {
  
  this.radius = radius;
  
  this.area = function() { // area = pi * (r*r)
    return 3.14 * Math.pow(radius, 2)
  }; 
  
  this.perimeter = function() { // perimeter = 2 * pi * r
    return 2 * 3.14 * radius 
  };
}

const c = new Circle(3);
console.log("Area =", c.area()); // Expected output: Area = 28.27
console.log("Perimeter =", c.perimeter()); // Expected output: Perimeter = 18.85
