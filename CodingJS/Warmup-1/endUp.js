function endUp(str){
 const upperCasePart = str.slice(-3).toUpperCase();
  const lowerCasePart = str.slice(0,-3);
  return (str.length <=3)
  ? str.toUpperCase()
  : lowerCasePart + upperCasePart
  
}