/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {
  
// Stack (kaudze) is like a stack of plates.
// You put plates in a stack. The last plate that was put on the stack will be the first one
// to go in case of removing.


  stack:number[] = [] // Stack of numbers.
  top = 0 // The top of the stack. The number of "n" that is on top of the stack.
  
  push(n: number) {
    this.stack[this.top] = n // Numbers "n" will be pushed in the "stack".
    this.top += 1 // When pushed, the top of the stack +1.
  }

  pop() {
    this.top -= 1 // Pops out from the stack the last placed "n".
    return this.stack.pop()
    
  }

  peek() {
    return this.stack[this.top - 1] // Shows the top "n" on the stack.
    console.log(this.stack)
  }
}

export { Stack };
