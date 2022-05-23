var fs = require('fs'); 
 
try{ 
    // 文件不存在
    var data = fs.readFileSync('sample.txt'); 
	console.log("同步读取: " + data.toString());
 } catch (err){ 
    console.log(err); 
 } 
 
console.log("Continuing with other statements..");
