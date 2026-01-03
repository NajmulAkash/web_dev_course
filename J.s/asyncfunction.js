async function fetchData(){
    try {
        console.log("Fetching data.....");
        const response=await
      fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        console.log(response);
        response.json()
        console.log(data);
        const data =await
        response.json();
        console.log("Data received",data);
    } 
    catch (error) {
        console.log("Error:",error.message);
    }
    finally{
        console.log("Done");
    }
}
fetchData()

// async function getdata() {
// let reseltformserver = await fetch("https://jsonplaceholder.typicode.com/posts/1")

// }
// getdata()
// console.log( await=reseltformserver.json());
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((data)=>{console.log(data)})
// .catch((error)=>{error.message})
// .finally(()=>{console.log("Done")})
// reseltformserver()

