type Point = {
  x:number
  y:number
}
function printCoord(pt:Point){

}
printCoord({
  x:100,
  y:200
})
type ID = number | string
function printIds(id:ID){

}
printIds(100)
printIds('hello')
type UserInputSanitizedString =string
function sanitizedInput(str:string):UserInputSanitizedString{
  return str.slice(0,2)
}
let userInput = sanitizedInput('hello')
userInput = 'new Input'