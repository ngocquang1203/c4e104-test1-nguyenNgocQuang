// let str_input = prompt("nhap vao gia tri bat ki");
// let str="";
// for(var i = str_input.length-1;i>=0;i--){
//     str =str + str_input[i];
// };
// console.log(str);

// 2

// let str = "xin chao";
// let X = "";
// for(var i = 0; i < str.length; i++){
//     i = str.charAt(0).toUpperCase() + str.slice(1);
//     X = X + str[i];
// };
// console.log(X);

// 3
// let arr = [ "a","b","c","a","c"];
// let arr_d=[];
// for (let i=0; i<arr.length;i++){
//     if()
// }
// 4

const mindX = [
    {
        ten: "A",
        tuoi: "26",
        mucLuong: "10tr",
        chucVu: " Nhan vien",
    },
    {
        ten: "B",
        tuoi: "27",
        mucLuong: "15tr",
        chucVu: " quan ly",  
    },
    {
        ten: "C",
        tuoi: "40",
        mucLuong: "7tr",
        chucVu: " Bao ve",  
    }
];
let nguoiDung = prompt("Quan ly nhan vien (Read, Create, Update, Delete)");
if(nguoiDung==="Read"){
for(let key of mindX){
    console.log(key,mindX[key]);
}
}
