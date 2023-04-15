//////////////////////Javascript Es6 ////////////////////////////////////////
// Contents Covered in ES6 {
//let
//const
//Arrow Functions
//Spread Operators
//For Of
//Map objects New Map and Set Map
//Classes Functions

//}

//Let keyword and its scopes (Blocked Scope) it can work only with specific block in which the value can be modified
//  var x =10

//  {
//     let x=20
//     console.log(x);
//  }

//  console.log(x);

////////////////////////////////////////
//const keyword is similar to the let keyword except that the value cannot be changed and it is also a blocked scope

//  const y = 10
//  console.log(y);

//  {
//     const y=20
//     console.log(y);

//  }

////////////////////////////////////////
/////////   Arrow Functions

// const arrowFunction  =(a,b)=>{
// return a * b
// }
// console.log(arrowFunction(2,3));

////////////////////////////////////////
///Spread Operators

// const StudentsName = ["Mithun","Pandiyan","Steve","Jobs","Tim","Cook"]
// const StudentsCount = [1,2,3,4,5,6,7,8,9,10]
// const spreadOperators = [...StudentsName,...StudentsCount]
// console.log(spreadOperators);

// const numbers = [23,41,67,89,102,198]

// const maxValue = Math.max(...numbers)

// console.log(maxValue);

////////////////////////////////////////

//For of  in Array
//  const StudentsName = ["Mithun","Pandiyan","Steve","Jobs","Tim","Cook"]

//  let text = "Apple"

//  for(let x of StudentsName){
//   console.log(x);
//  }
// Looping over String

// const appleCeo = "Tim Cook"
// for(let x of appleCeo){
//   console.log(x);
// }

////////////////////////////////////////  Map Objects
// const StudentsName = ["Mithun","Pandiyan","Steve","Jobs","Tim","Cook"]

//  const studentsCalculated = StudentsName.map(function(student){
//     return student.toUpperCase()
//  })
//  console.log(studentsCalculated);

//////////////////////////////////////Map Objects
// const studentsCalculated1 =new Map([
// ["Apples",500],
//  ["Oranges",100],
//  ["Bananas",200],
//  ["Pears",300],
//  ["Grapes",400]
// ]);
// console.log(studentsCalculated1.get("Apples"));

//////////////////////////////////////Set Objects

// const studentsCalculated2 = new Set();

// studentsCalculated2.add("Mithun");
// studentsCalculated2.add("Pandiyan");
// studentsCalculated2.add("Steve");
// studentsCalculated2.add("Jobs");
// studentsCalculated2.add("Tim");
// console.log(studentsCalculated2);

//////////////////////////////////////Classes Functions

// class calculatedNames {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

//////////////////////////////////////Promise

// let promise =new Promise(function(resolve,reject){
//    setTimeout(()=> resolve("Done"),3000)
// })
 