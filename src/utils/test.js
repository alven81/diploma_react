//const whatInTheCart = [4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 10, 10, 10, 10]

//const newArr = arr.map((x) => (for (x === 1) {x = 0}) )
//let id = 4;
// let wtd = arr.indexOf(del)
// console.log("wtd", wtd);
//let kit = arr.splice(0, wtd)
//console.log(kit)
// console.log(arr.splice(wtd+1))
// console.log(arr.splice(0, wtd))

//console.log(arr.splice(wtd+1).concat(arr.splice(0, wtd)))
//console.log(tempArr)

//const index = whatInTheCart.indexOf(id);

//console.log(index);

//whatInTheCart.splice(index + 1).concat(whatInTheCart.splice(0, index))

// console.log(whatInTheCart.splice(index + 1));
// console.log(whatInTheCart.splice(0, index));

//console.log(whatInTheCart.splice(index + 1).concat(whatInTheCart.splice(0, index)))


// function makeArmy() {
//     let shooters = [];
  
//     let i = 0;
//     while (i < 10) {
//         let i;
//       let shooter = function(iß) { // функция shooter
//         console.log( i ); // должна выводить порядковый номер
//       };
//       shooters.push(shooter);
//       i++;
//     }
  
//     return shooters;
//   }
  
//   let army = makeArmy();
  
//   army[0](); // у 0-го стрелка будет номер 10
//   army[5]();


// function testCallback(callback, ifYes, ifNo) {

//     if (callback > 18) ifYes(); 
//         else 
//             ifNo();

// }


// testCallback(
//     prompt("your age?"),
//     function() {console.log("This if true!")}, 
//     function() {console.log("This if false!")}
//     )

// const user = {
//     name: "Alexander",
//     sayHi() {
//         console.log(`Hi ${this.name}`);
//     },
//     sayBuy() {
//         console.log(`Buy ${this.name}`);
//     }
// }

// user.sayHi();
// user.sayBuy();




// let calculator = {
//     sum(a, b) {return a + b},
//     mul(a, b) {return a * b},
//     del(a, b) {return a / b}

// }

// //calculator.read()
// console.log(calculator.sum(1, 2));


new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  })
    .then((result) => { alert(result);
            return new Promise(
                (resolve, reject) => 
                { setTimeout(() => resolve(result * 2), 1000);
                }); // 1 * 2;
})
.then((result) => {
    alert(result); // 1
    return result * 2;
  })
  .then((result) => 
    { alert(result); // 1
    return new Promise((resolve, reject) => { setTimeout(() => resolve(result * 2), 2000) }) ;
  })
  .then((result) => {alert(result)})