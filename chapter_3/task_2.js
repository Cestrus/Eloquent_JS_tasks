let flag = true;

function isEven(number){
  let num = number;
  if(num === 0){
    return (flag === true)? true : false;
  } else {
    flag = !flag;
    num--;
    return isEven (num);
  } 
}

console.log(isEven(10));