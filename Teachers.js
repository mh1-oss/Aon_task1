// =======================================
// Simple Teacher Manager
// Weekly Task 2
// =======================================

// مصفوفة تخزن المدرسين (كل مدرس هو Object)
let teachers = [];

// متغير بسيط حتى نزود الـ id لكل مدرس جديد
let nextTeacherId = 1;

// ---------------------------------------
// TODO 1:
// دالة تنشئ مدرس جديد وتُرجع Object
// الاتربيوت: id, name, subject, students
// students بالبداية مصفوفة فارغة []
// id يأخذ القيمة من nextTeacherId، وبعدها نزود nextTeacherId
// مثال شكل المدرس:
// {
//   id: 1,
//   name: "Mr. Ahmed",
//   subject: "Math",
//   students: []   // هنا نخزن طلاب هذا المدرس
// }
// ---------------------------------------
function createTeacher(name, subject) {
  // اكتب الكود هنا
  // مثال بسيط توضيحي (تگدر تحذفه بالحل مال الطلاب):
  const teacher = {
    id: nextTeacherId,
    name: name,
    subject: subject,
    students: []
  };
  nextTeacherId++;
  return teacher;
}

let t1 = createTeacher("Mr. Ahmed", "Math");
let t2 = createTeacher("Ms. Sara", "Science");
let t3 = createTeacher("Mr. John", "History");



// ---------------------------------------
// TODO 2:
// دالة تضيف مدرس إلى مصفوفة teachers
// ---------------------------------------
function addTeacher(teacher) {
  teachers = [...teachers, teacher];
  // اكتب الكود هنا
}

addTeacher(t1);
addTeacher(t2);
addTeacher(t3);
console.log(teachers);
// ---------------------------------------
// TODO 3:
// دالة تربط طالب مع مدرس معيّن
// تضيف الطالب إلى teacher.students
// ملاحظة:
// - الطالب يجي كـ object من ملف الطلاب (createStudent)
// - نقدر نخزن الطالب كامل، أو بس اسمه، براحتكم
// ---------------------------------------
function assignStudentToTeacher(teacher, student) {
  teacher.students = [...teacher.students, student];
  // اكتب الكود هنا
}
assignStudentToTeacher(t1, { name: "Ali", age: 20 });
assignStudentToTeacher(t1, { name: "Sara", age: 22 });
assignStudentToTeacher(t2, { name: "Khalid", age: 21 });

// ---------------------------------------
// TODO 4:
// دالة تطبع تقرير مدرس واحد
// مثال شكل الطباعة:
// ========================================
// Teacher #1 - Mr. Ahmed (Subject: Math)
// Students:
// - Ali (Age: 20)
// - Sara (Age: 22)
// إذا ماكو طلاب تطبع:
// Students: لا يوجد طلاب بعد
// ---------------------------------------
function printTeacherReport(teacher) {
  console.log("========================================");
  console.log(`Teacher #${teacher.id} - ${teacher.name} (Subject: ${teacher.subject})`);
  if (teacher.students.length === 0) {
    console.log("Students: لا يوجد طلاب بعد");
  } else {
    console.log("Students:");   
    for (let student of teacher.students) {
      console.log(`- ${student.name} (Age: ${student.age})`);
    }
  }
  // اكتب الكود هنا
}

printTeacherReport(t1);
printTeacherReport(t2);
printTeacherReport(t3);

// ---------------------------------------
// TODO 5:
// دالة تطبع تقرير كل المدرسين
// إذا ماكو مدرّسين تطبع رسالة مناسبة
// غير ذلك تستخدم loop على teachers
// وتستدعي printTeacherReport لكل مدرس
// ---------------------------------------
function printAllTeachers() {
  if (teachers.length === 0) {
    console.log("لا يوجد مدرّسين بعد");
  } else {
    for (let teacher of teachers) {
      printTeacherReport(teacher);
    }     
  }
  // اكتب الكود هنا
}
printAllTeachers();

// ---------------------------------------
// TODO 6
// دالة تبحث عن مدرس بالاسم داخل teachers
// إذا لقت المدرس ترجع الـ object
// إذا ما لقت ترجع undefined
// ---------------------------------------
function findTeacherByName(name) {
  for (let teacher of teachers) {
    if (teacher.name === name) {
      return teacher;
    } 
  }
  return undefined;

  // اكتب الكود هنا (اختياري)
}

// نخلي الدوال متاحة للملف الرئيسي
