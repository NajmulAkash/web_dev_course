import React from 'react'
 async function getdata() {
    let resultformserver =await
    fetch ("https://fakestoreapi.com/products")
 }
 getdata()
 let res=await resultformserver.json()
 console.log( res)
function Api() {
  return (
    <></>
  )
}

export default Api

