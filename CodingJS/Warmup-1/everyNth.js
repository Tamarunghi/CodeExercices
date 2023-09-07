function everyNth(str, n){
  const strArray = str.split("");
  const resultArray = [];
  
  strArray.forEach((char, index)=> {
    if(index % n === 0){
      resultArray.push(char);
     }
    });
 return resultArray.join("");  
}
