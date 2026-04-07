// LECTURE 1
// const para = document.querySelector("p")
// para.innerText="This is a New Paragraph."
// para.style.color="green"
// console.log(para)

//LECTURE 2 AND 3 AND 4
// console.log(document)
// const para = document.getElementById("para")
// para.innerText="hiiiiiii"

// const para = document.getElementsByClassName("para")
// console.log(para)
// para[0].innerText="This is a New Paragraph."
// para[1].style.color="green"
// console.log(para)

// const para = document.querySelectorAll(".para")
// console.log(para)
// para[0].innerText="This is a New Paragraph."
// para[1].style.color="green"
// console.log(para)

// let arr=[23,134,13,14,45,67]
// const newArr=arr.map((ele)=>ele) //it returns new array 
// arr.forEach((ele)=>console.log(ele))// does not return new array


// const container=document.querySelector(".container")
// container.innerHTML=("<h1>Kaboom Kablow</h1>")
// console.log(container)

// LECTURE 5

// const btn=document.querySelector("button")
// btn.classList.add("btn")
// // btn.classList.remove("btn")


// // EVENT HANDLING
// function message()
// {
//     alert("How are you")
// }
// // btn.addEventListener("mouseover",function(){alert("Hello")})
// btn.addEventListener("click",message)
// btn.removeEventListener("click",message)


// AGLA LECTURE

// console.log(b)
// let a=134
// var b=1384
// console.log(a)
// console.log(b)

// function print(){
//     console.log ("inside fn")
// }
// print()



//ERROR HANDLING
// console.log("first line")
// try{
//     let age = 16
//     if(age<18){
//         throw new Error("You are a minorrrrrrr")
//     }
// }catch(e){
//     console.error(e)
//     console.log("error aa gaya")
// }
// console.log("second line")

// async function getData(){
//     try{
//         const response = await fetch("https://dummyjson.com/products")
//         console.log(response)
//     if(response.ok===false){
//         throw new Error("Something went wrong")
//     }
//     console.log(response)
//     const data = await response.json()
//     console.log(data)
//     data.products.forEach((product)=>{
//         console.log(product.title)
//     })
//     }catch(e){
//         console.error(e)
//     }
    
// }
// getData()


// async function getData(){
//     try{
//         const response = fetch("https://dummyjson.com/products/add",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify({
//                 "title":"Macbook M4",
//                 "description":"This is a new product",
//                 "category":"electronics",
//                 "price":999.8,
//                 "discountPercentage":10,
//                 "rating":4.5,
//                 "stock":100,
//             })
//         })
//     if(response.ok===false){
//         throw new Error("Something went wrong")
//     }
//     console.log(response)
//     const data = await response.json()
//     console.log(data)
//     }catch(e){
//         console.error(e)
//     }
// }
// getData()

// localStorage.setItem("name","Rooney")
// localStorage.setItem("age",41)

// const uname= localStorage.getItem("name")
// console.log(uname)
// console.log(localStorage.getItem("age"))

// localStorage.removeItem("name")
// localStorage.clear()


// sessionStorage.setItem("name","Rooney")
// sessionStorage.setItem("age",41)

// const uname= sessionStorage.getItem("name")
// console.log(uname)
// console.log(sessionStorage.getItem("age"))

// sessionStorage.removeItem("name")

// document.cookie="username=Rooney; expires=Thu, 20 Feb 2026 12:00:00 UTC;"
// document.cookie="age=41; expires=Thu, 20 Feb 2026 12:00:00 UTC;"
// console.log(document.cookie)

// async function fetchData(){
//     await fetch("http://127.0.0.1:5500/index.html")
// }
// fetchData()



// function* generate(){
//     for (let index = 1; index <=4 ; index++){
//         yield index
//     }
// }
// const gen=generate()
// console.log(gen)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}


const first=add(1)
console.log(first)
const second=first(2)
console.log(second)
const third=second(3)
console.log(third)

// console.log(add(1)(2)(3))