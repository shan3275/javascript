const dayjs = require('dayjs');
 
let today = dayjs();
 
console.log("ISO")
console.log(today.format());
 
console.log("\nDate")
 
console.log(today.format("YYYY-MM-DD h:mm:ss").toString());
console.log(today.format("YYYYMMDDhmmss").toString());
