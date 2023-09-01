function mapBully(someMap){
  return !someMap.has("a")
  ? someMap  
  :(()=>{
    const aValue = someMap.get("a")
    someMap.set("b",aValue)
    someMap.set("a","")
    return someMap
  })()
}
//thnks Mika for the help c:
// I need to practive more set, get y has