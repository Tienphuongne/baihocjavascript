// // array []
// const student1 = "Nguyễn Văn An";
// const student2 = "Trần Văn Bình";
// const student3 = "Lê Văn Nam";

// const students = ["Nguyễn Văn An", "Trần Văn Bình", "Lê Văn Nam"];

// const ids = [1, 5, 23, 45, 54];
// const actives = [true, false, 42, "hoadv21"];
// // danh index: 0, 1, 2
// console.log("ban dau", students);
// students[0] = "hoadv";
// // students = ["hoadv"]; -> error
// // console.log("sau khi thay doi", students);
// console.log("do dai array", students.length);

// students.push("nguyen van a");
// console.log("sau khi thay doi", students);

// // for
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// // object
// const student = {
//   id: "ph6666",
//   name: "hoadv",
//   age: 36,
// };
// console.log(student.id);
// student.id = "ph888";
// // student = {}; => error
// student.addess = "ha noi";
// delete student.addess;
// console.log(student.id);
// console.log(student.addess);

// // array object
// const myStudents = [
//   {
//     id: "ph6666",
//     name: "hoadv",
//   },
//   {
//     id: "ph888",
//     name: "namdv",
//   },
// ];

// console.log(myStudents[0].id);


// //truy cập don id = students

// let html = document.getElementById("students");

// let content ="";

// for (let i =0; i< myStudents.length; i++){
//   content += content + `
//   <div>
//     <h3>Ten Sinh Viên: ${myStudents[i].name}  </h3>
//     <h4>Id Sinh Viên: ${myStudents[i].id}  </h4>
//   </div>
//   `;
// }
// html.innerHTML = content;

// console.log(html);


//Bài 1: 
const ten = ["An", "Bình", "Nam", "Hòa", "Lan"];

// In Array ra Console
console.log(ten);

// In phần tử đầu tiên
console.log(ten[0]);

// In phần tử cuối cùng
console.log(ten[ten.length - 1]);

// In số lượng phần tử
console.log(ten.length);

// Thêm một tên mới
ten.push("Minh");
console.log(ten);

// Xóa phần tử cuối
ten.pop();
console.log(ten);
//Bài 2:
const names = ["An", "Bình", "Nam", "Hòa", "Lan"];

// Sử dụng for để in từng tên
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// Hoặc dùng for...of (hiện đại hơn)
for (const name of names) {
  console.log(name);
}
//Bài 3:
 const student = {
  id: 1,
  name: "Nguyễn Văn An",
  age: 20,
  email: "an@gmail.com",
  major: "CNTT",
};

// In Object
console.log(student);

// In tên sinh viên
console.log(student.name);

// In tuổi
console.log(student.age);

// In email
console.log(student.email);

// Thay đổi tuổi
student.age = 21;
console.log(student.age);

// Thêm thuộc tính phone
student.phone = "0123456789";
console.log(student);
//Bài 4: 
  const students = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
  },
  {
    id: 2,
    name: "Trần Văn Bình",
    age: 21,
  },
  {
    id: 3,
    name: "Lê Văn Nam",
    age: 20,
  },
];

// In danh sách ra Console
console.log(students);

// In tên sinh viên đầu tiên
console.log(students[0].name);

// In tuổi sinh viên thứ hai
console.log(students[1].age);

// Duyệt danh sách bằng for
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// In tên của tất cả sinh viên
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

// Hoặc dùng for...of
for (const student of students) {
  console.log(student.name);
}

//Bài 5:
const hocsinh = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
  },
  {
    id: 2,
    name: "Trần Văn Bình",
    age: 21,
  },
  {
    id: 3,
    name: "Lê Văn Nam",
    age: 20,
  },
];

const container = document.getElementById("hocsinh");

let html = "";
for (let i = 0; i < hocsinh.length; i++) {
  html += `
    <div>
      <p>${hocsinh[i].name}</p>
      <p>Tuổi: ${hocsinh[i].age}</p>
    </div>
  `;
}
container.innerHTML = html;

