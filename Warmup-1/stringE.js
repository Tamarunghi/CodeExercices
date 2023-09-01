function stringE(str){
 const splitStr =str.split("")
 let counter = 0 
 
 splitStr.forEach((char)=>{
  if (char === "e") {
    counter++;
  }
 });
 
  return str.length>0 && counter>=1 && counter<=3
}