// ya q substr no se recomienda usar, slice//
function front22(str){
  return str<2
  ? str
  : (()=>{const fisrtTwoChars = 
   str.slice(0,2)
  return fisrtTwoChars + str + fisrtTwoChars
        }())
}