//import Human from "./helpers/Human.js"
import Teacher from "./helpers/Teacher.js"
import Student from "./helpers/Student.js"

//initialize math and history teachers and one student
  const mathTeacher = new Teacher('f', 155, 55, 28, 'Mia Kovac', 'Math');
  const historyTeacher = new Teacher('m', 180, 80, 44, 'Emir Dizdarevic', 'History');
  const student = new Student('male', 176, 71, 21, 'Alex');
  //const englishTeacher = new Teacher('m', 182, 66, 31, 'Martin', 'English');


//add 2 subjects to the student {name: 'math', grade: null} and {name: 'history', grade: null}
  student.addSubject('math');
  student.addSubject('history');
  //student.addSubject('english');

//call sayHi from all teachers and student
  historyTeacher.sayHi();
  mathTeacher.sayHi();
  student.sayHi();

//call quizStudent from math and history and set grades to 2 and 5
  mathTeacher.quizStudent(student, 2);
  historyTeacher.quizStudent(student, 5);
  //englishTeacher.quizStudent(student, 1);

//console.log(student.schoolSubjects[0]);
//console.log(student.schoolSubjects[1]);
//console.log(student.schoolSubjects[2]);
//console.log(student.isFailing());

//call isFailing from student, if student is not failing call passingGrade
  student.isFailing() ? console.log(`${student.name} failed!`) : console.log(`${student.name} passed with a passing grade of ${student.passingGrade()}`);




// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// /*
//   get price() {
//     return this._price;
//   }

//   set price(val) {
//     this._price = val;
//   } */
// }

// const product_01 = new Product('cola', 4.25);

// class ShoppingCart {
//   constructor(items) {
//     this.items = items;
//   }

//   addItems(items) {
//     if (Array.isArray(items)) {
//       this.items.push(...items);
//     } else {
//       this.items.push(items);
//     }
//   }

//   calculateItems() {
//     return this.items.reduce((acc, curr) => {
//       return acc + curr.price;
//     }, 0)
//   }

//   static showProperties() {
//     return Object.keys(this);
//   }
// }

// const shoppingCart_01 = new ShoppingCart([{
//   name: 'cola',
//   price: 12,
// }, {
//   name: 'fanta',
//   price: 5,
// }, {
//   name: 'spetzi',
//   price: 6,
// }]);

// console.log(shoppingCart_01);

// /* const product_02 = new Product('fanta', 4.25);
// const product_03 = new Product('sprite', 4.25);

// console.log(product_01.price);
// product_01.price = 5;
// console.log(product_01.price);
// product_01._price = 6;
// console.log(product_01.price);
//  */

// function rand() {
//   console.log(this);
// }

// /*
// Nacini pozivanja funkcija sa eksplicitno navedenim this kontekstom:

// * new Func() || new func() // this referencira na {}
// * obj.method() // this referencira na objekt obj
// *

// */

// rand.call({ name: 5 });
// rand.apply({ name: 5 });

