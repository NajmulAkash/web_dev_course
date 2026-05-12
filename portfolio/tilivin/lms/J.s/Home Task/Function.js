//Push array
// let arr=["Najmul","Tajwar","Inam"]
// arr.push("Yaseen")
// console.log(arr)

//loop --
// for(let a=10;a>=0;a--){
//     console.log(a)
// }

//loop ++
// for(let b=0;b<=10;b++){
//     console.log(b)
// } 

//Nested Function

function ali(){
    console.log("Function 1")
    inam()
    function inam(){
        console.log("function 2")
        taju()
    }
    function taju(){
        console.log("Function 3")
    }
}
ali()