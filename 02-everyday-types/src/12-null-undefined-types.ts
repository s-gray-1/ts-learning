let x2:undefined=undefined
let y:null=null
// let z:string=undefined
function doSomething(x1:string | null){
  if(x1===null){
    // 做一些事情
  }else{
    console.log('hello '+x1.toUpperCase());
    
  }
}
function liveDangerously(x1?:number|null){
  // !断言不可能是 null 和 undefined
  console.log(x1!.toFixed());
  
}
