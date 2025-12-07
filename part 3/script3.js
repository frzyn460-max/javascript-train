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

// let productCount = 3; // تعداد محصول
// let productprice = 1000; // قیمت محصول

// let credit = 1200; // اعتبار حساب
// let buy = productCount > 0 && credit > productprice;

// console.log(buy);
// logical OR
// ||
// let productCount = 3; // تعداد محصول
// let productprice = 1000; // قیمت محصول

// let credit = 1200; // اعتبار حساب
// let buy = productCount > 0 || credit > productprice; // اگر تعداد محصول بیشتر از 0 باشد یا اعتبار حساب بیشتر از قیمت محصول باشد، خرید انجام می شود
// console.log(buy); // اگر یکی از شرایط درست باشد، نتیجه true خواهد بود

// logical NOT
// !
// console.log(!true); // false // معکوس کردن مقدار بولی
// console.log(!false); // true // معکوس کردن مقدار بولی

//  ||
// false , 0 , "" , null , undefined , NaN
// true , 1 , -2

// &&
// true , 1 , -2
// false , 0 , "" , null , undefined , NaN

// تقدیم اولویت عملگرها در جاوااسکریپت
// اولویت بندی عملگرها در جاوااسکریپت مشابه سایر زبان‌های برنامه‌نویسی است. برخی از عملگرها اولویت بالاتری نسبت به دیگران دارند و این اولویت تعیین می‌کند که کدام عملیات ابتدا انجام شود. در زیر لیستی از برخی از عملگرهای رایج در جاوااسکریپت به همراه اولویت آن‌ها آورده شده است:
// let x = 3 + 5 * 10;
// console.log(x);

// let z = 3 + 5 * 10;
// console.log(z);

// let y = (3 + 5) * 10;
// console.log(y);
// 