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


  stack:number[] = [] 
  // Empty stack of numbers.
  
  top = 0 
  // "Top" will indicate the number of plates in the stack.
  
  push(n: number) {
    this.stack[this.top] = n 
    // "Top" will indicate the number of plates in the stack.
    
    this.top += 1 
    // When pushed, the number of the stack will add +1.
  }

  pop() {
    this.top -= 1 
    // When removed (popped) the plate, the number of items in stack -1.
    
    return this.stack.pop()
    // Remove the last placed plate on the stack.
  }

  peek() {
    return this.stack[this.top - 1] 
    // Shows the upper plate in the stack.
  }
}

export { Stack };
