
class Adder {
    // Method to add two numbers
    add(a: number, b: number): number {
        return a + b;
    }
}

function main() {
    const myAdder = new Adder();

    const result = myAdder.add(5, 7);
    console.log(result);

}

if (process.execPath.startsWith("/Users/oralart")) {
    let x = main()
}