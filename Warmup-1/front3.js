function front3(str){
 return str.length<=3
  ? str.repeat(3)
  :str.slice(0,3).repeat(3)
}