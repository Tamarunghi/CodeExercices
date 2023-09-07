/*FORMA SIMPLIFICADA, SIN CORCHETES*/
function hasTeen(a, b, c){
  const array = [a,b,c]
  const isTeen = (num)=> num>=13 && num <=19
  return array.some(isTeen)
}
/* 
USANDO CORCHETES
function hasTeen(a, b, c){
  const array = [a,b,c]
  const isTeen = (num)=>{
    return num>=13 && num <=19
  }
  return array.some(isTeen)
}
*/