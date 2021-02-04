function naiveStringSearch(longer: string, shorter: string) {
  let count = 0;
  for (var i = 0; i < longer.length; i++) {
    for (var j = 0; j < shorter.length; j++) {
      if (shorter[j] !== longer[i + j]) break;
      if (j === shorter.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveStringSearch("michaelilor lotr of the rings", "l"));
