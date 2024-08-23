// let message = "hello world" 
// message = "hello world 2"
// message = "12"
// console.log(message)
// // npm install -g typescript
// // sudo 
// let phone = 2212423423
// phone = "hello"
// let count : number = 10 
// // flag , greet => bool , string
// let flag : boolean = false ;
// let greet : string = "hello world" ;
// variables , function , 
// function => parameters  (a,b) , return 
// 
// function greetBirthday(name : string, age : number) : string | number {
//     if(age > 10){
//         return `$Happy birthday ${name} , you've turned ${age}`
//     } else{
//         return age
//     }
// }
// greetBirthday("bheem" , 20) // what datatype is stored in line 35
// // let num : any = false ; 
// // // calculate the area of a rectangle in a function and return the values .
// // variable => datatype
// // password , switch
// let password : number | string | boolean = 2342342342 ; 
// password = "newPassword"
// password = true 
// union => |
// let student = {
//     id : 1,
//     name : "shouvick"  ,
//     age : 0 , 
// }
// // id : <input >
// // name : <input >
// // age :  <input >
// student.email = "student@ElementInternals.com"
// interface in TS => mold
// interface student {
//     id : number , 
//     name : string , 
//     isGraduated : boolean | number , 
//     // optional propeties
//     isPresent ?: boolean
// }
// let stud1 : student = {
//     id : 1  , 
//     name : "stud1" , 
//     isGraduated : 1
// }
// let stud2 : student = {
//     id : 2  , 
//     name : "stud2" , 
//     isGraduated : 1 , 
//     isPresent  : true
// }
// stud1.isGraduated = "true";
// create an address object => city , pincode , state , landmark(optional)
// let arr = [1,2,3,4,5,6 , "str1" , "str2" , true , false]
// let arr : number[] = [1,2,3,4,5,6]
// let Barr : boolean[] = [true , false , true ]
// let mixTypedArr : (boolean | number | string)[] = [1,23,4 , true , false , "hellow" , "world"]
// (type1 | type2)[]
// [{} , {} , {}] // classroom
// {} // studentData
// let add : number = 1+2
// interface student  {
//     id : number , 
//     name : string
// }
// let stud1 : student = {
//     id : 1 , 
//     name : "stud1"
// }
// let stud2 : student = {
//     id : 2 , 
//     name : "stud2"
// }
// let stud3 : student = {
//     id : 2 , 
//     name : "stud3"
// }
// let a : number = 1 
// let b : number = 2 
// let c : number = 3
// let numArr : number[] = [a,b,c]
// let classroom : student[] = [stud1 , stud2 , stud3]
// interface => Type => intersection
// function add(){
//     return 1
// }
// type student = {
//     id : number | boolean , 
//     name : string , 
//     add() : number
// }
// let obj1 = {
//     id : 1 , 
//     name : "bheem"
// }
// let obj2 = {
//     id : 2 , 
//     name : "raju"
// }
// interface animal {
//     id : number , 
//     add() : void 
// }
// let nobj1 = {
//     id : 1 , 
//     add
// }
// console.log(nobj1.add())
// // optional
// functions => methods
// with interface you can you extends keyword , but not with type
// extends
