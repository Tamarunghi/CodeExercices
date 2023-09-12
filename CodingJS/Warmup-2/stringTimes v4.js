function stringTimes(str, n){
  if(n===1){
    return str
  }else{
  return str + stringTimes(str,n-1)
  }
}