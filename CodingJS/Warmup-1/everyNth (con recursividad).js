function everyNth(str, n){
    if (str === '') {
    return '';
  }
  const result = str[0]
  
  return result + everyNth(str.slice(n),n)
}