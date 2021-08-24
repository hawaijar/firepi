class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minMaxStack = [];
  }
  peek() {
    if (this.stack.length === 0) {
      throw Error("Stack empty");
    }
    return this.stack[this.stack.length - 1];
  }
  push(number) {
    let newMinMax = { min: number, max: number };

    if (this.minMaxStack.length > 0) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(number, lastMinMax.min);
      newMinMax.max = Math.max(number, lastMinMax.max);
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }
  pop() {
    if (this.stack.length === 0) {
      throw new Error("Stack is empty");
    }
    this.minMaxStack.pop();
    return this.stack.pop();
  }
  getMin() {
    if (this.stack.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }
  getMax() {
    if (this.stack.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}
