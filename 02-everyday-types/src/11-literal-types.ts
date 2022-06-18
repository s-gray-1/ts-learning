let testString ='hello world'
testString='前锋大前端'
const constantString ='hello World'
// constantString=''
let x1:'hello'='hello'
// x='world'
function printText(s:string,aligment:'left'|'right'|'center'){}
printText('hello','left')
// printText('hello','center1')
function compare(a:string,b:string):-1|0|1{
  return a===b?0:a>b?1:-1
}
interface Options {
  width:number
}
function configure(x:Options | 'auto'){

}
configure({
  width:100
})
configure('auto')
// configure('automatic')

let b1: true = true
let b2: false = false
const obj1 = {
  count:0
}
if(true){
  obj1.count =1
}
function handleRequest(url:string,method:'GET' | 'POST' | 'GUESS'){}
const req = {
  url:'https://example',
  method:'GET' 
} as const
handleRequest(req.url,req.method)