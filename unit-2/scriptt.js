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


//LECTURE 4
console.log ("starting homework...");
setTimeout(()=>{
    console.log("homework done!");
    console.log("starting dinnner ...");
    setTimeout(()=>{
        console.log("dinner done!");
        console.log("getting ready to go out ...");
        setTimeout(()=>{
            console.log("going to playground!");
        },1000);

    },1500)
},
2000)