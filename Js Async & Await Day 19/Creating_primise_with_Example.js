const myPromise = new Promise((reject, resolve)=>{
    setTimeout(()=>{
        console.log("operation successfully complete");
    })
})
//use the promise

myPromise
.then((message)=>{
    console.log(message);
    // console.log("hello world");
})
.catch((err)=>{
    console.error(err);
})