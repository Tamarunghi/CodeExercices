function delDel(str){
  const hasDelInIndexOne = str.slice(1,4);
  return hasDelInIndexOne ==="del" && str.length>0
  ? str.replace("del","")
  : str
}