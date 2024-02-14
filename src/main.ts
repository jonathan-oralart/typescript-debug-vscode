
class Adder {
    // Method to add two numbers
    add(a: number, b: number): number {
        return a + b;
    }
}

const myAdder = new Adder();

const result = myAdder.add(5, 7);
console.log(result);