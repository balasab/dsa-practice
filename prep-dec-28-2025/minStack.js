class stack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(num) {
        this.stack.push(num);
        if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] > num) {
            this.minStack.push(num);
        }
        return num;
    }
    pop() {
        let top = this.stack.pop();
        if (this.minStack.length != 0 && this.minStack[this.minStack.length - 1] === top) {
            this.minStack.pop();
        }
        return top;
    }
    getMin() {
        if (this.minStack.length === 0) return null;
        return this.minStack[this.minStack.length - 1];
    }
    peek() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }
}