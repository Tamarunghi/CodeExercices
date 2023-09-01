function frontBack(str){
return str.length<=1
  ? str
  : (()=>{
  const firstChar = str[0];
  const lastChar = str[str.length -1];
  return lastChar + str.slice(1,-1) + firstChar;
   })();
}