// let promise=new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve({Name:"Najmul Akash",Email:"najmulbalghari23@gmail.com"})
//     }, 1000);
// })
// promise.then((data)=>{
//     console.log(data)
// })

let promise2=new Promise((resolve, reject) => {
    let a=2;
    let b=2;
    setTimeout(() => {
        if(a%b==0){
             resolve()
            console.log({Name:"NajmulAkash",Email:"najmulakash23@gmail.com"});
        }
        else{
             reject()
        }
    }, 1000);
})

// let a="ali";
// let b="1122";
// let promise=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(a=="ali" && b=="1122"){
//             resolve()
//             console.log("program is resolve");
//         }
//         else{
//             reject()
//             console.log("program is Reject")
//         }
//     }, 1000);
// })