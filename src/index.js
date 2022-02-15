
module.exports = function towelSort (matrix) {
    let string = [];
    for (let i = 0; i < matrix.length; i++){
        if (i % 2 !== 0){
            let reverse = matrix[i].reverse();
            reverse.forEach(item => string.push(item))
        }else {
            matrix[i].forEach(item => string.push(item))
        }
    }
  return string;
}
