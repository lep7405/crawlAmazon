// // const iphone={
// //     name: "iPhone",
// //     price: 1000,
// //     color: "black",
// //     brand: "Apple",
// //     model: "iPhone 14 Pro",
// //     takePhoto: () => {
// //         console.log(this)
// //     },
// // }

// // iphone.takePhoto();



// // const iphone11={
// //     name: "iPhone",
// //     price: 1000,
// //     color: "black",
// //     brand: "Apple",
// //     model: "iPhone 14 Pro",
// //     takePhoto() {
// //         console.log(this)
// //     },
// // }

// // iphone11.takePhoto();



// const obj = {
//     name: "Test Object",
//     show1: function() {
//       console.log("show1:", this.name);
//     },
//     show2: () => {
//       console.log("show2:", this.name);
//     },
//     show3() {
//       setTimeout(function() {
//         console.log("show3:", this.name);
//       }, 100);
//     },
//     show4() {
//       setTimeout(() => {
//         console.log("show4:", this.name);
//       }, 100);
//     }
//   };
  
//   obj.show1();
//   obj.show2();
//   obj.show3();
//   obj.show4();
console.log(window)
console.log(123)
this.name="Test Object";
console.log('name',window.name)
  function test1(callback){
    callback()
  }
    test1(function(){
        console.log("hello world")
        console.log(this.name)
    })
    
