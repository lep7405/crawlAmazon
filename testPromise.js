// async function handleUrl(url) {
//     console.log(`Bắt đầu xử lý ${url}`);
//     await new Promise(resolve => setTimeout(resolve, 5000)); // Giả lập độ trễ
//     console.log(`Hoàn thành ${url}`);
//     return `Kết quả từ ${url}`;
//   }

//   const urlArray = ['url1', 'url2', 'url3'];

//   console.time('map'); // Đo thời gian chạy map
//   const promises = urlArray.map( (urlLink) => {
//     console.log(`Trước await cho ${urlLink}`);
//     const result = handleUrl(urlLink);
//     console.log(`Sau await cho ${urlLink}`);
//     return result;
//   });
//   console.timeEnd('endmap');

//   console.log('Mảng promises:', promises);

//   // Chờ kết quả bằng Promise.allSettled
//   console.log('Bắt đầu Promise.allSettled');
//   Promise.allSettled(promises).then((results) => {
//     console.log('Kết quả Promise.allSettled:', results);
//   });

// const arr = Array.from({ length: 10000 }, (_, i) => i + 1);

// arr.map((i) => {
//   console.log(i);
// });


const arr = Array.from({ length: 10000 }, (_, i) => i + 1);

// arr.map(async (i) => {
//   await new Promise(resolve => setTimeout(resolve, 10000));
//   console.log(i); // Tất cả promise bắt đầu gần như cùng lúc, in ra sau 1 giây
// });

arr.map((i) => {
  const start = Date.now();
  // Vòng lặp giả lập tác vụ nặng ~2 giây
  while (Date.now() - start < 2000) {}
  console.log(i); // In ra từng số theo thứ tự, mỗi số cách nhau ~2 giây
});