const power = (num: number, times: number): number => {
  if (times === 0) return 1;
  return num * power(num, times - 1);
};
power(2, 0); // 1
power(2, 2); // 4
power(2, 4); // 16

function factorial(num: number): number {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
factorial(1); // 1
factorial(2); // 2
factorial(4); // 24
factorial(7); // 5040

function productOfArray(arr: number[]): number {
  if (arr.length === 1) return arr[0];
  const last = arr.pop();
  return last! * productOfArray(arr);
}
productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60

function reverse(str: string): string {
  if (str.length === 1) return str;
  return reverse(str.slice(1)) + str[0];
}
reverse("awesome"); // 'emosewa'
reverse("rithmschool"); // 'loohcsmhtir'

function isPalindrome(str: string): boolean {
  if (str.length === 0 || str.length === 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}
isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false
