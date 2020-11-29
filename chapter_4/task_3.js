// Напишите функцию arrayToList, которая строит список, чья структура
// подобна показанной, если передать функции массив [1, 2, з] в качестве
// аргумента. Напишите также функцию listToArray, создающую массив из
// списка. Затем добавьте вспомогательную функцию prepend, принимающую
// элемент и список и создающую новый список, в котором заданный элемент
// добавлен в начало исходного списка. Кроме того, создайте функцию nth,
// 	принимающую список и число и возвращающую элемент, находящийся в заданной
// позиции в этом списке (где ноль соответствует первому элементу),
// или undefined, если элемента в заданной позиции не существует.
// 	Если вам этого все еще недостаточно, напишите рекурсивную версию функции
// nth.


const arrayToList = (arr, i= 0) => {
	if(!arr[i + 1]) return {value: arr[i], rest: undefined};
	return  {value: arr[i], rest: arrayToList(arr, i+1)};
}

console.log('arrayToList => ', arrayToList([1, 2, 3]));


const listToArray = (list, arr = []) => {
	if(!list.rest) return arr.push(list.value);
	else listToArray(list.rest, arr);
	arr.push(list.value);
	return arr;
}

console.log('listToArray => ', listToArray(arrayToList([1, 2, 3])));

const prepend = (elem = {value: 0}, list) => {
	return {value: elem.value, rest: list};
}

console.log('prepend => ', prepend({value: 0},  arrayToList([1, 2, 3])));


const nth = (list, num, i = 0, obj= {}) => {
	if(!list.rest) return obj;
	else if(num === i) obj.value = list.value;
	else nth(list.rest, num, i++);
	return obj;
}

console.log('nth => ', nth(arrayToList([1, 2, 3]), 1));
