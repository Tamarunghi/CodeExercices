function backAround(str){
  return str.length <=0
  ?  new Error("error")
  : (()=>{
  const lastChar = str[str.length-1]
  return lastChar + str +lastChar
 })()
  }