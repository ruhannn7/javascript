//lecture 1 
// console.log("first line")
// setTimeout(()=>{console.log("after 1 sec")},1000)
// setTimeout(()=>{console.log("after 2 sec")},2000) //asynchronus behaviour 
// setTimeout(()=>{console.log("after 3 sec")},3000) //asynchronus behaviour 
// setTimeout(()=>{console.log("after 4 sec")},4000) //asynchronus behaviour 
// setTimeout(()=>{console.log("after 5 sec")},5000) //asynchronus behaviour 
// setTimeout(()=>{console.log("after 6 sec")},6000) //asynchronus behaviour 
// setTimeout(()=>{console.log("after 7 sec")},7000) //asynchronus behaviour 
// setTimeout(()=>{console.log("after 8 sec")},8000) //asynchronus behaviour 
// setTimeout(()=>{console.log("after 9 sec")},9000) //asynchronus behaviour 
// setTimeout(()=>{console.log("after 10 sec")},10000) //asynchronus behaviour 
// setTimeout(()=>{console.log("after 11 sec")},11000) //asynchronus behaviour  
// console.log("second line")


//Lecture 2 
// setTimeout(()=>{console.log("after 5 seconds")},5*1000);
// setInterval(()=>{console.log("after every 3 seconds")},3*1000);
// setTimeout(()=>{clearInterval(timerId)},10000);
// const timerID = setInterval((()=>{console.log("setInterval")}),1000)
// const timeoutID=setTimeout(( => {clearInterval(timerID)},1000))

// let num = 1 
// const id = setInterval(() =>{
//     if(num===10)clearInterval(id)
//     console.log(num)
//     num+=1
// },1000) 

// LECTURE 3
// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")
// btn.addEventListener('click',()=>{
//     const li=document.createElement('li')
//     const dlt=document.createElement('button')
//     dlt.innerText="Delete"
//     li.innerText=name.value;
//     list.appendChild(li)
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })
//     li.appendChild(dlt)
//     list.appendChild(li)
//     name.value=""
// })


// LECTURE 4
// console.log ("starting homework...");

// setTimeout(()=>{
//     console.log("homework done!");
//     console.log("starting dinnner ...");
    
//     setTimeout(()=>{
//         console.log("dinner done!");
//         console.log("getting ready to go out ...");
    
//         setTimeout(()=>{
//             console.log("going to playground!");
//         },1000);
  
//     },1500)

// },2000)

//LECTURE 5
// function FinishHomework(callback){
//     console.log("Starting homework....");
//     setTimeout(() =>{
//         console.log("Homework Done!");
//         callback();

//     },2000);
// }

// function eatDinner(callback) {
//   console.log("Starting dinner...");
//   setTimeout(() => {
//     console.log("Dinner done!");
//     callback();
//   }, 1500);
// }

// function goToPlayground() {
//   console.log("Going to the playground!");
// }

// finishHomework(() => {
//   eatDinner(() => {
//     goToPlayground();
//   });
// });


//LECTURE 6 
// const p = new Promise((resolve, reject) => {
//     let done = true;
//     setTimeout(() => {
//         if(done){
//             resolve({name:"Anand",age:23})
//         }else{
//             reject("Word has not been completed")
//         }

//     },5000)
// })

// p.then((data) => {
//     console.log(data.name);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("Finally Block");
// });

// function doHomework(){
//     const p=new Promise((res,rej)=>{
//         let done = true;
//         setTimeout(()=>{
//             if(done){
//                 console.log("Homework completed")
//                 res
//             }
//         })
//     })
// }

function OrderFood(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Food Ordered!")
            resolve()
        },2000)
    })
}

function PrepareFood(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Food Prepared!")
            resolve()
        },2000)
    })
}

function DeliverFood(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Food Delivered!")
            resolve()
        },2000)
    })
}

async function FoodDelivery(){
    const data = await OrderFood()
    console.log(data)
    await PrepareFood()
    await DeliverFood()
}

FoodDelivery()