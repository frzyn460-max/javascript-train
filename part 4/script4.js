// if...else شرط ها در جاوااسکریپت

//6 am - 12pm -> Good Morning
//12 pm - 6pm -> Good Afternoon
//otherwise -> Good Evening

// let hours = 10; // تغییر این مقدار برای تست شرایط مختلف

// if(hours >= 6 && hours < 12){ // شرط برای صبح
// console.log("Good Morning"); // پیام برای صبح
// }else if(hours >= 12 && hours < 18){ // شرط برای بعد از ظهر
// console.log("Good Afternoon"); // پیام برای بعد از ظهر
// }else{ // در غیر این صورت
// console.log("Good Evening"); // پیام برای شب
// } // پایان شرط ها
// این کد بسته به مقدار متغیر hours پیام مناسب را چاپ می کند.

// تمرین: کدی بنویسید که بر اساس نمره یک دانش آموز پیام مناسبی چاپ کند.
// نمره 90 و بالاتر -> "A"
// نمره 80 تا 89 -> "B"
// نمره 70 تا 79 -> "C"
// نمره 60 تا 69 -> "D"
// نمره کمتر از 60 -> "F"

// let score = 50; // تغییر این مقدار برای تست شرایط مختلف

// if(score >= 90 && score <=100 ){
//     console.log('A');
// }else if(score >= 80 && score <=89 ){
//     console.log('B');
// }else if(score >=70 && score <=79 ){
//     console.log('C');
// }else if(score >= 60 && score <=69 ){
//     console.log('D');
// }else if(score < 60){
//     console.log('F');
// }

// switch...case شرط ها در جاوااسکریپت

// let role = "admin"; // تغییر این مقدار برای تست شرایط مختلف

// switch (role) { // شروع ساختار switch
//   case "guest": // شرط برای نقش مهمان
//     console.log("Guest User"); // پیام برای مهمان
//     break; // خروج از ساختار switch
//   case "admin":
//     console.log("Admin User");
//     break;
//     default: // در صورت عدم تطابق با هیچ یک از موارد بالا
//     console.log("Unknown User"); // پیام پیش‌فرض
// }

// // معادل با if...else بالا

// if (role === "guest") {
//   console.log("Guest User");
// }else if (role === "admin"){
//     console.log("Admin User");
// }else{
//     console.log("Unknown User");
// }

// حلقه ها در جاوااسکریپت

// for
// while
// do...while
// for...in
// for...of

// مثال حلقه for

// for (let i = 0; i < 5; i++) {
// شروع حلقه for
// console.log("Farzin");
// }

// for (let i = 0 ; i<5; i++){ // شروع حلقه for
// if(i % 2 === 0){ // شرط برای اعداد زوج
// console.log(i); // چاپ عدد زوج
// }
// }
// for (let i = 0; i < 10; i++) {
//   // شروع حلقه for
//   if (i % 2 === 1) {
//     // شرط برای اعداد فرد
//     console.log(i); // چاپ عدد فرد
//   }
// }
// for (let i = 5; i>= 1; i--) {
// شروع حلقه for معکوس
// console.log(i); // چاپ اعداد از 5 تا 1
// }

// تمرین: با استفاده از حلقه for اعداد بین 1 تا 20 را چاپ کنید که بر 3 بخش‌پذیر باشند.

// for (let i = 1; i <= 20; i++){
//     if(i % 3 === 0){
//         console.log(i);
//     }
// }

// مثال حلقه while

// let i = 0;
// while (i <= 5){
//     console.log(i);
//     ++i;
// }

// حلقه do...while

// let i = 0;

// do {
//   // شروع حلقه do...while
//   console.log(i); // چاپ مقدار i
//   i++; // افزایش مقدار i
// } while (i < 5); // شرط ادامه حلقه
// // این کد اعداد 0 تا 4 را چاپ می کند.

// let j = 10;

// do {
//   console.log(j);
//   j++;
// } while (j < 5);
// این کد فقط یک بار عدد 10 را چاپ می کند زیرا شرط در ابتدا برقرار نیست.
// این شرظ در حلقه do...while بررسی می شود پس حداقل یک بار اجرا می شود.
//  ولی در حلقه while ابتدا شرط بررسی می شود و اگر برقرار نباشد، حلقه اجرا نمی شود.
