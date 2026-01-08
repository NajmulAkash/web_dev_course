// let student={
//     name:"Najmul balghari",
//     Class:"9th",
//     Subject:"Web-Development",
//     Center:"Next-Planer",
//     Address:{
//         Location:"Hargesa",
//         PermentAddress:"Balghar",
//         City:"Pakistan",
//         subjectMark:{
//             Html:"78%",
//             Css:"90%",
//             Boostrep:"87%",
//             React:"58%",
//             Js:"43%",
//         }
//     }
// }
// console.log("Address",student.Address.Location)
// console.log("Boostrep",student.Address.subjectMark.Boostrep)


//drink water//
// console.log("Drink Water!")
// let coun=5;
// function coundo(){
//     if(coun === 0){
//         return 0;
//     }
//     console.log(coun)
//     coun--;
//     setTimeout(coundo,1000)
// }
// coundo()
//    setTimeout(() => {
//         console.log("Time to drink Water!")
//     }, 5000);
//     setTimeout(() => {
//         console.log("WellDown!")
//     }, 7000);

//factorial Programm//
// function factorial(num){
//     if(num === 0){
//         return 1;
//     }
//     return num * factorial (num -1)
// }
// console.log(factorial(4));

// function fact(count){
//     if(count === 0){
//         return 1;
//     }
//     return count * fact(count -1)
// }
// console.log(fact(5))

// Phala plus //
// let a=20;
// let b=2+ a++
// console.log(b)

// Bat ma PLus //
// let c=20;
// let d=2+ ++c
// console.log(d)

// nested function //
// function nestedfun1(){
//     console.log("Function 1")
//     nestedfun2()
// }
// function nestedfun2(){
//     console.log("Function 2")
//     nestedfun3()
// }
// function nestedfun3(){
//     console.log("Function 3")
// }
// nestedfun1()


// promes function //
let promes=new Promise((resolve, reject) => {
    let a=1;
    let b=3;
    setTimeout(() => {
        if(a%b==0){
            resolve()
            console.log({Name:"Najmul Balghari",Email:"najmulbalghari23@gmail.com"})
        }
        else{
            reject()
        }
    }, 1000);
})

