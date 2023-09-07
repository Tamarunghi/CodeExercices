function startOz(str){
  return str.startsWith("oz")
  ? str.slice(0,2)
  : str[0] !== "o" && str[1] === "z"
  ? str.slice(1,2)
  : str.startsWith("o")
  ? str.slice(0,1)
  :"";
}