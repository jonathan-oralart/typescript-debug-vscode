// function to wait for a given time
export const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

console.log("Start")
await wait(1000)
console.log("Done")