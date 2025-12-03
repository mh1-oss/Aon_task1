// =======================================
// Simple Student Manager
// Weakly Task 1
// =======================================

// مصفوفة تخزن الطلاب (كل طالب هو Object)
let students = [];

// متغير بسيط حتى نزود الـ id لكل طالب جديد
// كل طالب عندة id مختلف عن باقي الطلاب 
let nextId = 1;

// ---------------------------------------
// TODO 1:
// دالة تنشئ طالب جديد وتُرجع Object
// الاتربيوت: name, age
// الدرجات بالبداية مصفوفة فارغة []
// id يأخذ القيمة من nextId، وبعدها نزود nextId
// مثال شكل الطالب:
// {
//   id: 1,
//   name: "Ali",
//   age: 20,
//   grades: []
// }
// ---------------------------------------
function createStudent(name, age) {
    let student = {
        id: nextId,
        name: name, 
        age: age,
        grades: []
    };
    nextId++;
    return student;

}  
let s1 = createStudent("Ali", 20);
let s2 = createStudent("khalid", 20);
let s3 = createStudent("Sara", 22);

// اكتب الكود هنا
// ---------------------------------------
// TODO 2:
// دالة تضيف طالب إلى مصفوفة students
// ---------------------------------------
function addStudent(student) {
    students=[...students, student];
    

    // اكتب الكود هنا
}
addStudent(s1)

addStudent(s2)
addStudent(s3)
console.log(students);

// ---------------------------------------
// TODO 3:
// دالة تضيف درجة جديدة لطالب معيّن
// تضيف الدرجة إلى student.grades
// ---------------------------------------
function addGrade(student, grade) {
    student.grades.push(grade);
    // اكتب الكود هنا
}

addGrade(s1, 80);
addGrade(s1, 90);
addGrade(s2, 70);
console.log(students);

// ---------------------------------------
// TODO 4:
// دالة تحسب معدّل درجات طالب
// إذا ما عنده درجات ترجع 0
// تستخدم loop حتى تجمع الدرجات
// وترجع sum / عدد الدرجات
// ---------------------------------------
function getAverage(student) {
    let grades = student.grades;
    if (grades.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
    // اكتب الكود هنا
}
console.log(getAverage(s1)); // 85
console.log(getAverage(s2)); // 70
console.log(getAverage(s3)); // 0



// ---------------------------------------
// TODO 5:
// دالة ترجع حالة الطالب حسب المعدّل
// تستخدم getAverage(student)
// إذا المعدّل >= 50 → "ناجح"
// غير ذلك → "راسب"
// ---------------------------------------
function getStatus(student) {
    let average = getAverage(student);
    if (average >= 50) {
        return "ناجح";
    } else {
        return "راسب";
    }
    // اكتب الكود هنا
}
console.log(getStatus(s1)); // ناجح
console.log(getStatus(s2)); // ناجح


// ---------------------------------------
// TODO 6:
// دالة تطبع تقرير طالب واحد في الـ console
// مثال شكل الطباعة:
// ========================================
// Student #1 - Ali (Age: 20)
// Grades: 80, 90, 75
// Average: 81.67
// Status: ناجح
// إذا ماكو درجات تطبع: Grades: لا توجد درجات بعد
// ---------------------------------------
function printStudentReport(student) {
    console.log("========================================");
    console.log(`Student #${student.id} - ${student.name} (Age: ${student.age})`);
    if (student.grades.length === 0) {
        console.log("Grades: لا توجد درجات بعد");
    } else {
        console.log("Grades:", student.grades);
        console.log("Average:", getAverage(student));
        console.log("Status:", getStatus(student));
    }
    
    console.log("========================================");
    // اكتب الكود هنا
}




// ---------------------------------------
// TODO 7:
// دالة تطبع تقرير كل الطلاب
// إذا ماكو طلاب تطبع رسالة مناسبة
// غير ذلك تستخدم loop على students
// وتستدعي printStudentReport لكل طالب
// ---------------------------------------
function printAllStudents() {
    if (students.length === 0) {
        console.log("لا يوجد طلاب لعرض تقرير لهم.");
    } else {
        for (let i = 0; i < students.length; i++) {
            printStudentReport(students[i]);
        }   
    }
    // اكتب الكود هنا
}
printAllStudents();



// ---------------------------------------
// TODO 8:
// دالة تبحث عن طالب بالاسم داخل students
// إذا لقت الطالب ترجع الـ object
// إذا ما لقت ترجع undefined
// ---------------------------------------
function findStudentByName(name) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === name) {
            return students[i];
        }   
    }
    return undefined;
    // اكتب الكود هنا (اختياري)
}
console.log(findStudentByName("Ali"));
  // ترجع طالب علي


// =======================================
// TODO 9 - جزء التنفيذ (Main):
// هنا يخلي الطالب كوده التجريبي:
// - ينشئ 3 طلاب على الأقل باستخدام createStudent
// - يضيفهم لمصفوفة students باستخدام addStudent
// - يضيف درجات لكل طالب باستخدام addGrade
// - يستدعي printAllStudents حتى يطبع تقرير كامل
//
// مثال تخطيط (هم يملوه):
//
// const s1 = createStudent("Ali", 20);
// const s2 = createStudent("Sara", 22);
// const s3 = createStudent("Noor", 19);
//
// addStudent(s1);
// addStudent(s2);
// addStudent(s3);
//
// addGrade(s1, 80);
// addGrade(s1, 90);
// addGrade(s1, 75);
//
// ... الخ
//
// printAllStudents();
//
// =======================================

// اكتب كود التنفيذ هنا:
