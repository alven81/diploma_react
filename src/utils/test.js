const whatInTheCart = [4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 10, 10, 10, 10]

//const newArr = arr.map((x) => (for (x === 1) {x = 0}) )
let id = 4;
// let wtd = arr.indexOf(del)
// console.log("wtd", wtd);
//let kit = arr.splice(0, wtd)
//console.log(kit)
// console.log(arr.splice(wtd+1))
// console.log(arr.splice(0, wtd))

//console.log(arr.splice(wtd+1).concat(arr.splice(0, wtd)))
//console.log(tempArr)

const index = whatInTheCart.indexOf(id);

console.log(index);

//whatInTheCart.splice(index + 1).concat(whatInTheCart.splice(0, index))

// console.log(whatInTheCart.splice(index + 1));
// console.log(whatInTheCart.splice(0, index));

console.log(whatInTheCart.splice(index + 1).concat(whatInTheCart.splice(0, index)))
