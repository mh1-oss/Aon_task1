// JavaScript Practice Questions
// ==============================
// كل سؤال مكتوب كتعليق، و خاّنّا مكان فارغ تكتب بيه الحل مالك :)

// 1) عرّف متغيرين a و b وخلي بيهم أرقام،
//    واكتب كود يطبع مجموعهم.
//    مثال متوقع للطباعة: Sum: 30

// --- حل السؤال 1 هنا ---
let a = 10;
let b = 20;
function Sum() {
    console.log("Sum:", a + b); 
}
Sum();

// 2) عندك متغير minutes.
//    حوّله إلى ثواني (seconds) واطبع الناتج.
//    مثال: إذا minutes = 5 الناتج = 300

// --- حل السؤال 2 هنا ---

function convertToSeconds(minutes) {
    return seconds = minutes * 60;
}
console.log( "seconds " , convertToSeconds(5));


// 3) اكتب دالة باسم square
//    تستقبل رقم وترجع مربع الرقم.
//    مثل: square(4) ترجع 16

// --- حل السؤال 3 هنا ---
function square(num) {
    return num * num;
}
console.log(  "Square:", square(4) );
square(4);

// 4) اكتب دالة باسم maxOfTwo
//    ترجع أكبر رقم من رقمين باستخدام if.
//    مثل: maxOfTwo(8, 3) ترجع 8

// --- حل السؤال 4 هنا ---
function maxOfTwo(num1, num2) {
    if (num1 > num2) {
        return( num1);
    } else {
        return( num2);
    }   
}
console.log("max:", maxOfTwo(8,3));


// 5) اكتب دالة باسم helloName
//    تستقبل اسم وترجع نص: "Hello " مع الاسم.
//    مثل: helloName("Ali") ترجع "Hello Ali"

// --- حل السؤال 5 هنا ---
let name = "Ali";
function helloName(name) {
       console.log("Hello", name);
}   
helloName(name);


// 6) عندك متغير num 
//    اكتب كود يحدد إذا الرقم زوجي أو فردي.
//    إذا زوجي اطبع "Even" إذا فردي اطبع "Odd"

// --- حل السؤال 6 هنا ---
let num = 7;
function checkEvenOdd(num) {
    if (num % 2 === 0) {    
        console.log("Even");
    } else {
        console.log("Odd");
    }   
}
checkEvenOdd(num);


// 7) عندك متغير grade (0 – 100).
//    إذا الدرجة >= 50 اطبع "ناجح"
//    غير ذلك اطبع "راسب"

// --- حل السؤال 7 هنا ---
let grade = 65;
function checkPassFail(grade) {
    if (grade >= 50) {  
        console.log("ناجح");
    } else {
        console.log("راسب");
    }           
}
checkPassFail(grade);


// 8) عندك متغير score.
//    اكتب شروط if / else if حتى تطبع:
//    90 فما فوق  → "ممتاز"
//    75 – 89     → "جيد جدًا"
//    60 – 74     → "جيد"
//    أقل من 60   → "ضعيف"

// --- حل السؤال 8 هنا ---
function evaluateScore(score) {
    if (score >= 90) {  
        console.log("ممتاز");
    } else if (score >= 75) {
        console.log("جيد جدًا");
    } else if (score >= 60) {
        console.log("جيد");
    } else {
        console.log("ضعيف");
    }   
}
evaluateScore(85);


// 9) اكتب لوب for يطبع الأرقام من 1 إلى 10
//    كل رقم بسطر واحد باستخدام console.log

// --- حل السؤال 9 هنا ---
let i;
for (i = 1; i <= 10; i++) {
    console.log(i);
}       



// 10) اكتب لوب يحسب مجموع الأرقام من 1 إلى 100
//     خزّن الناتج في متغير total واطبعه بالنهاية

// --- حل السؤال 10 هنا ---
let total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
}   
console.log(total);


// 11) عندك النص التالي:
//     let text = "hello world";
//     اكتب لوب يحسب كم مرة يتكرر الحرف 'l'
//     وخزّن العدد في متغير count ثم اطبعه

// --- حل السؤال 11 هنا ---
let text = "hello world";
let count = 0;              
for (let i = 0; i < text.length; i++) {
    if (text[i] === 'l') {
        count++;
    }   
}
console.log("Count of 'l':", count);



// 12) اكتب دالة باسم countEven(n)
//     ترجع عدد الأرقام الزوجية من 1 إلى n.
//     مثال: countEven(10) ترجع 5 (2,4,6,8,10)

// --- حل السؤال 12 هنا ---
let n = 10;
function countEven(n) {
    let evenCount = 0;      
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            evenCount++;
        }
    }   
    console.log(evenCount);
    ;
}   
countEven(n);


// 13) اكتب دالة باسم sumOdd(n)
//     ترجع مجموع الأرقام الفردية من 1 إلى n.
//     مثال: sumOdd(5) ترجع 9 (1 + 3 + 5)

// --- حل السؤال 13 هنا ---
let m = 5;
function sumOdd(m) {
    let oddSum = 0;
    for (let i = 1; i <= m; i++) {
        if (i % 2 !== 0) {
            oddSum += i;
        }
    }   
    console.log(oddSum);
}
sumOdd(m);;


// 14) اكتب دالة باسم factorial(n)
//     تحسب حاصل ضرب الأرقام من 1 إلى n.
//     مثال: factorial(5) = 1*2*3*4*5 = 120

// --- حل السؤال 14 هنا ---
let p = 5;
function factorial(p) {
    let result = 1;
    for (let i = 1; i <= p; i++) {
        result *= i;
    }
    console.log(result);
}
factorial(p);;