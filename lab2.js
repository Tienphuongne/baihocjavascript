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


// bai1
const ten = ["An", "Bình", "Nam", "Hòa", "Lan"];

console.log(ten);
console.log(ten[0]);
console.log(ten[ten.length - 1]);
console.log(ten.length);

ten.push("Minh");
console.log(ten);

ten.pop();
console.log(ten);

// bai2
const names = ["An", "Bình", "Nam", "Hòa", "Lan"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// bai3
const student = {
  id: 1,
  name: "Nguyễn Văn An",
  age: 20,
  email: "an@gmail.com",
  major: "CNTT",
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.email);

student.age = 21;
console.log(student.age);

student.phone = "0123456789";
console.log(student);

// ==================== Bài 4 ====================
const students = [
  { id: 1, name: "Nguyễn Văn An", age: 20 },
  { id: 2, name: "Trần Văn Bình", age: 21 },
  { id: 3, name: "Lê Văn Nam", age: 20 },
];

console.log(students);
console.log(students[0].name);
console.log(students[1].age);

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

// bai5

const hocsinh = [
  { id: 1, name: "Nguyễn Văn An", age: 20 },
  { id: 2, name: "Trần Văn Bình", age: 21 },
  { id: 3, name: "Lê Văn Nam", age: 20 },
];

const containerHocSinh = document.getElementById("hocsinh");

let htmlHocSinh = "";
for (let i = 0; i < hocsinh.length; i++) {
  htmlHocSinh += `
    <div>
      <p>${hocsinh[i].name}</p>
      <p>Tuổi: ${hocsinh[i].age}</p>
    </div>
  `;
}
if (containerHocSinh) {
  containerHocSinh.innerHTML = htmlHocSinh;
}

// baitong hop
const products = [
  { id: 1, name: "iPhone 15", price: 20000000 },
  { id: 2, name: "Samsung Galaxy S24", price: 18000000 },
  { id: 3, name: "Xiaomi 14", price: 12000000 },
];

// Bước 1
console.log("===== Danh sách sản phẩm =====");
console.log(products);

// Bước 2 + 3
console.log("\n===== Danh sách theo định dạng =====");
for (let i = 0; i < products.length; i++) {
  console.log(`${products[i].name} - ${products[i].price}`);
}

// Bước 4
let total = 0;
for (let i = 0; i < products.length; i++) {
  total += products[i].price;
}
console.log("\nTổng giá tất cả sản phẩm:", total);

// Bước 5
const containerProducts = document.getElementById("products");

let htmlProducts = "<h3>Danh sách sản phẩm:</h3>";
for (let i = 0; i < products.length; i++) {
  htmlProducts += `
    <div style="margin-bottom: 8px;">
      <strong>${products[i].name}</strong> - ${products[i].price.toLocaleString()} VNĐ
    </div>
  `;
}
htmlProducts += `<hr><strong>Tổng giá: ${total.toLocaleString()} VNĐ</strong>`;

if (containerProducts) {
  containerProducts.innerHTML = htmlProducts;
}