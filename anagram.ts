const validAnagram = (first: string, second: string) => {
  if (first.length !== second.length) {
    return false;
  }
  const countUsages = (string: string) =>
    string
      .split("")
      .reduce<Record<string, number>>(
        (prev, curr) => ({ ...prev, [curr]: prev[curr] ? prev[curr]++ : 1 }),
        {}
      );
  const letterUsageInFirst = countUsages(first);
  const letterUsageInSecond = countUsages(second);
  for (const charInFirst in letterUsageInFirst) {
    if (letterUsageInSecond[charInFirst] !== letterUsageInFirst[charInFirst]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz ", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat ", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
