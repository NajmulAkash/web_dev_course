setTimeout(() => {
    console.log("First program")
    setTimeout(() => {
        console.log("Four program")
    }, 5000);
}, 2000);
setTimeout(() => {
    console.log("Thirds")
}, 3000);
setTimeout(() => {
    console.log("Secound Program")
}, 4000);
