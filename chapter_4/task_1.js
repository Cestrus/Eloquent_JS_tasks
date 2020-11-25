// Напишите функцию range, которая принимает два аргумента, start и end,
// и возвращает массив, содержащий все числа от start до end включительно.
// Затем напишите функцию sum, которая принимает массив чисел и возвращает
// их сумму. Запустите пример программы и посмотрите, действительно
// ли она возвращает 55.
// В качестве дополнительного задания: измените функцию range так, чтобы
// она принимала необязательный третий аргумент, который указывал бы
// значение шага, используемое при построении массива. Если шаг не задан,
// элементы увеличиваются на единицу, что соответствует старому поведению.
// Вызов функции range(l, 10, 2) должен возвращать [1, з, 5, 7, 9). Убедитесь,
// что функция также работает и с отрицательными значениями шага, так что
// результатом range(5, 2, -1) является [5, 4, з, 2).

function range(start, end, step = 1){
  const arr = [];
  if (typeof start != 'number' 
      || typeof end != 'number' 
      || typeof step != 'number' 
      || step === 0 ) 
  {
    return 'Error namber or step';
  }
  if((start > end) && step > 0) {
    start = start + end;
    end = start - end;
    start = start - end;   
  }
  if(step > 0){
    for (let i = start; i <= end; i += step){    
      arr.push(i);
    }
  }
  if(step < 0){
    for (let i = start; i > end; i += step){    
      arr.push(i);
    }
  }
  return arr; 
}

console.log(range(10, 3, 2));
console.log(range(15, 3, -2));

function sum (arr){
  if (!Array.isArray(arr)) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if(!isNaN(+arr[i])){
      sum+=(+arr[i]);
    }
  }
  return sum;
}

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum(['1', '2', 3, 4, 5]));
console.log(sum([1, 2, '3', , 4, '5']));