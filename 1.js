//تاسك الأسبوع الثالث
//اختار واحد فقط:
///users
///posts
///todos 
//من: https://jsonplaceholder.typicode.com/

//المطلوب
//1 جلب البيانات
//استخدم fetch
//خزن الداتا داخل متغير
//اطبع الداتا بالـ console حتى تتأكد الداتة عندك موجودة صح 

//2 نفذ الفنكشنات ال10
//جميع الفنكشنات لازم:
//تستقبل الداتا كـ parameter
//ترجع (return) نتيجة
// الفنكشنات المطلوبة (10):
//1 getAllItems(data)
//ترجع كل الداتا بدون تعديل
//2 getItemById(data, id)/ 
//ترجع عنصر واحد حسب id
//3 getItemsCount(data) 
// ترج//ع عدد العناصر
//4 getMappedValues(data) 
// ترج//ع مصفوفة جديدة بقيمة وحدة من كل عنصر (مثل: name / title)
//5 getFilteredItems(data) 
// ترج//ع العناصر بعد تطبيق شرط (مثل: completed === true)
//6 hasAnyMatchingItem(data) 
// ترج//ع true إذا يوجد عنصر يحقق شرط
//7 areAllItemsMatching(data) 
// ترجع true إذا كل العناصر تحقق شرط
//8// getSortedItems(data) 
// ترجع الداتا مرتبة (تصاعدي أو تنازلي)
//9 getReducedValue(data) 
// ترجع قيمة محسوبة باستخدام reduce (مثل: عدد العناصر المكتملة)
//10 getModifiedItems(data) 
// ترجع داتا جديدة بعد تعديل قيمة معينة (بدون التعديل على الأصل)
//3 اطبع نتائج الفنكشنات بالـ console
//تأكد أن كل فنكشن تشتغل صح وتعطي النتيجة المطلوبة  


// 1. تعريف مخزن البيانات (متغير عام)
let globalTodos = [];

// دالة جلب البيانات وحفظها في المتغير العام
async function loadData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();

        // هنا التغيير: نحفظ البيانات في المتغير العام بدلاً من إرجاعها فقط
        globalTodos = data; 
        console.log("تم تحميل البيانات بنجاح!");

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



function getItemById(id) {
    
    return globalTodos.find(item => item.id === id);
}

function getItemsCount() {
    return globalTodos.length;
}

function getMappedValues() {
    return globalTodos.map(item => item.title);
}

function getFilteredItems() {       
    return globalTodos.filter(item => item.completed === true);
}   
function hasAnyMatchingItem() {
    return globalTodos.some(item => item.completed === true);
}       

function areAllItemsMatching() {
    return globalTodos.every(item => item.completed === true);
}   
function getSortedItems() {
    return globalTodos.sort((a, b) => a.id - b.id);
}
function getReducedValue() {
    return globalTodos.reduce((count, item) => count + (item.completed ? 1 : 0), 0);
}
function getModifiedItems() {
    return globalTodos.map(item => ({ ...item, title: item.title.toUpperCase() }));
}



await loadData()
.then(() => {
    
    console.log('getItemById():', getItemById(1));
    console.log('getItemsCount():', getItemsCount());
    console.log('getMappedValues():', getMappedValues());
    console.log('getFilteredItems():', getFilteredItems());
    console.log('hasAnyMatchingItem():', hasAnyMatchingItem());
    console.log('areAllItemsMatching():', areAllItemsMatching());
    console.log('getSortedItems():', getSortedItems());
    console.log('getReducedValue():', getReducedValue());
    console.log('getModifiedItems():', getModifiedItems());
});