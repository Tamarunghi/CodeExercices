function loneTeen(a, b){
  const isTeen = (num)=>  num>=13 && num<=19 
  const aTeen = isTeen(a)
  const bTeen = isTeen(b)
  return (aTeen !== bTeen)
}