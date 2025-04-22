// const promsiseSync=new Promise((resolve,reject)=>{
//     setTimeout(()=>{console.log("hello world")},2000)
// })

// const promise1=new Promise((resolve,reject)=>{  
//     console.log("Promise dong bo")
//     resolve("done sync");
// })

// console.log("sau khi tao promise")



const promise = new Promise((resolve, reject) => {
    resolve("done");
  });
  console.log(promise); // Promise {<fulfilled>: "done"}
  
  promise.then(result => {
    console.log(result); // "done"
  });