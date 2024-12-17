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

//4. Type Alias
// Type Alias giúp chúng ta đặt tên cho kiểu dữ liệu, giúp code dễ đọc hơn.
// type RatingType = number | string;

// interface Article {
//     id: String,
//     title: String,
//     rating: RatingType,
//     status: "active" | "inactive" | "locked"
// }

//5. Intersection Type
// Intersection Type cho phép chúng ta kết hợp nhiều kiểu dữ liệu lại với nhau.
// interface Account {
//     readonly id: string,
//     fullName: string,
//     age?: number
// }

// interface Contact {
//     hotline: string, 
//     email?: string,
// }

// interface Social {
//     zalo?: string,
//     facebook?: string,
//     tiktok?: string
// }

// type AccountContact = Account & Contact;

// const user: AccountContact = {
//     id: "2313123",
//     fullName: "Lam",
//     hotline: "0123456789"
// }

//6. Declaration Merging 
// Declaration Merging là một tính năng cho phép chúng ta mở rộng các định nghĩa của một kiểu dữ liệu đã tồn tại(Hợp 2 interface trùng tên thành 1).
// interface User{
//     readonly id: string
//     fullName: string,
// }

// interface User{
//     email: string,
//     phone: string
// }

// const user1: User = {
//     id: "123",
//     fullName: "Lam",
//     email: "lehailam@gmail.com",
//     phone: "0123456789"
// }

// console.log(user1);

//7.1. Parital<Type>
//Thay đổi tất cả các thuộc tính trong một đối tượng thành tuỳ chọn (optional - ?).
// interface User{
//     readonly id: string,
//     fullName: string, 
//     phone: string
// }

// const user1: User = {
//     id: "123",
//     fullName: "Lam",
//     phone: "0123456789"
// };

// const user2: Partial<User> = {
//     id: "222",
//     fullName: "Lamdz"
// };

// console.log(user1);
// console.log(user2);

//7.2. Required<Type>
//Thay đổi tất cả các thuộc tính trong một đối tượng thành bắt buộc (required).
// interface Product{
//     id: string,
//     title: string,
//     price?: number,
//     description?: string
// }

// const product1: Product = {
//     id: "123",
//     title: "Iphone 12"
// }

// const product2: Required<Product> = {
//     id: "122213",
//     title: "Iphone 13",
//     price: 1000,
//     description: "Iphone 13"
// }

// console.log(product1);
// console.log(product2);

//7.3. Omit<Type, Keys>
//Xoá một hoặc nhiều thuộc tính ra khỏi đối tượng
// interface Product{
//     id: string,
//     title: string,
//     price?: number,
//     description?: string,
//     discount?: number
// }

// const product1: Product = {
//     id: "123",
//     title: "Iphone 12",
//     discount: 10
// }

// const product2: Omit<Product, "discount"> = {
//     id: "123",
//     title: "Iphone 12"
// }

//7.4. Pick<Type, Keys>
//Xoá tất cả các thuộc tính ra khỏi đối tượng, ngoại trừ các thuộc tính muốn giữ lại

//7.5. Readonly<Type>
//Thay đổi tất cả các thuộc tính trong một đối tượng thành chỉ đọc, không sửa được (readonly).



