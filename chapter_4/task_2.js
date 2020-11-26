// напишите две функции: reverseArray и reverseArrayinPlace. Первая функция, reverseArray,
// принимает массив в качестве аргумента и создает новый массив, содержащий
// те же элементы в обратном порядке. Вторая, reverseArrayinPlace, делает
// то же, что и метод reverse: преобразовывает массив, заданный в качестве
// аргумента, меняя порядок следования его элементов на обратный. Не используйте
// для этого стандартный метод reverse.


function reverseArray (arr = []){
  let revArr = [];
  for (let i = arr.length; i > 0; i--){
    revArr.push(arr[i-1]);
  }
  return revArr;
}

console.log([1, 2, 3, 4, 5, 6]);

function reverseArrayinPlace (arr=[]){
  let storeVar = null;
  for (let i = 0, j = arr.length - 1; i < j; i++, j--){
    storeVar = arr[i];
    arr[i] = arr[j];
    arr[j] = storeVar;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
console.log(reverseArrayinPlace([1, 2, 3, 4, 5]));
