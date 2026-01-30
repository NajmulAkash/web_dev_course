const URl="https://jsonplaceholder.typicode.com/posts/1";
let promise = fetch(URl);
console.log(promise);

const Getdata= async()=>{
    console.log("gating data......")
    let response = await fatch (URL);
    console.log(response)
}