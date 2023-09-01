function missingChar(str, n){
  return (n<0 || n>str.length)
    ? new Error("n is greater than the string length or is a negative number")
    : str.replace(str[n],"")
}