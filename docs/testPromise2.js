
//promise thì đang có 3 cách tạo 
//1 là new promise
//2 là fetch
//3 là hàm trả về từ async 

//cách 3
const fetchData= async () => {
  const data= await fetch("https://viblo.asia/p/hieu-ve-promises-trong-javascript-1Je5EQ215nL");
  return 1;
}
fetchData().then((data)=>{
  console.log(data)
})
const types=fetchData()
console.log(types)

async function foo() {
  return 123;
}
foo().then(result => console.log(result)); // 123

async function bar() {
  throw new Error("Lỗi!");
}
bar().catch(err => console.log(err.message)); // "Lỗi!"
//cách 3 thì resolve chính là giá trị return trả về của hàm async
//reject chính là lỗi của hàm async

//cách2 thì cái hàm fetch là hàm built in thì nó có sẵn resolve và reject rồi 
// Đây chỉ là mô phỏng, không phải code thật của fetch!
function fetch(url, options) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(options?.method || "GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(new TypeError("Network request failed"));
    xhr.send(options?.body || null);
  });
} 

//cách 1 là tự tạo promise
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 đã hoàn thành!");
  }, 2000); // Giả lập độ trễ 2 giây
});



const generateNames1 = (reviews, generateNameApiDomain, token = null) => {
  const shopToken = token ? token : currentToken;
  let names = { name: reviews };

  return new Promise((resolve, reject) => {
    fetch(`https://${generateNameApiDomain}/client/extension/bulk_generate`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${shopToken}`,
        "Cache-Control": "no-cache, private",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(names),
    })
      .then((response) => response.json())
      .then((data) => {
        resolve({
          name: data,
          success: true,
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//cái reject của fetch nó ném ra lỗi nên mới cần dùng try catch để bắt lỗi
const generateNames2 = async (reviews, generateNameApiDomain, token = null) => {
  const shopToken = token ? token : currentToken;
  let names = { name: reviews };

  try {
    const response = await fetch(`https://${generateNameApiDomain}/client/extension/bulk_generate`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${shopToken}`,
        "Cache-Control": "no-cache, private",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(names),
    });
    const data = await response.json();
    return {
      name: data,
      success: true,
    };
  } catch (err) {
    // Ném lỗi ra ngoài để hàm gọi xử lý
    throw err;
  }
};


//
function testPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 đã hoàn thành!");
    }, 3000); // Giả lập độ trễ 3 giây
    console.log("Promise 2 đang chạy...");
  }
  );
  
}
testPromise().then((result) => {
  console.log(result); // "Promise 2 đã hoàn thành!"
}
).catch((error) => {
  console.error("Lỗi:", error);
});


//cái này nó tự tiêu thụ luôn , nên có 1 function bao bọc nó bên ngoài để khi gọi đến function đó thì cái promise này mới chạy 
//quên , cái khái niệm tiêu thụ thì nó phải lấy ra được resolve thì phải dùng then mới lấy được resolve 


const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 3 đã hoàn thành!");
    resolve("Promise 3 đã hoàn thành!");
  }, 2000); // Giả lập độ trễ 2 giây
  console.log("Promise 3 đang chạy...");
}
);
