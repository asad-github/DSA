function isPalindrome(x: number): boolean {
  let strX = x.toString();
  let l = 0;
  let h = strX.length - 1;
  let isPalindrome = true;
  for (let i = 0; i <= strX.length; i++) {
    if (strX[l] != strX[h]) {
      isPalindrome = false;
    }
    l++;
    h--;
  }
  return isPalindrome;
}

function isPalindromeAdvanced(s: string): boolean {
  let sa = Array.from(s);
  let ma = sa
    .map((itm) => {
      if (/[a-z0-9A-Z]/.test(itm)) {
        return itm;
      }
      return null;
    })
    .filter(Boolean);
  let ms = ma.join("").toLowerCase();
  let l = 0;
  let h = ms.length - 1;
  while (l <= h) {
    if (ms[l] != ms[h]) {
      return false;
    }
    l++;
    h--;
  }
  return true;
}
