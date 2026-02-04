const URL=("https://jsonplaceholder.typicode.com/posts/1")
let promis = fetch(URL)
console.log(promis)

let getdata= async()=>{
    console.log("loading......")
    let promis = await fetch(URL)
    console.log(promis)
    let data =await promis.json()
    console.log(data)
}