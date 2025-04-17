
async function handleUrl(url) {
    console.log(`Bắt đầu xử lý ${url}`);
    await new Promise(resolve => setTimeout(resolve, 5000)); // Giả lập độ trễ
    console.log(`Hoàn thành ${url}`);
    return `Kết quả từ ${url}`;
  }
  
  const urlArray = ['url1', 'url2', 'url3'];
  
  console.time('map'); // Đo thời gian chạy map
  const promises = urlArray.map( (urlLink) => {
    console.log(`Trước await cho ${urlLink}`);
    const result = handleUrl(urlLink);
    console.log(`Sau await cho ${urlLink}`);
    return result;
  });
  console.timeEnd('endmap');
  
  console.log('Mảng promises:', promises);
  
  // Chờ kết quả bằng Promise.allSettled
  console.log('Bắt đầu Promise.allSettled');
  Promise.allSettled(promises).then((results) => {
    console.log('Kết quả Promise.allSettled:', results);
  });