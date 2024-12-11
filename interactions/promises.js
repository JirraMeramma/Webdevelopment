const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("success"),3000)
});

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("failed"),4000)
});
const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("success"),5000)
});
Promise.all([promise1,promise2,promise3])
  .then((result)=>{
      console.log(result)
  
  }).catch((error)=>console.error(error));