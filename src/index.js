// To rewrite function/ recursive case translate that into the iterative case

function joinElements(array, joinString) {
  let resultSoFar = ""; //initializze our result here

  for (let i = 0; i <= array.length - 1; i++) {
    resultSoFar += array[i] + joinString;
  }

  return resultSoFar + array[array.length - 1];
}

joinElements(["s", "cr", "t code", " :) :)"], "e");
