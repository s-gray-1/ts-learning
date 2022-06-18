function printId(id: number | string|number[]){
  // console.log('you ID is:'+id);
  if(typeof id==='string'){
    console.log(id.toUpperCase());
    
  }else{
    console.log(id);
    
  }
  
  
}
printId(101)
printId('202')
function welcomePeople(x: string[]|string){
  if(Array.isArray(x)){
    console.log('hello,'+ x.join(' and '));
  }else{
    console.log('welcome lone traveler'+x);
    
  }
  
}
welcomePeople('A')
welcomePeople(['a','b'])
function getFirstThree(x:number[]|string):number[]|string{
  return x.slice(0,3)
}
console.log(getFirstThree([1,2,3,4]));
console.log(getFirstThree('abcdefg'));


