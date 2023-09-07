function max1020(a, b){
 const inRangeA = (a>=10 && a<=20)
 const inRangeB = (b>=10 && b<=20)
  return inRangeA && inRangeB
  ? Math.max(a,b)
  : !inRangeA && inRangeB
  ? b
  : inRangeA && !inRangeB
  ? a
  : 0
}