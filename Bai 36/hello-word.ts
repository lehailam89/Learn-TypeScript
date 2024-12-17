// //Phần 1
// var hello = "Hello World!";
// console.log(hello);

// //Phần 3
// //3.1. Kiểu number
// let a:number = 10;
// let b:number = 10.5;

// //a = "xin chao"; lỗi không thể gán kiểu string cho biến kiểu number trong TypeScript

// a = 20; //không lỗi vì a là kiểu number và giá trị gán cho a cũng là kiểu number

// console.log(typeof a);
// console.log(typeof b);
// //3.2. Kiểu string
// let fullName:string = "Nguyen Van A";
// fullName = "Le Van A";

// console.log(fullName);
// console.log(typeof fullName);

// //3.3. Kiểu boolean
// let deleted:boolean = false;

// deleted = true;

// console.log(deleted);
// console.log(typeof deleted);

// //4. kiểu Object
// const user: {
//     fullName: String,
//     email: String,
//     age: Number
// } = {
//     fullName: "Le Hai Lam",
//     email: "lehailamltk@gmail.com",
//     age: 20
// }

// //fullName = 10; lỗi vì fullName là kiểu string không thể gán kiểu number

// console.log(user);

// //5: interface
// //interface là một cấu trúc dữ liệu mà bạn có thể sử dụng trong TypeScript để mô tả cách mà một đối tượng nên được cấu trúc.
// interface Social{
//     zalo?: String,
//     facebook?: String
// }

// interface User {
//     fullName: String,
//     email: String,
//     age?: Number, //optinal có thể có hoặc không
//     socials?: Social
// }

// const user2: User = {
//     fullName: "Le Hai Lam",
//     email: "lehailamltk2@gmail.com",
//     age: 20
// }

// console.log(user2);

// //6: Extend interface 
// //Khi một interface mở rộng một interface khác, nó sẽ kế thừa tất cả các thành viên của interface đó.
// interface Account {
//     fullName: String,
//     email: String,
//     phone: String
//     password: String
// }

// interface AccountAdmin extends Account {
//     roleId: String,
//     hotline: String
// }

// interface AccountUser extends Account {
//     score: Number,
//     cartId: String
// }

// const admin: AccountAdmin = {
//     fullName: "Le Hai Lam",
//     email: "lehailam@gmail.com",
//     phone: "0123456789",
//     password: "123456" ,
//     roleId: "g31231hj231h2j31",
//     hotline: "0123456789"
// }
// console.log(admin);

// const userb : AccountUser = {
//     fullName: "Van B",
//     email: "",  
//     phone: "0123456789",
//     password: "123456",
//     score: 90,
//     cartId: "123456"
// }
// console.log(userb);

// //7: Array
// const arrayNumber: number[] = [];

// arrayNumber.push(1);
// arrayNumber.push(2);
// arrayNumber.push(3);
// console.log(arrayNumber);

// const arrayString: string[] = [];

// arrayString.push("a");
// arrayString.push("b");
// arrayString.push("c");

// console.log(arrayString);

// const infoUser: (string | number)[] = ["Le Van A", 18, "levana@gmail.com"];
// console.log(infoUser);

///Ví dụ 4
// interface User {
//     fullName: string,
//     email: string,
//     age?: Number
// }

// const userList: User[] = [];

// const user1: User = {
//     fullName: "Le Van A",
//     email: "levana@gmail.com",
//     age: 18
// };

// const user2: User = {
//     fullName: "Le Van B",
//     email: "levanb@gmail.com"
// };

// userList.push(user1);
// userList.push(user2);

// console.log(userList);
//8: Kiểu Tuple
//Tuple là một mảng có kiểu cố định và số lượng phần tử cố định
// let infoUser: [string, number, boolean] ;
// infoUser = ["Le Van A", 18, true];
// console.log(infoUser);

// let clock: [number, number, number];

// clock = [12, 30, 45];

// const [hour, minute, second] = clock;
// console.log(`Bây giờ là ${hour} giờ ${minute} phút ${second} giây`);

//9. Readonly
//Khi một thuộc tính được gán giá trị là readonly, thì giá trị của thuộc tính đó không thể thay đổi.
// interface User {
//     readonly fullName: string,
//     email: string,
//     age?: Number
// }

// const user1: User = {
//     fullName: "Le Van A", //lần đầu tiên gán giá trị cho thuộc tính fullName
//     email: "levana@gmail.com",
//     age: 18
// };

// //user1.fullName = "Le Van B"; lỗi vì fullName là thuộc tính readonly không thể thay đổi giá trị

// console.log(user1);

//10. Functions => cú pháp viết hàm
//Declaration function
// function sum(a: number, b: number): number {
//     return a + b;
// };

// const result = sum(10, 20);
// console.log("Kết quả là: ",result);

// //expression function
// const sum2 = function(a: number, b: number): number {
//     return a + b;
// };
// const result2 = sum2(7, 8);
// console.log("Kết quả là: ",result2);

// //Arrow function
// const sum3 = (a: number, b: number): number => {
//     return a + b;
// };
// const result3 = sum3(1, 9);
// console.log("Kết quả là: ",result3);

// //11. Default Parameters(Tham số mặc định)
// const sum = (a: number = 0, b: number = 0): number => {
//     return a + b;
// };

//12. Rest Parameters
//Rest Parameters là một cú pháp mới trong ES6 cho phép bạn truyền một số lượng tham số không giới hạn vào một hàm.
// const sum = (...numbers: number[]):number => {
//     const total = numbers.reduce((sum, item) => sum + item, 0);
//     return total;
// }
// const result = sum(1, 2, 3, 4, 5);
// console.log("Kết quả là: ",result);

//13. Kiểu Enum
//Enum là một kiểu dữ liệu trong TypeScript giúp chúng ta định nghĩa một tập hợp các hằng số có tên.

// enum Status{
//     INITIAL = "initial", //0
//     ACTIVE = "active", //1
//     INACTIVE = "inactive" //2
// }

// const statusCurrent: string = "initial";

// switch(statusCurrent) {
//     case Status.INITIAL:
//         console.log("Đang khởi tạo");
//         break; // Thoát khỏi khối lệnh switch sau khi thực hiện case 0
//     case Status.ACTIVE:
//         console.log("Đang chạy");
//         break; // Thoát khỏi khối lệnh switch sau khi thực hiện case 1
//     case Status.INACTIVE:
//         console.log("Đã hoàn thành");
//         break; // Thoát khỏi khối lệnh switch sau khi thực hiện case 2
//     default:
//         console.log("Trạng thái không xác định");
// }

//14. Kiểu Any
// let a:any = 20;

// console.log(a);

// a = "Le Hai Lam";
// console.log(a);

//15. Kiểu Unknown
// let a: unknown = 20;

// console.log(a);

// a = "Le Hai Lam";
// console.log(a);

