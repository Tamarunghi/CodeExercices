function lastDigit(a, b, c){
  function numbers(num){
    const toString = num.toString();
    const lastDigit = toString.charAt(toString.length-1);
    return lastDigit;
    }
  return numbers(a) === numbers(b)
}