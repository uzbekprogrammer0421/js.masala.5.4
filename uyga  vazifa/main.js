// 1-task 


// function middleNum(params) {
    
//     let arr = [...params]
//     let middleNumber = 0
//     let number1 =  0
//     let number2 =  0
//     if (arr.length % 2 == 1) {
//             middleNumber = (arr.length / 2 ) - 0.5
//             return(arr[middleNumber]);
//         }
//         else{
//             number1 = (arr.length / 2 )
//             number2 = (arr.length / 2 ) - 1
//             middleNumber = (arr[number1] + arr[number2]) / 2
//             return middleNumber
//     } 
// }

// console.log(middleNum([1,2,3,4,5]));


// 2-task 


// let products = [
//     {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
//     ];
// let new_products = products.filter(item => item.id !== 4)
// console.log(new_products);


// 3-task 


// function countNumbers(str) {
//     let count = "Faqat half";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '1' || str[i] === '2' || str[i] === '3' || str[i] === '4' || str[i] === '5' || str[i] === '6' || str[i] === '7' || str[i] === '8'|| str[i] === '9' || str[i] === '0') {
//             count = "Faqat half emas"
//         }
//     }
//     console.log(count);
// }

// countNumbers("Asilbek2077804");


// 4-task 


// let new_obj = {}
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// let arr = animals.sort();
// for (let i = 0; i < arr.length; i++) {
//     let count = 1
//     while (arr[i] === arr[i + 1]) {
//         count++
//         i++
//     }
//     new_obj[arr[i]] = count
// }
// console.log(new_obj)


// 5-task 


// function wordlength(params) {
//     let new_obj = params.split(' ').map(params => params.length)
//     return new_obj
// }
// console.log(wordlength("Hello world"));


// 6-task 1-usul


// let obj = {a: 2, b: 5, c: 7}
// let arr = Object.entries(obj)
// let new_arr = arr.map(([key,value])=> `${key}${value}`)
// console.log(new_arr);


// let obj = {a: 2, b: 5, c: 7}
// let arr = []
// for (const key in obj) {
//     arr.push(key + obj[key])
// }
// console.log(
//     arr
// );


// 7-task 


// const pupils = [
//     {name: "Elbek", protcent: 95,},
//     {name: "Zafar", protcent: 78,},
//     {name: "Aziz", protcent: 83,},
//     {name: "Jasur", protcent: 88,},
//     {name: "Bobur", protcent: 66,},
//     {name: "Kamron", protcent: 75,},
//     ];
// let new_obj = {}
// let new_obj_2 = {}
// let result_1 = []
// let result_2 = []
// for (let i = 0; i < pupils.length; i++) {
//     if (pupils[i].protcent >= 80 ) {
//         new_obj[i] = pupils[i]
//         result_1.push(pupils[i].protcent)
//     }    
//     else {
//         new_obj_2[i] = pupils[i]
//         result_2.push(pupils[i].protcent)

//     }
// }
// console.log("O'tganlarning umumiy balli", result_1.reduce((a,b)=> a+b,0));
// console.log(new_obj); 
// console.log("O'taolmaganlarning umumiy balli" , result_2.reduce((a,b)=> a+b,0));
// console.log(new_obj_2);


// 7-task 2-usul 


// const pupils = [
//     {name: "Elbek", protcent: 95,},
//     {name: "Zafar", protcent: 78,},
//     {name: "Aziz", protcent: 83,},
//     {name: "Jasur", protcent: 88,},
//     {name: "Bobur", protcent: 66,},
//     {name: "Kamron", protcent: 75,},
//     ];
// let count_1 = 0
// let count_2 = 0
// for (let i = 0; i < pupils.length; i++) {
//     if (pupils[i].protcent >= 80 ) {
//         count_1 ++ 
//     }    
//     else {
//         count_2 ++
//     }
// }
// console.log("Imtihondan o'tganlar  " + count_1);
// console.log("Imtihondan o'taolmaganlar  " + count_2);


// 8-task 


// var findMedianSortedArrays = function(nums1, nums2) {
//     let arr = [...nums1,...nums2]
//     let middleNumber = 0
//     let number1 =  0
//     let number2 =  0
//     if (arr.length % 2 == 1) {
//             middleNumber = (arr.length / 2 ) - 0.5
//             return(arr[middleNumber]);
//         }
//         else{
//             number1 = (arr.length / 2 )
//             number2 = (arr.length / 2 ) - 1
//             middleNumber = (arr[number1] + arr[number2]) / 2
//             return middleNumber
//     }
// };
// console.log(findMedianSortedArrays(nums1 = [1,2,5], nums2 = [3,4,5]));