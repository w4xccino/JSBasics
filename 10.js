function rangeOfNumbers(startNum, endNum) {
  if (endNum <= startNum) {
    return [startNum];
  }
  else {
    let answer = rangeOfNumbers(startNum, endNum - 1);
    answer.push(endNum);
    return answer;
  }
};

console.log(rangeOfNumbers(4, 4))

//NICE!!!!!!!!!!!!!!!!!!!!!!!!!!1 :D
