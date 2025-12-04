//ternary operator عملگرد سه حالته
// let athenticated = false; //متغیر بولی برای بررسی وضعیت ورود کاربر

// let bottonText = athenticated === true ? "dashboard" : "login";
// console.log(bottonText); // اگر درست بود این را چاپ کن در غیر این صورت آن را چاپ کن
// این عملگرد به صورت شرطی عمل می کند و اگر شرط درست باشد مقدار اول را برمی گرداند در غیر این صورت مقدار دوم را برمی گرداند

// oprators 

// logical AND
// &&
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false
// console.log(true && true && false); // false

let productCount = 3; // تعداد محصول
let productprice = 1000; // قیمت محصول

let credit = 1200; // اعتبار حساب
let buy = productCount > 0 && credit > productprice;

console.log(buy); 
// logical OR
// logical NOT