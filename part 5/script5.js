// حلقه for...of , for...in

// const person = { name: "ali", age: 25, city: "tehran" }; // یک ارایه ساده
// const colors = ["red", "green", "blue"];

// //  حلقه for...of برای آرایه‌ها
// for (let key in person) { // کلیدهای شیء
//   console.log(key); // نام کلید
//   console.log(person[key]); // مقدار کلید
// }

// // حلقه for...of برای آرایه‌ها
// for (let index of colors) {
//   console.log(index);
// }

//  break و continue در حلقه‌ها

// let i = 0;

// // خروج از حلقه با break
// while ( i <= 10) { // شرط حلقه
//     if ( i === 5){ // شرط خروج
//         break; // خروج از حلقه
//     }
//    console.log(i); // چاپ مقدار i
//    i ++; // افزایش مقدار i

// }
// // break حلقه را کاملا متوقف می‌کند و از آن خارج می‌شود.

// // ادامه دادن به حلقه با continue
// while ( i <= 10) { // شرط حلقه
//     if ( i === 5){ // شرط ادامه دادن
//         i ++; // افزایش مقدار i
//         continue; // ادامه دادن به تکرار بعدی
//     }
//    console.log(i);
//    i ++;

// }
// continue  چهارچوب حلقه را به تکرار بعدی می‌برد بدون اینکه بقیه کدهای داخل حلقه اجرا شوند.

// object و متدهای آن

// let circle = {
//   // شیء دایره
//   radius: 5, // شعاع
//   location: {
//     // موقعیت
//     x: 1,
//     y: 1,
//   },
//   isVisible: true, // قابل مشاهده بودن
//   draw: function () {
//     // متد رسم کردن
//     console.log("draw"); // چاپ کردن "draw"
//   },
// }; // پایان تعریف شیء

// circle.draw(); // فراخوانی متد رسم کردن

// متدها توابعی هستند که به عنوان ویژگی‌های یک شیء تعریف می‌شوند و می‌توانند رفتارهای مرتبط با آن شیء را انجام دهند.

//  factory function

// function creatCircle(radius) {
//   return {
//     radius, // شعاع
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// let circle1 = creatCircle(5); // ایجاد دایره با شعاع 5
// console.log(circle1); // چاپ دایره ایجاد شده

// let circle2 = creatCircle(10); // ایجاد دایره با شعاع 10
// console.log(circle2); // چاپ دایره ایجاد شده
// factory function تابعی است که یک شیء جدید را ایجاد و بازمی‌گرداند.
//  این روش به ما امکان می‌دهد تا چندین نمونه از یک نوع شیء را با ویژگی‌ها و رفتارهای مشابه ایجاد کنیم.

// constructor function

//  camel notation : one TwoThreeFour یک روش نوشتاری است که در آن کلمه اول با حرف کوچک شروع می‌شود و هر کلمه بعدی با حرف بزرگ شروع می‌شود. مانند: oneTwoThreeFour
// Pascal notation : OneTwoThreeFour یک روش نوشتاری است که در آن هر کلمه با حرف بزرگ شروع می‌شود. مانند: OneTwoThreeFour

// function Circle (radius) { // تابع سازنده دایره
//   this.radius = radius; // شعاع
//   this.draw = function() {
//     console.log('draw')
//   }
// }

// const circle = new Circle(3); // ایجاد دایره با شعاع 3
// console.log(circle); // چاپ دایره ایجاد شده
// تابع سازنده (Constructor Function) یک الگو برای ایجاد اشیاء جدید است.
//  با استفاده از کلمه کلیدی new، می‌توانیم نمونه‌های جدیدی از شیء را با ویژگی‌ها و رفتارهای مشابه ایجاد کنیم.
