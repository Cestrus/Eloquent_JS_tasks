// Напишите функцию countBs, которая принимает строку в качестве единственного
// аргумента и возвращает число, показывающее, сколько больших
// букв ~в~ содержится в этой строке.
// Затем напишите функцию countChar, которая ведет себя как countBs, за исключением
// того, что принимает второй аргумент, указывающий, какие именно
// символы нужно посчитать (вместо того чтобы считать только большие
// буквы ~в~). Перепишите countBs, чтобы использовать эту новую функцию.

function countBs(str){
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if (str[i] === 'B') count++;
  }
  return count;
}

console.log(countBs('wqeqwbe Bbb qweqwe B'));

function countChar(str, ...rest){
  let count = 0;
  for(let i = 0; i < str.length; i++){
    for(let j=0; j<rest.length; j++){
      if (str[i] === rest[j]) count++;
    }
  }
  return count;
}

console.log(countChar('qwe SDF sddeytu QQQ', 'a', 'Q' ));