// داینامیک بودن اشیاء dynamic nature of objects

// const person = { // ابجکت person
//     name : 'ali' // خاصیت name
// }

// person.age = 35; // اضافه کردن خاصیت age
// person.draw = function() { // اضافه کردن متد draw
// }

// delete person.name; // حذف خاصیت name
// delete person.draw; // حذف متد draw

// console.log(person); // نمایش ابجکت person

// constructor پراپرتی های داینامیک در ابجکت های ساخته شده با

// factory function
// function creatCircle(radius) {
//   return {
//     radius, // خاصیت radius
//     draw() {
//       console.log("draw")
//     } // متد draw
//   }
// }

// const circle = creatCircle(1);

// // constructor function
// function Circle(radius) {
//   this.radius = radius; // خاصیت radius
//   this.draw = function () {
//     console.log("draw") // متد draw
//   }
// }

// const another = new Circle(3);

// let x = new Object(); // ابجکت خالی با استفاده از constructor function پیشفرض Object