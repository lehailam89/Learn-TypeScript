"use strict";
//1. Kiểu Void
// const hello = (fullName: string): void => {
//     console.log(`Hello ${fullName}`);
// }
// hello("Lam dep trai");
// //2. Generics
// // Generics là một cách để tạo ra các component có thể làm việc với nhiều kiểu dữ liệu khác nhau mà không mất tính linh hoạt, tái sử dụng code.
// const reverseArray = <T>(array: T[]): T[] => {
//     const newArray = array.reverse();
//     return newArray;
// }
// const test1 = reverseArray<number>([1, 2, 3, 4, 5]);
// console.log(test1);
//3. Union Type
// Union Type cho phép một biến có thể chứa giá trị của nhiều kiểu dữ liệu khác nhau.
// interface Product {
//     id: number;
//     title: string;
//     price: number;
//     rating: number | string;
//     status: "active" | "inactive" | "locked";
// }
