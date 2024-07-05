// 1-IFFE
// 1-misol
// (function(a,b){
//     console.log(a+b);
// })(2,3)

// 2-misol
// (function(a,b){
//     console.log(a-b);
// })(2,3)
// 3-misol
// (function(a,b){
//     console.log(a*b);
// })(2,3)
// 4-misol
// (function(a,b){
//     console.log(a/b);
// })(2,3)

// Bu misollarda IFFE dan foydalanib a va b ni yigindisi ayirmasi , kopaytmasi va boliunmasini topishimiz mumkun
// bundsn fpydalanib 1 qatorli soddda misollarni togridan togri ishlashimiz mumkun

// 2-Pure Function

// a
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function filternumber(numbers) {
//   return numbers.filter((num) => num % 2 === 0);
// }

// console.log(filternumber(numbers));

// b

// c
// function darajasinitopish(n){
//     return n**5
// }console.log(darajasinitopish(4));

// d
//---- Pure function  hech qanday tashqi tasir  qilmaydigan funksiya
// tashqaridan  hech qanday malumot olmaydi

// 3. Callback function

// 1-misol
// let arr = [1, 2, 3, 4, 5, 6];
// function findoddElement(arr){
//     let res=[]
//      arr.forEach(function(value ){
//      if(value%2===1){
//         res.push(value)
//      }
//     })
//     return res
// }console.log(findoddElement(arr));

// 2-misol

// function findElement(arr){
//     return arr.find(function(value){
//      return    value%2==0
//     })
// }console.log(findElement(arr));

// 3-misol

//  4-misol

// 4.REkursiv Funksiya

// Objects

// 1-misol
// let user={
//     name: 'John',
//     age:  45,
//     phone: "1234567890"
// }
// console.log(Object.keys(user));

// 2-misol

// let user={
//     name: 'John',
//     age:  45,
//     phone: "1234567890"
// }

// console.log(Object.values(user));

// 3-misol
// let user={
//     name: 'John',
//     age:  45,
//     phone: "1234567890"
// }

// console.log(Object.entries(user));

// 4-misol

// let user={
//     name: 'John',
//     age:  45,
//     phone: "1234567890"
// }

// console.log(Object.freeze(user));

// Massiv metodlariga oid masalalar

// 1-misol

// let arr=[1, 2,3,4,56,7,89]

// function sliceArr(arr){
//     return arr.slice(2, 5)
// }
// console.log(sliceArr(arr));

// 2-misol
// function concatArrs(arr,arr1,arr2){
//     return arr1.concat(arr2, arr)
// }console.log(concatArrs('1,23,4,4,5', '123345555', '445554332'));

// 4-misol

// let arr=[1,2,3,5,6]
// let arr1= [6]
// function indexOfarr(arr,arr1){
//     const index = arr.indexOf(arr1)
//     if(arr1!==-1){
//         return arr1**3;
//     }
// }
// console.log(indexOfarr(arr,arr1));

// 5-misol

// let arr=[1,2,3,5,6]
// let arr1= 6

// function findlastindex(arr,arr1){
//     let res = arr.lastIndexOf(arr1)
//         return res
// }
// console.log(findlastindex(arr,arr1));

// 6-misol

// let arr =[1,23,34,4,5,5,67,7]
// let arr1=[3,6,7,8,9,0,2]
// let arr2=7
// function findarr2(arr, arr1, arr2){
//     let res=arr.concat(arr1)
//     return res.indexOf(arr2)
// }
// console.log(findarr2(arr,arr1,arr2));

// 7-misol

// let arr =[1,23,34,4,5,5,67,7]
// let value=2
// function includesValue(arr, value){
//     return arr.includes(value)}
//     console.log(includesValue(arr,value));

// 8-misol

// let arr=[12,3,5,6,712,233,111]
// function ortachasinitopish(arr){
//     let count=0
//     let sum =0
//      arr.forEach(function(son){
//         if(son>99  && son<1000  && son%2===1){
//            sum+=son;
//            count++;
//         }
//        if(count>0){
//         return sum/count
//        }
//     })

// }console.log(ortachasinitopish(arr));

// 9-misol

// let arr =[1,2,3,4,5,6,7,8,9]
// function mapARR(arr){
//     let res = arr.map(function(num){
//         if(num%2==0){
//             return num**2
//         }else if(num%2==1){
//             return num
//         }
//     })
//     return res
// }
// console.log(mapARR(arr));

// 10-misol

// 11-misol

// let arr=[ 'salom' ,'dunyo', 'salom','non']
// function filterARR(arr){
//   const res= arr.filter(word => word.length < 4);
//     return res
// }
// console.log(filterARR(arr));

// 12-misol

// let user=[
//     {name: 'ALex', age:15},
//     {name: 'jack', age:55},
//     {name: 'Doe', age:25}
// ]
// function findAge(user){
//     let res=user.some(num => num.age>18)
//     return res
// }
// console.log(findAge(user));

// 13-misol

// const names2 = ["Hojijon", "Zafarjon", "Bahodirjon"];

// function findNameendsithJon(names2) {
//   return names2.every((ism) => ism.endsWith("jon"));
// }
// console.log(findNameendsithJon(names2));


// 14-misol

