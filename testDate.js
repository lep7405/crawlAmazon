let date = "December 12, 2024";
const key = "December";
const multiLangDate = { "December": "december" };
date = date.replace(key, multiLangDate[key]);
console.log(date); // Kết quả: "december 12, 2024"
const instance = new Date(date);
console.log(instance); // Kết quả: Thu Dec 12 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(instance.toLocaleString("en-US"))