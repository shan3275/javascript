// json数据
var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}'; 
 
// 解析json
var jsonParsed = JSON.parse(jsonData); 
 
// 访问元素
console.log(jsonParsed.persons[0].name);
