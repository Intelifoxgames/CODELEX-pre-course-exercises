/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {
  
  elements:number[] = []
  // Empty queue. 
  
  add(n: number) {
    this.elements.push(n)  
    // Adds the element to the end of the queue.
  }

  remove() {
    return this.elements.shift() 
    // Removes the element from the beginning of the queue...
    // Returns removed element.
  }
}

export { Queue };
