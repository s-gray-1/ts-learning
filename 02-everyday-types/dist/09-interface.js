"use strict";
function printCoord1(pt) {
}
printCoord1({
    x: 100,
    y: 200
});
const bear = {
    name: 'winie',
    honey: true
};
console.log(bear.name);
console.log(bear.honey);
const bear1 = {
    name: 'winnie',
    honey: true
};
console.log(bear1.name);
console.log(bear1.honey);
const w = {
    title: 'hello ts',
    count: 100
};
//type 向现有类型添加字段 类型创建后不能更改---不能通过同一个类型的名称去扩展类型
// 报错
// type MyWindow1 {
//   title:string
// }
// type MyWindow1 {
//   count:number
// }
// const w:MyWindow1={
//   title:'hello ts',
//   count:100
// }
