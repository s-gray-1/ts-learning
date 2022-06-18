interface Point1 {
  x:number
  y:number
}
function printCoord1(pt:Point1){

}
printCoord1({
  x:100,
  y:200
})
// type 和 interface
// 扩展接口
interface Animal{
  name:string
}
interface Bear extends Animal {
  honey:boolean
}
const bear:Bear ={
  name:'winie',
  honey:true
}
console.log(bear.name);
console.log(bear.honey);
// 扩展类型别名
type Animal1 ={
  name:string
}
type Bear1 = Animal1 & {
  honey:boolean
}
const bear1:Bear1={
  name:'winnie',
  honey:true
}
console.log(bear1.name);
console.log(bear1.honey);
//interface 向现有类型添加字段
interface MyWindow {
  title:string
}
interface MyWindow {
  count:number
}
const w:MyWindow={
  title:'hello ts',
  count:100
}
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