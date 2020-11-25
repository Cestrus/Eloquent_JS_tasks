const sign = '#';
const size = 8;
let row = 1;
let str = '';

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++){
    if(row%2 === 0){
      if (j%2 === 0) {
        str += sign;
      } else {
        str += ' ';
      }
    } else {
      if (j%2 === 0) {
        str += ' ';
      } else {
        str += sign;
      }
    }    
  }
  str += '\n';
  row ++;
}

console.log(str);