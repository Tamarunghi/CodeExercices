function mixStart(str){
  const hasIxInIndexTwo = str.slice(1,3) 
  return  hasIxInIndexTwo === "ix" && str.length>0
}