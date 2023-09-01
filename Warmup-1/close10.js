function close10(a, b){
  const absDiffA = Math.abs(a-10)
  const absDiffB = Math.abs(b-10)
  return absDiffA === absDiffB
  ? 0
  : absDiffA < absDiffB
  ? a
  : b;
}