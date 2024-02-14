
const req = await fetch("https://dummyjson.com/products/1")
const data = await req.json() //?
console.log(data)

export { }